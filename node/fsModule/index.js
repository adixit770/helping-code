const fs = require("fs");

fs.writeFile("new.txt", "First node js class", (err, res) => {
  console.log(err, "file created", res);
});
fs.readFile("new.txt", "utf-8", (err, res) => {
  console.log(err, "data read", res);
});

console.log("after");
