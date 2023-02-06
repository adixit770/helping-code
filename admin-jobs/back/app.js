const express = require("express");
require("dotenv").config();
const { urlencoded } = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const router = require("./router");

mongoose.set("strictQuery", false);
mongoose.connect(process.env.URL);
app.use(express.json());
app.use(
  urlencoded({
    extended: true,
  })
);
app.use(
  cors({
    origin: "*",
  })
);
app.use("/api", router);
router.use("/image", express.static("image"));
router.use("/employee", express.static("employee"));
router.use("/jobs", express.static("jobs"));
// console.log(process.env.PORT);
  const server =app.listen(process.env.PORT)
  const io = require('./socket').init(server)
  io.on('connection', socket => {
    console.log("client connected");

    socket.on('disconnect', function () {
      console.log('client disconnected');
   });
  })