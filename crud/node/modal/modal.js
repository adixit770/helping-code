const mongoose = require("mongoose");

const userSchema = mongoose.Schema({ name:{ type:String,required:true}, });

const user = mongoose.model("users", userSchema);

const createUser = async (userObj) => {
  try {
    const valid = await user.create(userObj);
    console.log("VALID=>", valid);
    return valid
  } catch (err) {
    console.log(err);
  }
};

module.exports = { createUser };
