const os = require("os");

const architechture = os.arch();

const totalMemory = os.totalmem();

console.log("totalMemory => ", totalMemory / 1024 / 1024 / 1024);

const freeMemory = os.freemem();

console.log("freeMemory => ", freeMemory / 1024 / 1024 / 1024);

const host = os.hostname();

console.log("host => ", host);
