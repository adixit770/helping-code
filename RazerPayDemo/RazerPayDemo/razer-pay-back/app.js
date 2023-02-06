const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const router = require("./APIS/router/router");
const { urlencoded } = require("body-parser");

require("dotenv").config();
const app = express();
mongoose.set("strictQuery", false);
mongoose.connect(process.env.DB_URL);

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/razerpay", router);

app.listen(process.env.PORT, () => {
  console.log(`Server Sarted At ${process.env.PORT}`);
});
