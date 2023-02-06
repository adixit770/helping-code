import "./App.css";
import React, { createContext, useState } from "react";
import AllRoutes from "./component/allrouts";
import { BrowserRouter } from "react-router-dom";
export const userContext = createContext();

function App() {
  const [data, setData] = useState();
  return (
    <userContext.Provider value={{ data, setData }}>
      <BrowserRouter>
        <AllRoutes />
      </BrowserRouter>
    </userContext.Provider>
  );
}

export default App;
