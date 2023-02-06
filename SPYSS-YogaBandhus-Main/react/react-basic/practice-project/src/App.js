import './App.css';
import React from 'react'
import Navbar from './components/navbar';
import Banner from './components/banner';
// import About from './components/about';
// import Footer from './components/footer';
import Home from './components/about/home';

function App() {
  return (
    <div className="App">
    <Navbar/>
    <Banner/>
    <Home/>
    </div>
  );
}

export default App;
