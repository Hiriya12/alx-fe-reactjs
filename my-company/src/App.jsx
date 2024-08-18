import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './componenets/Home';
import About from './componenets/About';
import Services from './componenets/Services';
import Contact from './componenets/Contact';
import Navbar from './componenets/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;



