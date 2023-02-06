import "./App.css";
import React, { createContext, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import AllRoutes from "./components/allrouts";
export const userContext = createContext();
function App() {
  const [login, setLogin] = useState(false);

  return (
    <userContext.Provider value={{ login, setLogin }}>
      <BrowserRouter>
        <AllRoutes />
      </BrowserRouter>
    </userContext.Provider>
  );
}

export default App;
