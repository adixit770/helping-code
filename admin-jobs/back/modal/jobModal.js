const mongoose = require("mongoose");
const jobSchema = mongoose.Schema({
  Jobtitle: String,
  jobdescription: String,
  Joblocation: String,
  Salary: String,
  Workplacetype: String,
  Tags: String,
  companyLogo: String,
  companyName: String,
  status: Boolean,
});
const jobModel = mongoose.model("job", jobSchema);

module.exports = jobModel;
