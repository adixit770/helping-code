import "./App.css";
import CC from "./components/CC";
import { UserProvider } from "./context/userContext";
function App() {
  return (
    <div className="App">
      <UserProvider>
        <CC />
      </UserProvider>
    </div>
  );
}

export default App;
