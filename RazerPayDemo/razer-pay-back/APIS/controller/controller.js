const Razorpay = require("razorpay");
const crypto = require("crypto");
const Payment = require("../model/model");
require("dotenv").config();

const instance = new Razorpay({
  key_id: process.env.RAZERPAY_API_KEY,
  key_secret: process.env.RAZERPAY_API_SECRET,
});

const getRazerController = async (req, res) => {
  res.send({ success: true, status: 200, key: process.env.RAZERPAY_API_KEY });
};
const postRazerController = async (req, res) => {
  try {
    const options = {
      amount: Number(req.body.amount * 100),
      currency: "INR",
    };
    const orders = await instance.orders.create(options);
    res.send({ orders, message: "success", status: 200 });
  } catch (e) {
    res.send({ message: e.message, status: 400 });
  }
};

const paymentVerificationController = async (req, res) => {
  console.log(req.body);
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
    req.body;
  const body = razorpay_order_id + "|" + razorpay_payment_id;

  const expectedSignature = crypto
    .createHmac("sha256", process.env.RAZERPAY_API_SECRET)
    .update(body.toString())
    .digest("hex");

  const isAuthenticate = razorpay_signature === expectedSignature;

  if (isAuthenticate) {
    await Payment.create({
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
    });
    res.redirect(
      `http://localhost:3001/paymentsuccessfull?reference=${razorpay_payment_id}`
    );
  } else {
    res.send({ success: false, status: 400 });
  }
};
module.exports = {
  getRazerController,
  postRazerController,
  paymentVerificationController,
};
