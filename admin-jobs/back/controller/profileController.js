const profileModel = require("../modal/profileModal");
const bcrypt = require("bcryptjs");
const multer = require("multer");
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./image");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
const uploadImage = multer({ storage });
///////////////////////////////
const UploadImageMiddelware = uploadImage.single("image");

const getProfile = async (req, res) => {
  try {
    const add = await profileModel.find();
    // console.log(add);
    return res.send({ add, status: 200 });
  } catch (err) {
    return res.send({ message: err.message, status: 400 });
  }
};
const addprofile = async (req, res) => {
  const file = req.file;
  // console.log("TEMPfile====>", file);
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
    token,
  } = req.body;
  const temp = {
    email,
    password,
    mobile,
    fullName,
    bio,
    country,
    state,
    city,
    address,
    personalWebsite,
    profilePhoto: file.originalname,
  };
  // console.log("TEMPaddprofile====>", temp);

  const add = await profileModel.create(temp);
  return res.send({ add, status: 200 });
};

const updateprofile = async (req, res) => {
  try {
    const { id } = req.params;
    const file = req.file;
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
      personalWebsite,
      token,
    } = req.body;
    // console.log("profilebody===>", req.body);
    const hashPassword = bcrypt.hashSync(password);
    const temp = {
      email,
      mobile,
      fullName,
      bio,
      country,
      state,
      city,
      address,
      personalWebsite,
      profilePhoto: file?.originalname,
    };
    // console.log("temp====>", temp);
    // console.log("id====>", id);

    const add = await profileModel.findByIdAndUpdate(id, { $set: temp });
    return res.send({ add, status: 200 });
  } catch (e) {
    return res.send({ message: e.message, status: 400 });
  }
};

const changepassword = async (req, res) => {
  const { id } = req.params;
  const { confirmPassword, newpassword, oldpassword } = req.body;
  const hashPassword = bcrypt.hashSync(newpassword);

  // console.log(id);
  const add = await profileModel.findById(id);
  if (add) {
    const isMatch = await bcrypt.compare(oldpassword, add.password);
    if (isMatch) {
      if (!!confirmPassword) {
        if (confirmPassword === newpassword) {
          await profileModel.updateOne(
            { _id: id },
            { $set: { password: hashPassword } }
          );
          return res.send({
            message: "Password update successfully",
            status: 200,
          });
        } else {
          return res.send({ message: "Password does not match", status: 400 });
        }
      } else {
        return res.send({ message: "Please enter your password", status: 400 });
      }
    } else {
      return res.send({ message: "old password does not match", status: 400 });
    }
  } else {
    return res.send({ status: 400 });
  }
};

module.exports = {
  updateprofile,
  addprofile,
  UploadImageMiddelware,
  getProfile,
  changepassword,
};
