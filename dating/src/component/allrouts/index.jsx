import { Routes, Route} from "react-router-dom";
import React from 'react';
import LandingPage from '../landingPage';
import Career from '../pages/careers';
import FindLove from '../pages/findlove';
import Home from '../pages/home';
import About from '../pages/about';
import Plans from '../pages/plans';
import Contacts from "../pages/contacts";
import User from "../pages/user";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage/>}/>
      <Route path="/career" element={<Career/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/plans" element={<Plans/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/findLove" element={<FindLove/>}/>
      <Route path="/contacts" element={<Contacts/>}/>
      <Route path="/user" element={<User/>}/>
    </Routes>
  );
};

export default AllRoutes;
