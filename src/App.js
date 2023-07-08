import React from 'react';
import './App.css';
import Home from './components/Home';

import Navbar from './components/Navbar';
import About from './components/About';

import Work from './components/Work';
import Contact from './components/Contact';

function App() {
  return (
    <>
     <Navbar/>
     <Home/>
     <About/>
     <Work/>
     <Contact/>
    </>
    
  );
}

export default App;