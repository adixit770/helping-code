import React from "react";
import { Routes, Route } from "react-router-dom";
import CvCard from "../cv";
import UserProfile from "../UserProfile";


function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<UserProfile/>} />
      <Route path="/cv" element={<CvCard/>} />
    </Routes>
  );
}
export default AllRoutes;
