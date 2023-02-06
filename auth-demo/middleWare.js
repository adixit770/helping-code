const jwt = require("jsonwebtoken");
require("dotenv").config();
const auth = (req, res, next) => {
  const token = req.body.token;
  if (!token) {
    return res.send("No token provided");
  }
  const decode = jwt.verify(token, process.env.SECRET_KEY);
  req.user = decode;
  return next();
};

module.exports = auth;
