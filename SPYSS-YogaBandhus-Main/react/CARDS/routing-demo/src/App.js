import { BrowserRouter } from "react-router-dom";
import AllRoutes from "./AllRoutes";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <AllRoutes />
    </BrowserRouter>
  );
}

export default App;
