import React from "react";
import { Routes,Route } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import CartPage from "../Pages/CartPage";
import CheckoutPage from "../Pages/CheckoutPage";
import NoDataFound from "../Pages/NoDataFound";
const AllRoutes=()=>{

    return(
        <Routes>
        <Route path="/" element = {<HomePage/>}/>
        <Route path="/cart" element = {<CartPage/>}/>
        <Route path="/checkout" element = {<CheckoutPage/>}/>
        <Route path="*" element = {<NoDataFound/>}/>
        </Routes>
    )
    

}
export default AllRoutes