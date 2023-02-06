const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  mobile: { type: Number, required: true },
  password: { type: String, required: true },
  userProfile: { type: String },
  DateOfBirth: { type: Date },
});


const signupProcesses = mongoose.model("signupProcesses", userSchema);

const signupCreateUser = async (userObj) => {
  console.log("userObj", userObj);
  try {
    const valid = await signupProcesses.create(userObj);
    return { data: valid, status: 200, message: "success" };
  } catch (err) {
    return { status: 200, message: "error" };
  }
};

const getUserDataSignIn = async () => {
  try {
    
    const valid = await signupProcesses.aggregate([
     
      {
        $project: {
          firstName: 1,
          lastName: 1,
          email: 1,
          mobile: 1,
          password: 1,
          userProfile: 1,
          date:"$DateOfBirth",
          age: {$floor:{
            $divide: [
              { $subtract: [new Date(), "$DateOfBirth"] },
              365 * 24 * 60 * 60 * 1000,
            ],}
          },
        },
      },
    ]);
    console.log("valid=>", valid);
    if (valid.length) {
      return { data: valid, status: 200, message: "success" };
    } else {
      return { status: 420, message: "incorrect Email address or password" };
    }
  } catch (err) {
    return { status: 400, message: "error" };
  }
};

const usergetUserById = async (id) => {
  try {
    const valid = await signupProcesses.findById(id);
    return { data: valid, status: 200, message: "success" };
  } catch (err) {
    return { status: 400, message: "error" };
  }
};
const userDeleteUser = async (id) => {
  try {
    const response = await signupProcesses.findByIdAndDelete(id);
    if (response) {
      return { data: response, status: 200, message: "success" };
    } else {
      return { status: 400, message: "error" };
    }
  } catch (e) {
    return { status: 400, message: "error" };
  }
};

const userupdateUser = async (id, data) => {
  try {
    const response = await signupProcesses.findByIdAndUpdate(id, { $set: data });
    return { data: response, status: 200, message: "success" };
  } catch (err) {
    return { status: 400, message: "error" };
  }
};
module.exports = {
  signupCreateUser,
  getUserDataSignIn,
  userDeleteUser,
  userupdateUser,
  usergetUserById,
};
