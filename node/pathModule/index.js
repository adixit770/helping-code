const path = require("path");
// const baseName = path.basename(
//   "C:/Users/PlacementADDA/Desktop/mern/node/pathModule/index.js"
// );

// const extensionName = path.extname(
//   "C:/Users/PlacementADDA/Desktop/mern/node/pathModule/index.js"
// );

// const directoryName = path.dirname(
//   "C:/Users/PlacementADDA/Desktop/mern/node/pathModule/index.js"
// );

const urlFields = path.parse(
  "C:/Users/PlacementADDA/Desktop/mern/node/pathModule/index.js"
);
console.log(urlFields);

// C:\Users\PlacementADDA\Desktop\mern\node\pathModule\index.js
