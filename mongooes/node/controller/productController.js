const {
  productcreateUser,
  productdeleteUser,
  productupdateUser,
  productgetUser,
  productgetUserById,
} = require("../modal/productModal");
const multer = require("multer");
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./image");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
/////////////////// product
const productgetData = async (req, res) => {

  console.log(req.query);
  const { page, pageSize, search, personName } = req.query;
  const get = await productgetUser(page, pageSize, search, personName);
  res.send({ data: get, status: 200, message: "success" });
};

/////////////////////
const productgetDataById = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  const get = await productgetUserById(id);
  res.send(get);
};
///////////////////////////////
const uploadImage = multer({ storage });
///////////////////////////////
const UploadImageMiddelware = uploadImage.single("image");
///////////////////////////////
const productpostData = async (req, res) => {

  const file = req.file;
  const { productName, quantity, price, category } = req.body;
  console.log("file",file,"req.body",req.body);
  let temp = {
    productName,
    quantity,
    price,
    profile: file.originalname,
    category,
  };
  const validation = await productcreateUser(temp);
  res.send(validation);
  
};

///////////////////////////////
const productputData = async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  const update = await productupdateUser(id, data);
  res.send(update);
};
///////////////////////////////
const productdeleteData = async (req, res) => {
  const { id } = req.params;
  const response = await productdeleteUser(id);
  res.send(response);
};
///////////////////////////////
module.exports = {
  productgetData,
  productgetDataById,
  productpostData,
  productputData,
  productdeleteData,
  UploadImageMiddelware,
};
