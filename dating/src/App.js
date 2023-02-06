import "./App.css";
import React from 'react';
import { BrowserRouter } from "react-router-dom";
import AllRoutes from "./component/allrouts";
function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <AllRoutes/>
    </BrowserRouter>
    </div>
  );
}

export default App;