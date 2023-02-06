const employeeModel = require("../modal/employeeModal");
const multer = require("multer");

const profilestorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./employee");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
//////////////////////////////////
const uploadphoto = multer({ storage: profilestorage });
///////////////////////////////
const UploadCompanyPhotoMiddelware = uploadphoto.single("logo");

//////////////////////////////////////////
const addemployee = async (req, res) => {
  const file = req.file;

  const {
    name,
    email,
    password,
    mobile,
    organization,
    sector,
    confirmPassword,
    location,
    token,
  } = req.body;
  const temp = {
    username: name,
    email,
    password,
    mobile,
    organization,
    sector,
    location,
    companyLogo: file.originalname,
    status: false,
  };
  // console.log("TEMP====>", temp);
  if (password === confirmPassword) {
    // console.log("req", req);
    const add = await employeeModel.create(temp);
    return res.send({ add, status: 200, auth: true });
  } else {
    return res.send({ message: "password not match", status: 403 });
  }
};
const getEmployee = async (req, res) => {
  const add = await employeeModel.find();
  return res.send({ add, status: 200 });
};
const getEmployeeById = async (req, res) => {
  const { id } = req.params;

  const add = await employeeModel.findById(id);
  return res.send({ add, status: 200 });
};
const updateEmployee = async (req, res) => {
  const { id } = req.params;
  const file = req.file;

  const {
    name,
    email,
    password,
    mobile,
    organization,
    sector,
    location,
    status,
    confirmPassword,
    token,
  } = req.body;
  const temp = {
    username: name,
    email,
    password,
    mobile,
    organization,
    sector,
    location,
    companyLogo: file?.originalname,
    status,
  };
  if (password === confirmPassword) {
    const add = await employeeModel.findByIdAndUpdate(id, { $set: temp });
    return res.send({ add, status: 200, auth: true });
  } else {
    return res.send({
      message: "password not match",
      status: 403,
      auth: false,
    });
  }
};
const deleteEmployee = async (req, res) => {
  const { id } = req.params;
  const add = await employeeModel.findByIdAndDelete(id);
  return res.send({ add, status: 200 });
};
///////////////////////////////////////////
module.exports = {
  getEmployee,
  addemployee,
  getEmployeeById,
  updateEmployee,
  deleteEmployee,
  UploadCompanyPhotoMiddelware,
};
