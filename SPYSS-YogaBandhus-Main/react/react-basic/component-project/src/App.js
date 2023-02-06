import React from 'react';
import './App.css';
import Navbar from './component/Navbar';

import About from './component/About';
// import Testimonial from './component/testimonial';
import Footer from './component/Footer';
import SimpleSlider from './component/Banner';

function App() {
  return (
    <>
          <Navbar/>;
          <SimpleSlider/>;
          <About/>;
          {/* <Testimonial/>; */}
          <Footer/>;
          </>
  )
}

export default App;
