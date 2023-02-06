import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginForm from "../login";
import Welcome from "../welcome";



function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Welcome/>} />
      <Route path="/cv" element={<LoginForm/>} />
    </Routes>
  );
}
export default AllRoutes;
