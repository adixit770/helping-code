const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const router = require("./router/router");
const { port, dbUrl } = require("./config/config");
mongoose.connect(dbUrl);
app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);
app.use("/api", router);
// router.use("/image",express.static("image"))
// router.use("/categoryImage",express.static("categoryImage"))
// router.use("/userImage",express.static("userImage"))
app.listen(port, () => {
  console.log("server started");
});

// localStorage.setItem("key","value")
