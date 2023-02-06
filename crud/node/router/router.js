const express = require("express");
const { getData,getDataById,postData,putData,postPhoto,deleteData } = require("../controller");
const router = express.Router();


  //////////get api ////////////
  router.get("/get", getData);
  //get by id
  router.get("/getID/:id",getDataById);
  
  // create data
  
  router.post("/submit",postData);
  // // update data
  
  router.put("/update/:id",putData);
  
  //    delete data
  
  router.delete("/delete/:id", deleteData);
  

  ///////////post Image///////////
  router.post("/upload",postPhoto);

  module.exports = router;