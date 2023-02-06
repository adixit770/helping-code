import { Container } from "@mui/material";
import React from 'react';
import Navbar from "../navbar";
import Footer from "../footer";
const MainLayout = ({ children }) => {
  return (
    <Container maxWidth="">
      <Navbar/>
      {children}
    
    </Container>
  );
};

export default MainLayout;
