const express = require("express");
const app = express();
const cors = require("cors");
const mongoose=require("mongoose");
const  router = require("./router/router");
const { port, dbUrl } = require("./config/config");
mongoose.connect(dbUrl);
app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);
app.use("/api", router);
router.use("/image", express.static("image"));

app.listen(port, () => {
  console.log("server started");
});
