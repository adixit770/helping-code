const express = require("express");
const fs = require("fs");
const multer = require("multer");
const app = express.Router();

const storageFunction = multer.diskStorage({
  filename: (res, file, cb) => {
    cb(null, file.originalname);
  },
  destination: (res, file, cb) => {
    cb(null, "./images");
  },
});
const limits = {
  fileSize: 38640,
};
const fileFilter = (req, file, cb) => {
  console.log("file => ", file);
  let allowedFileType = ["image/png", "image/jpg", "image/jpeg"];
  if (allowedFileType.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb({ message: `Please upload only files of type png, jpg and jpeg` });
  }
};
const upload = multer({
  storage: storageFunction,
  fileFilter,
  limits,
});
app.get("/getData", (req, res) => {
  //   const data =fs.readFileSync("");
  console.log("hello");
  fs.readFile("data.json", "utf-8", (err, data) => {
    if (err) {
      res.send({ error: "error occured" });
    }
    res.send(data);
  });
});
app.post("/postData", (req, res) => {
  //   const data =fs.readFileSync("");
  const temp = req.body;
  console.log("temp => ", temp);
  fs.readFile("data.json", "utf-8", (err, data) => {
    if (err) {
      res.send({ error: "error occured" });
    }
    // res.send(data);
    const tempArray = JSON.parse(data);
    tempArray.push(temp);
    fs.writeFile("data.json", JSON.stringify(tempArray), (err) => {
      if (err) {
        res.send({ error: "error occured" });
      }
      res.send({ message: "success", data: tempArray });
    });
  });
});
app.put("/updateData/:id", (req, res) => {
  //   const data =fs.readFileSync("");
  const temp = req.body;
  const { id } = req.params;
  fs.readFile("data.json", "utf-8", (err, data) => {
    if (err) {
      res.send({ error: "error occured" });
    }
    // res.send(data);
    const tempArray = JSON.parse(data);
    tempArray[id] = temp;
    fs.writeFile("data.json", JSON.stringify(tempArray), (err) => {
      if (err) {
        res.send({ error: "error occured" });
      }
      res.send({ message: "success" });
    });
  });
});
app.delete("/deleteData/:id", (req, res) => {
  const { id } = req.params;
  fs.readFile("data.json", "utf-8", (err, data) => {
    if (err) {
      res.send({ error: "error occured" });
    }
    // res.send(data);
    const tempArray = JSON.parse(data);
    // tempArray.splice(id, 1);
    console.log(
      "tempArray => ",
      tempArray.filter((tem) => tem.id != id)
    );
    fs.writeFile(
      "data.json",
      JSON.stringify(tempArray.filter((tem) => tem.id != id)),
      (err) => {
        if (err) {
          res.send({ error: "error occured" });
        }
        res.send({ message: "success" });
      }
    );
  });
});
const fileMiddleWare = upload.single("image");
app.post("/uploadfile", (req, res) => {
  fileMiddleWare(req, res, (err) => {
    if (!!err) {
      res.status(400).send({ status: 400, message: err.message });
    } else {
      res.status(200).send({ status: 200, message: "success" });
    }
  });
});
module.exports = app;
