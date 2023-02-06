const fs = require("fs");
const multer = require("multer");
const { createUser } = require("../modal/modal");

/////////////////////middleware////////////////////////

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "image");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
//////////////////////////

//   const limits = {
//     fileSize: 38640,
//   };
//////////////////////////////////////////////////////////////
const fileFilter = (req, file, cb) => {
  console.log("file => ", file);
  let allowedFileType = ["image/png", "image/jpg", "image/jpeg"];
  if (allowedFileType.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb({ message: `Please upload only files of type png, jpg and jpeg` });
  }
};
///////////////////////////////////////////////////////////////
const upload = multer({ storage: storage, fileFilter });
///////////////////////////////////////////////////////////////
const fileMiddleWare = upload.single("image");
//////////////////////////middleware///////////////////////////
const getData = (req, res) => {
  if (req.url == "/get") {
    const data = fs.readFileSync("data.json", "utf-8");

    res.send(data);
  }
};
const getDataById = (req, res) => {
  const { id } = req.params;
  const data = fs.readFileSync("data.json", "utf-8");
  let value = JSON.parse(data);
  const x = value.filter((row) => row.id == id);
  console.log(value, id, x);
  res.send(x);
};
const postData = async (req, res) => {
  const validation = await createUser(req.body);
  console.log("Validation=>", validation);
    res.send({ message: "success" });

  // if (req.url == "/submit") {
  //   let value = req.body;
  //   const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));
  //   data.push(value);
  //   fs.writeFileSync("data.json", JSON.stringify(data));

  //   res.send({ message: "success" });
  // }
};
const postPhoto = (req, res) => {
  fileMiddleWare(req, res, (err) => {
    if (!!err) {
      res.status(400).send({ status: 400, message: err.message });
    } else {
      res.status(200).send({ status: 200, message: "success" });
    }
  });
};
const putData = (req, res) => {
  let value = req.body;
  const { id } = req.params;
  const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));
  const pos = data.map((a) => a.id).indexOf(id);
  data[pos] = value;
  fs.writeFileSync("data.json", JSON.stringify(data));
  res.send({ message: "success" });
};
const deleteData = (req, res) => {
  const { id } = req.params;
  console.log("delete=>", id);
  fs.readFile("data.json", "utf-8", (err, data) => {
    if (err) {
      res.send("error occured");
    }
    const temp = JSON.parse(data);
    const pos = temp.map((e) => e.id).indexOf(parseInt(id));
    console.log(pos);
    temp.splice(pos, 1);
    fs.writeFile("data.json", JSON.stringify(temp), (err) => {
      if (err) {
        res.send({ error: "error occured" });
      }
      res.send({ message: "success" });
    });
  });
};

module.exports = {
  getData,
  getDataById,
  postData,
  putData,
  postPhoto,
  deleteData,
};
