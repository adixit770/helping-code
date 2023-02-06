import { Provider } from 'react-redux';
import './App.css';
import Navbar from './components/navbar';
import Shop from './components/shop';
import store from './store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
   <Navbar/>
   <Shop/>
    </Provider>
    </div>
  );
}

export default App;
