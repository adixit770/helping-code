import * as React from "react";
import './App.css';
import Reducer from "./component";
import Common from "./component/userContext";



function App() {
  return (
    
      <Common>
       <Reducer/>
      </Common>
  
  );
}

export default App;
