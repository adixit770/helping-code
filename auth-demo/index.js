const express = require("express");
const getConnection = require("./dbConnection");
require("dotenv").config();
const route = require("./routes");
const app = express();
app.use(express.json());
app.use("/api", route);
getConnection();
app.listen(process.env.PORT, () => {
  console.log("listening...");
});
