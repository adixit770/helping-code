const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const profileModel = require("../modal/profileModal");
require("dotenv").config();
const register = async (req, res) => {

  const {
    email,
    password,
    mobile,
    fullName,
    bio,
    country,
    state,
    city,
    address,
    profilePhoto,
    personalWebsite,
  } = req.body;
  const salt = bcrypt.genSaltSync(10);

  const hashPassword = bcrypt.hashSync(password,salt);
  const temp = {
    email,
    password: hashPassword,
    mobile,
    fullName,
    bio,
    country,
    state,
    city,
    address,
    profilePhoto,
    personalWebsite,
  };
  if (!(req.body && email && password)) {
    res.send("All fields are required!!");
    return;
  }
  const isExist = await profileModel.findOne({ email: email });
  if (isExist) {
    res.send("Email already exist!!");
    return;
  }
  const UserData = await profileModel.create(temp);

  res.send(UserData);
};

const login = async (req, res) => {
  if (!(req.body && req.body.email && req.body.password)) {
    res.send({ massage: "All fields are required!!", status: 400 });
    return;
  }
  const isExist = await profileModel.findOne({
    email: req.body.email,
  });
  const isMatch = await bcrypt.compare(req.body.password, isExist.password);
  if (!isMatch) {
    res.send({ massage: "Credential not matched!!", status: 400 });
    return;
  }
  const { email, password, _id } = isExist;
  
  const data = { email, password, _id };
  const token = jwt.sign({ userId: _id }, process.env.SECRET_KEY, {
    expiresIn: "1h",
  });
  data.token = token;
  // console.log(data);
  res.send({ data, status: 200, });
};

module.exports = { register, login };
