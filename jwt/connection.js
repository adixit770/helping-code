const mongoose=require("mongoose");
require('dotenv').config()
const url=process.env.URL;
console.log(url);
const getConnection = () => {
  mongoose.connect(url, (err) => {
    if (!err) {
      console.log("connected to dataBase");
    }
  });
};
module.exports = getConnection;