import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Home";
import PaymentSuccessfull from "../PaymentSuccessfull";
export default function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/paymentsuccessfull" element={<PaymentSuccessfull />} />
    </Routes>
  );
}
