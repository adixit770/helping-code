const multer = require("multer");
const jobModel = require("../modal/jobModal");
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./jobs");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
const uploadImage = multer({ storage });
///////////////////////////////
const UploadJobImageMiddelware = uploadImage.single("companyLogo");

const getjob = async (req, res) => {
  try {
    const add = await jobModel.find();
    // console.log(add);
    return res.send({ add, status: 200 });
  } catch (err) {
    return res.send({ message: err.message, status: 400 });
  }
};

const addjob = async (req, res) => {
  const file = req.file;
  const {
    Workplacetype,
    Joblocation,
    Jobtitle,
    Salary,
    Tags,
    jobdescription,
    companyName,
  } = req.body;
  const temp = {
    Jobtitle,
    jobdescription,
    Joblocation,
    Salary,
    Workplacetype,
    Tags,
    status: false,
    companyLogo: file?.originalname,
    companyName,
  };
  // console.log("tempjob===>", temp);
  const add = await jobModel.create(temp);
  return res.send({ add, status: 200 });
};

const updatejob = async (req, res) => {
  try {
    const { id } = req.params;
    const file = req.file;
    const {
      Workplacetype,
      Joblocation,
      Jobtitle,
      Salary,
      Tags,
      jobdescription,
      companyName,
    } = req.body;
    const temp = {
      Jobtitle,
      jobdescription,
      Joblocation,
      Salary,
      Workplacetype,
      Tags,
      status: false,
      companyLogo: file?.originalname,
      companyName,
    };
    const add = await jobModel.findByIdAndUpdate(id, { $set: temp });
    return res.send({ add, status: 200 });
  } catch (e) {
    return res.send({ message: e.message, status: 400 });
  }
};
const deletejob = async (req, res) => {
  const { id } = req.params;
  const add = await jobModel.findByIdAndDelete(id);
  return res.send({ add, status: 200 });
};

const getjobById = async (req, res) => {
  const { id } = req.params;
  const add = await jobModel.findById(id);
  return res.send({ add, status: 200 });
};
module.exports = {
  updatejob,
  addjob,
  UploadJobImageMiddelware,
  getjob,
  deletejob,
  getjobById,
};
