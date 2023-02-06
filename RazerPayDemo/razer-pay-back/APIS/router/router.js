const express = require("express");
const { getRazerController,postRazerController,paymentVerificationController } = require("../controller/controller");
const router = express.Router();

router.get("/get/key", getRazerController);
router.post("/post-order", postRazerController);
router.post("/payment-verification", paymentVerificationController);

// router.put("/put", putRazerController);
// router.delete("/delete", deleteRazerController);

module.exports = router;