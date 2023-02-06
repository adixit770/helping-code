const express = require("express");
const router = express.Router();
const { urlencoded } = require("express");
router.use(
  urlencoded({
    extended: true,
  })
);

const {
  getData,
  postData,
  putData,
  deleteData,
  getDataById,
  getAllCategory,
  UploadcategoyImageMiddelware,
} = require("../controller");
const { login, register } = require("../controller/adminLogin");
const {
  productgetData,
  productgetDataById,
  productpostData,
  productputData,
  productdeleteData,
  UploadImageMiddelware,
} = require("../controller/productController");
const {
  signupPostData,
  UploaduserImageMiddelware,
  getUserData,
  userdeleteData,
  userputData,
  usergetDataById,
} = require("../controller/userController");
//////////////////////////////// product
router.get("/productget", productgetData);

//get by id
router.get("/productget/:id", productgetDataById);

// create data

router.post("/productsubmit", UploadImageMiddelware, productpostData);
// // update data
router.put("/productupdate/:id", UploadImageMiddelware, productputData);

//    delete data

router.delete("/productdelete/:id", productdeleteData);

//////////////////////////////// category
//////////get api ////////////
router.get("/get", getData);
//////////all category
router.get("/getcategory", getAllCategory);

//get by id
router.get("/get/:id", getDataById);

// create data

router.post("/submit", UploadcategoyImageMiddelware, postData);
// // update data

router.put("/update/:id", UploadcategoyImageMiddelware, putData);

//    delete data

router.delete("/delete/:id", deleteData);

///////////post Image///////////
// router.post("/upload",postPhoto);
//////////////////////////////////
//////////Signup/////////////////

router.post("/UserSubmit", UploaduserImageMiddelware, signupPostData);
router.put("/userUpdate/:id", UploaduserImageMiddelware, userputData);
router.post("/login", login);
router.post("/register", register);
router.get("/userget/:id", usergetDataById);

////////////////////////////

router.get("/getUser", getUserData);
router.delete("/userdelete/:id", userdeleteData);

module.exports = router;
