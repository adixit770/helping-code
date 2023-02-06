const express = require("express");
const User = require("./model/userModal");
const route = express.Router();
const jwt = require("jsonwebtoken");
route.post("/register", async (req, res) => {
  if (!(req.body && req.body.name && req.body.email && req.body.password)) {
    res.send("All fields are required!!");
    return;
  }
  const isExist = await User.findOne({ email: req.body.email });
  if (isExist) { 
    res.send("Email already exist!!");
    return;
  }
  const UserData = await User.create(req.body);
  const { name, email, password, _id } = UserData;
  const UserDataClone = { name, email, password, _id };
  const token = jwt.sign({ userId: _id }, process.env.SCREAT_KEY,{});
  UserDataClone.token = token;
  console.log(UserDataClone);
  res.send(UserDataClone);
});
// route.post("/login", async (req, res) => {
//   if (!(req.body && req.body.email && req.body.password)) {
//     res.send("All fields are required!!");
//     return;
//   }
//   const isExist = await User.findOne({
//     email: req.body.email,
//     password: req.body.password,
//   });
//   if (!isExist) {
//     res.send("Credential not matched!!");
//     return;
//   }
//   const { name, email, password, _id } = isExist;
//   const UserDataClone = { name, email, password, _id };
//   const token = jwt.sign({ userId: _id }, process.env.SECRET_KEY);
//   UserDataClone.token = token;
//   console.log(UserDataClone);
//   res.send(UserDataClone);
// });


module.exports = route;