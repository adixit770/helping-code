const candidateModel = require("../modal/candidateModal");
const multer = require("multer");
const io = require('../socket');
const profilestorage = multer.diskStorage({
  destination: (req, file, cb) => {
    if (file.fieldname === "resume") {
      // if uploading resume
      cb(null, "./resume");
    } else {
      // else uploading image
      cb(null, "./image");
    }
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
//////////////////////////////////
const uploadphoto = multer({ storage: profilestorage }).fields([
  {
    name: "resume",
    maxCount: 1,
  },
  {
    name: "image",
    maxCount: 1,
  },
]);
///////////////////////////////
const UploadphotoMiddelware = uploadphoto;
///////////////////////////////
const addCandidate = async (req, res) => {
  const file = req.files;
  const {
    fullName,
    email,
    password,
    confirmPassword,
    mobile,
    post,
    salary,
    bio,
    location,
    skills,
    token,
  } = req.body;
  const temp = {
    fullName,
    email,
    password,
    mobile,
    post,
    bio,
    salary,
    location,
    skills,
    status: false,
    resume: file.resume[0].originalname,
    profilePhoto: file.image[0].originalname,
  };

  if (password === confirmPassword) {
    const add = await candidateModel.create(temp);

    io.getIo().emit('posts',{action:"create",post:add});

    return res.send({ add, status: 200, auth: true });
  } else {
    return res.send({
      message: "password not match",
      status: 403,
      auth: false,
    });
  }
};
const getCandidate = async (req, res) => {
  const add = await candidateModel.find();
  return res.send({ add, status: 200 });
};
const getCandidateById = async (req, res) => {
  const { id } = req.params;
  const add = await candidateModel.findById(id);
  return res.send({ add, status: 200 });
};
const updateCandidate = async (req, res) => {
  const { id } = req.params;
  const file = req.files;
  const {
    fullName,
    email,
    password,
    confirmPassword,
    mobile,
    post,
    bio,
    location,
    skills,
    salary,
    status,
    token,
  } = req.body;
  const temp = {
    fullName,
    email,
    password,
    mobile,
    post,
    bio,
    location,
    skills,
    status,
    salary,
    resume: file?.resume[0].originalname,
    profilePhoto: file?.image[0].originalname,
  };
  if (password === confirmPassword) {
    const add = await candidateModel.findByIdAndUpdate(id, { $set: temp });
    return res.send({ add, status: 200, auth: true });
  } else {
    return res.send({
      message: "password not match",
      status: 403,
      auth: false,
    });
  }
};
const deleteCandidate = async (req, res) => {
  const { id } = req.params;
  const add = await candidateModel.findByIdAndDelete(id);
  return res.send({ add, status: 200 });
};
module.exports = {
  addCandidate,
  getCandidate,
  deleteCandidate,
  updateCandidate,
  getCandidateById,
  UploadphotoMiddelware,
};
