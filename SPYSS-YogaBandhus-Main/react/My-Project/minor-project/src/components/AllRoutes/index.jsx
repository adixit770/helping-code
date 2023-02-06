import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Cards from '../Cards';
import Checkout from '../Checkout';
import YourCart from '../YourCart';
import CheckCart from '../checkCart';


function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<YourCart/>} />
      <Route path="/cards" element={<Cards/>} />
      <Route path="/cart" element={<CheckCart/>} />
      <Route path="/checkout" element={<Checkout/>} />
    </Routes>
  );
}

export default AllRoutes