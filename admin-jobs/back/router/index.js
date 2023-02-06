const express = require("express");
const { urlencoded } = require("express");
const auth = require("../auth");

const { login, register } = require("../controller/adminLogin");
const {
  addCandidate,
  getCandidate,
  updateCandidate,
  deleteCandidate,
  getCandidateById,
  UploadphotoMiddelware,
} = require("../controller/candidateController");
const {
  addemployee,
  UploadCompanyPhotoMiddelware,
  getEmployee,
  getEmployeeById,
  updateEmployee,
  deleteEmployee,
} = require("../controller/employeeController");
const {
  addjob,
  UploadJobImageMiddelware,
  getjob,
  deletejob,
  getjobById,
  updatejob,
} = require("../controller/jobController");
const {
  UploadImageMiddelware,
  addprofile,
  updateprofile,
  getProfile,
  changepassword,
} = require("../controller/profileController");
const { verification, updatePassword } = require("../sendEmail");
const router = express.Router();
router.use(
  urlencoded({
    extended: true,
  })
);
////////////////////////////
router.post("/login", login);
router.post("/register", register);
/////////////////////////////////////////
// candidate
router.post("/addCandidate/:token", auth, UploadphotoMiddelware, addCandidate);
router.get("/getCandidate/:token", auth, getCandidate);
router.get("/getCandidateById/:id/:token", auth, getCandidateById);
router.put(
  "/updateCandidate/:id/:token",
  auth,
  UploadphotoMiddelware,
  updateCandidate
);
router.delete("/deleteCandidate/:id/:token", auth, deleteCandidate);
////////////////////////////////////////////////
// send mail / changepassword /profile
router.post("/verification", verification);
router.post("/resetPassword/:id/:token", updatePassword);
/////////////////////////////////////////////////
router.post("/addProfile", auth, UploadImageMiddelware, addprofile);
router.put(
  "/updateProfile/:id/:token",
  auth,
  UploadImageMiddelware,
  updateprofile
);
router.put("/ChangePassword/:id/:token", auth, changepassword);
router.get("/getProfile/:token", auth, getProfile);
//////////////////////////////////////////

router.post(
  "/addemployee/:token",
  auth,
  UploadCompanyPhotoMiddelware,
  addemployee
);
router.get("/getemployee/:token", auth, getEmployee);
router.get("/getemployeeById/:id/:token", auth, getEmployeeById);
router.delete("/deleteEmployee/:id/:token", auth, deleteEmployee);
router.put(
  "/updateEmployee/:id/:token",
  auth,
  UploadCompanyPhotoMiddelware,
  updateEmployee
);
/////////////////jobs/////////
router.post("/addJob/:token", auth, UploadJobImageMiddelware, addjob);

router.get("/getjob/:token", auth, getjob);
router.get("/getjobById/:id/:token", auth, getjobById);
router.delete("/deletejob/:id/:token", auth, deletejob);
router.put(
  "/updatejob/:id/:token",
  auth,
  UploadJobImageMiddelware,
  updatejob
);
module.exports = router;
