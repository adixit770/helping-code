
import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const MainLayout =({Children})=>
{
    return(
     <>
        <Navbar/>
        {Children}
        <Footer/>
        </>
      
    )
}
export default MainLayout