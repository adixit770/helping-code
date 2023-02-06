import "./App.css";
import { Provider } from "react-redux";
import store from "./store";
import "bootstrap/dist/css/bootstrap.min.css";
import BasicTabs from "./components/Tabs";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
      <BasicTabs />
      </Provider>
    </div>
  );
}

export default App;
