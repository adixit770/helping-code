const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  productName: { type: String, required: true },
  categoryName: { type: String },
  quantity: { type: String, required: true },
  price: { type: String, required: true },
  category: { type: mongoose.Schema.Types.ObjectId },
  profile: { type: String },
});

const product = mongoose.model("products", productSchema);

/////////////////////////////////product
const productcreateUser = async (userObj) => {
  try {
    const valid = await product.create(userObj);
    return { data: valid, status: 200, message: "success" };
  } catch (err) {
    return { status: 400, message: "error" };
  }
};
const productdeleteUser = async (id) => {
  try {
    const response = await product.findByIdAndDelete(id);
    if (response) {
      return { data: response, status: 200, message: "success" };
    } else {
      return { status: 400, message: "error" };
    }
  } catch (e) {
    return { status: 400, message: "error" };
  }
};

const productupdateUser = async (id, data) => {
  try {
    const response = await product.findByIdAndUpdate(id, { $set: data });
    return { data: response, status: 200, message: "success" };
  } catch (err) {
    return { status: 400, message: "error" };
  }
};

const productgetUser = async (
  page = 0,
  pageSize = 6,
  search = "",
  personName = ""
) => {
  try {
    // const valid = await product.find()
    const valid = await product.aggregate([
      {
        $match: {
          productName: { $regex: search, $options: "i" },
        },
      },
      {
        $lookup: {
          from: "users",
          localField: "category",
          foreignField: "_id",
          as: "categories",
        },
      },
      {
        $replaceRoot: {
          newRoot: {
            $mergeObjects: [{ $arrayElemAt: ["$categories", 0] }, "$$ROOT"],
          },
        },
      },
      {
        $project: {
          productName: 1,
          quantity: 1,
          price: 1,
          categoryName: 1,
          profile: 1,
        },
      },
      {
        $match: {
          categoryName: { $regex: personName, $options: "i" },
        },
      },
      {
        $limit: pageSize * page + 5,
      },
      
     
    ]);
    const totalCount=await product.count()
    return { data: valid,totalCount, status: 200, message: "success" };
  } catch (err) {
    console.log("err=>", err);
    return { status: 400, message: err?.message };
  }
};
const productgetUserById = async (id) => {
  try {
    const valid = await product.findById(id);
    return { data: valid, status: 200, message: "success" };
  } catch (err) {
    return { status: 400, message: "error" };
  }
};
module.exports = {
  productcreateUser,
  productdeleteUser,
  productupdateUser,
  productgetUser,
  productgetUserById,
};
