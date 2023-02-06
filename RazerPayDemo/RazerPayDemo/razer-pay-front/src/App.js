import "./App.css";
import AllRoutes from "./components/AllRoutes";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <BrowserRouter>
      <ChakraProvider>
        <AllRoutes />
      </ChakraProvider>
    </BrowserRouter>
  );
}

export default App;
