import "./App.css";
import React from "react";
import { BrowserRouter, NavLink } from "react-router-dom";

import AllRoutes from "./routes";
import { Home } from "@material-ui/icons";
import Navbar from "./commponents/Navbar";

function App() {
  return (
    <BrowserRouter>
      <AllRoutes />
    </BrowserRouter>
  );
}

export default App;
