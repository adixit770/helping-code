const jwt = require("jsonwebtoken");
require("dotenv").config();

const auth = (req, res, next) => {
  // console.log("Token_Auth_=>", req.body, req.params);
  const { token } = req.params;

  // console.log(token);

  jwt.verify(req.body.token|| token, process.env.SECRET_KEY, (err, valid) => {
    // console.log("valid===>", valid, "err===>", err);
    if (err) {
      return res.send({ auth: false, message: "INVALID TOKEN" });
    }
    req.userId = valid.id;
    next();
  });
};

module.exports = auth;
