const {
  signupCreateUser,
  getUserDataSignIn,
  userDeleteUser,
  userupdateUser,
  usergetUserById,
} = require("../modal/userModal");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./userImage");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
const uploadImage = multer({ storage });
///////////////////////////////
const UploaduserImageMiddelware = uploadImage.single("userImage");
///////////////////////
const signupPostData = async (req, res) => {
  const file = req.file;
  const { firstName, lastName, email, mobile, password, date } = req.body;
  let temp = {
    firstName,
    lastName,
    email,
    mobile,
    password,
    DateOfBirth: new Date(date),
    userProfile: file.originalname,
  };
  console.log("temp", temp);
  const validation = await signupCreateUser(temp);
  res.send(validation);
};

const getUserData = async (req, res) => {
  const get = await getUserDataSignIn();
  res.send(get);
};

const userputData = async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  const update = await userupdateUser(id, data);
  res.send(update);
};
const userdeleteData = async (req, res) => {
  const { id } = req.params;
  const response = await userDeleteUser(id);
  res.send(response);
};
const usergetDataById = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  const get = await usergetUserById(id);
  res.send(get);
};
module.exports = {
  signupPostData,
  UploaduserImageMiddelware,
  getUserData,
  userdeleteData,
  userputData,
  usergetDataById,
};
