// const path=require("path");
// fs.writeFileSync("demo","hello this is node");
// const data=fs.readFileSync("demo","utf-8");
// console.log(data);

// fs.mkdirSync("test");
// fs.writeFileSync("test/new demo","i love you");
// fs.unlinkSync("demo");
const fs = require("fs");
const http = require("http");

const data = fs.readFileSync("data.json", "utf-8");
console.log(JSON.parse(data));

const server = http.createServer((req, res) => {
  if (req.url === "/get") {
    res.write()
    res.end(data);
  } else res.end("no data found");
});

server.listen(8500)
