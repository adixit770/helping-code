import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../HomePage";

function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage/>} />
    </Routes>
  );
}

export default AllRoutes;
