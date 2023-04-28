import React from 'react';
import './index.css';
import Home from './Routes/Home';
import About from './Routes/About';
import Services from './Routes/Services';
import Contact from './Routes/Contact';

import { BrowserRouter, Route, Routes} from "react-router-dom";



const App = () => {
  return (
    <>
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/services" element={<Services/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/contact" element={<Contact/>}></Route>
    </Routes>
    </BrowserRouter>
    
     </>
  )
}

export default App;
