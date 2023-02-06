import React from "react";
import { Route, Routes } from "react-router-dom";
import CardDetails from "../components/cardDetails";
import Form from "../components/form";
import Home from "../components/home";
import Welcome from "../components/welcome";

export default function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/home" element={<Home/>} />
      <Route path="/user/:id" element={<CardDetails />} />
      {/* <Route path="/form/:id" element={<Form/>} /> */}

      <Route path="*" element={<h1>No match found</h1>} />
    </Routes>
  );
}
