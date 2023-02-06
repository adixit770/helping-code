const mongoose = require("mongoose");
const UserSchema = mongoose.Schema({
  email: String,
  password: String,
  mobile: String,
  fullName: String,
  bio: String,
  country: String,
  state: String,
  city: String,
  address: String,
  profilePhoto: String,
  personalWebsite: String,
});
const profileModel = mongoose.model("profile", UserSchema);

module.exports = profileModel;
