import React from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";

function MainLayout({ children }) {
  return (
    <div>
      <Navbar/>
      {children}
      <Footer/>
    </div>
  );
}

export default MainLayout;
