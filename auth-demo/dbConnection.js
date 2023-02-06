const mongoose = require("mongoose");
require("dotenv").config();
const mongoUrl = process.env.MONGO_URL;
const getConnection = () => {
  mongoose.connect(mongoUrl, (err) => {
    if (!err) {
      console.log("connected to db");
    }
  });
};
module.exports = getConnection;
