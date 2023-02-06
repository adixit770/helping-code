import "./App.css";
import { Box, Container, Typography } from "@mui/material";
import TableDemo from "./components/tableDemo";

import React from "react";
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


function App() {
console.log("hello => ",process.env.URL)
  return (
    <Container className="App">
      <Typography variant="h3" gutterBottom>
        Crud Operations
      </Typography>
      <TableDemo />
 
    </Container>
  );
}

export default App;
