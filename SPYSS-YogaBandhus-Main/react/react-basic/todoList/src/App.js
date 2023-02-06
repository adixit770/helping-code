import "./App.css";
import React from "react";

import Routeing from "./commponents/router";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./commponents/navbar";


function App() {
  return (<>
    <BrowserRouter>
     <Navbar/>
    <Routeing/>
    </BrowserRouter>
   </>
    
  );
}

export default App;
