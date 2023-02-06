const chalk = require("chalk");
const validator = require("validator");

const myEmail = "Naya@gmail.com";
console.log(
  validator?.isEmail(myEmail)
    ? chalk.green.underline("true")
    : chalk.red.underline("no data")
);
