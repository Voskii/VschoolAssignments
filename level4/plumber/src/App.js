import React from 'react';
import { BrowserRouter as Router, Routes, Route , Link } from 'react-router-dom'
import Home from './components/Home.js'
import About from './components/About'
import Services from './components/Services'

export default function App() {
  return (
    <Router>
      <nav style={{margin:10}}>
        <Link to="/" style={{ padding:5 }}>
          Home
        </Link>        
        <Link to="/about" style={{ padding:5 }}>
          About
        </Link>                
        <Link to="/services" style={{ padding:5 }}>     
          Services
        </Link>
      </nav>
      <Routes> 
        <Route path ="/" element={<Home />} />
        <Route path ="/about" element={<About />} />
        <Route path ="/services" element={<Services />} />
      </Routes>
      <footer>
        Freedom isn't free, chase the pipe dream. Visit us at PrimerandDriver@gmail.com
      </footer>
    </Router>
  );
}