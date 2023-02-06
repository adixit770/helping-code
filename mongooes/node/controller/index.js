const { createUser, deleteUser, updateUser, getUser, getUserById,getcategory, } = require("../modal/modal");
const multer = require("multer");
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./categoryImage");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
const uploadImage = multer({ storage });
///////////////////////////////
const UploadcategoyImageMiddelware = uploadImage.single("categoryImage");
///////////////////////////////
//////////////////// category
const getData = async (req, res) => {
  const{page,pageSize,search}=req.query
  const get = await getUser(page,pageSize,search);
  res.send(get);
};
////////////////////getallCategory
const getAllCategory = async (req, res) => {
  const get = await getcategory();
  res.send(get);
};

/////////////////////
const getDataById = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  const get = await getUserById(id);
  res.send(get);
};
///////////////////////////////
const postData = async (req, res) => {
  const file = req.file;
  const { categoryName, title} = req.body;
  let temp = {
    categoryName,
    title,
    categoryProfile: file.originalname,
  };
  const validation = await createUser(temp);
  res.send(validation);
};
///////////////////////////////
const putData = async (req, res) => {
  const { id } = req.params;
  const data = req.body
  const update = await updateUser(id, data);
  res.send(update);
};
///////////////////////////////
const deleteData = async (req, res) => {
  const { id } = req.params;
  const response = await deleteUser(id);
  res.send(response);
};
///////////////////////////////
module.exports = {
  getData,
  postData,
  putData,
  deleteData,
  getDataById,
  getAllCategory,
  UploadcategoyImageMiddelware
};
