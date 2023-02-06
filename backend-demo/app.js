const express = require("express");
const route = require("./routes");
// const FileUpload = require("express-fileupload");
const app = express();
app.use(express.json());
// app.use(FileUpload());
app.use(express.static("images"));

app.use("/images", express.static("images"));
// app.use(upload.single("image"))
app.use("/api", route);

const server = app.listen(8000, () => {
  const port = server.address().port;
  console.log(`Running at ${port}`);
});
