const nodemailer = require("nodemailer");
const bcrypt = require("bcryptjs");
const profileModel = require("./modal/profileModal");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const sendEmail = async ({ link, email }) => {
  const transporter = nodemailer.createTransport({
    // host: "smtp.gmail.com",
    service: "Gmail",
    // port: 465,
    // secure: true,
    auth: {
      user: "adixit770@gmail.com",
      pass: "bnnlpdlbujyrxzzj",
    },
  });

  const mailOptions = {
    from: "adixit770@gmail.com",
    to: email,
    subject: "Sending Email using Node.js",
    text: link,
  };

  await transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
      return res.send({ status: 500, message: error.message });
    } else {
      console.log("Email sent: " + info.response);
      return res.send({ status: 200, res: info.response });
    }
  });
};
const verification = async (req, res) => {
  const { email } = req.body;
  try {
    if (email) {
      const oldUser = await profileModel.find({ email });
      console.log("olduser====>", oldUser);
      if (!oldUser) {
        return res.send({ message: "email does not exists", status: 400 });
      } else {
        const secret = process.env.SECRET_KEY + oldUser[0]?.password;
        const token = jwt.sign(
          { email: oldUser[0].email, id: oldUser[0]._id },
          secret,
          {
            expiresIn: "5m",
          }
        );
        const link = `http://localhost:3000/resetPassword/${oldUser[0]._id}/${token}`;
        console.log("link====>", link);
        sendEmail({ link, email });
        res.send({ message: "Email sent successfully", status: 200 });
      }
    } else {
      res.send({ message: "please enter your email", status: 400 });
    }
  } catch (err) {
    console.log("Catcherr=>", err);
  }
};

const updatePassword = async (req, res) => {
  const { id, token } = req.params;
  console.log("id==>", id, "token===>", token);
  const { password, confirmPassword } = req.body;
  const hashPassword = bcrypt.hashSync(password);
  const oldUser = await profileModel.find({ _id: id });
  if (!oldUser) {
    return res.send({ message: "email does not exists", status: 400 });
  }
  const secret = process.env.SECRET_KEY + oldUser[0].password;
  try {
    const verify = jwt.verify(token, secret);
    if (verify.email !== oldUser.email) {
      if (!!confirmPassword) {
        if (confirmPassword === password) {
          await profileModel.updateOne(
            { _id: id },
            { $set: { password: hashPassword } }
          );
          return res.send({
            status: 200,
            message: "password update successfully",
          });
        } else {
          return res.send({ status: 500, message: "password does not match" });
        }
      } else {
        return res.send({ status: 500, message: "please enter your password" });
      }
    }
  } catch (err) {
    return res.send({ status: 500, message: "Invalid Token !" });
  }
};
module.exports = { verification, updatePassword };
