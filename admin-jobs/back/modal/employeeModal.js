const mongoose = require("mongoose");
const employeeSchema = mongoose.Schema({
  username: String,
  email: String,
  password: String,
  mobile: String,
  organization: String,
  sector: String,
  location: String,
  companyLogo: String,
  status: Boolean,
});
const employeeModel = mongoose.model("employee", employeeSchema);

module.exports = employeeModel;
