import React, { useState } from 'react';
import './App.css';
import Home from './components/Home';

import Navbar from './components/Navbar';
import About from './components/About';

import Work from './components/Work';
import Contact from './components/Contact';


function App() {
  const [dark,setDark] = useState(false);
  
  return (
    <>
     <Navbar dark={dark} setDark={setDark} />
     <Home dark={dark} />
     <About dark={dark}/>
     <Work dark={dark}/>
     <Contact dark={dark}/>
    </>
    
  );
}

export default App;