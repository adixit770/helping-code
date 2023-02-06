const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  categoryName: { type: String, required: true },
  title: { type: String, required: true },
  categoryProfile: { type: String },
});

const user = mongoose.model("users", userSchema);

///////////////////////////////// category
const createUser = async (userObj) => {
  try {
    const valid = await user.create(userObj);
    return { data: valid, status: 200, message: "success" };
  } catch (err) {
    return { status: 200, message: "error" };
  }
};

const deleteUser = async (id) => {
  try {
    const response = await user.findByIdAndDelete(id);
    if (response) {
      return { data: response, status: 200, message: "success" };
    } else {
      return { status: 400, message: "error" };
    }
  } catch (e) {
    return { status: 400, message: "error" };
  }
};

const updateUser = async (id, data) => {
  try {
    const response = await user.findByIdAndUpdate(id, { $set: data });
    return { data: response, status: 200, message: "success" };
  } catch (err) {
    return { status: 400, message: "error" };
  }
};

const getUser = async (page = "", pageSize = "", search = "") => {
  try {
    const valid = await user
      .find({ categoryName: { $regex: search, $options: "i" } })
      .limit(pageSize * page + 6);
    return { data: valid, status: 200, message: "success" };
  } catch (err) {
    return { status: 400, message: "success" };
  }
};
const getcategory = async () => {
  try {
    const valid = await user.find({}, { categoryName: 1 });
    return { data: valid, status: 200, message: "success" };
  } catch (err) {
    return { status: 400, message: "success" };
  }
};

const getUserById = async (id) => {
  try {
    const valid = await user.findById(id);
    return { data: valid, status: 200, message: "success" };
  } catch (err) {
    return { status: 400, message: "error" };
  }
};

module.exports = {
  createUser,
  deleteUser,
  updateUser,
  getUser,
  getUserById,
  getcategory,
};
