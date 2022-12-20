import React from 'react';
import { BrowserRouter as Router, Routes, Route , Link } from 'react-router-dom'
import Home from './components/Home.js'
import You from './components/You'
import Are from './components/Are'

export default function App() {
  return (
    <Router>
      <nav style={{margin:10}}>
        <Link to="/" style={{ padding:5 }}>
          Home
        </Link>        
        <Link to="/you" style={{ padding:5 }}>
          You
        </Link>                
        <Link to="/are" style={{ padding:5 }}>     
          Are
        </Link>
      </nav>
        
      <footer>
        <Routes> 
          <Route path ="/" element={<Home />} />
          <Route path ="/you" element={<You />} />
          <Route path ="/are" element={<Are />} />
        </Routes>
        Footer 
      </footer>
    </Router>
  );
}