import React from 'react';
import { BrowserRouter as Router, Routes, Route , Link } from 'react-router-dom'
import Home from './components/Home.js'
import You from './components/You'
import Are from './components/Are'
import img from './images/yoder.png'

export default function App() {

  return (
    <Router>
      <img src={img} alt="" className='hello'/>
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
      <div>
        <Routes> 
          <Route path ="/" element={<Home />} />
          <Route path ="/you" element={<You />} />
          <Route path ="/are" element={<Are />} />
        </Routes>
      </div>
      <footer>
        Footer - Let freedom rinnnnnnnng, in the walls of this cityyyyyyyyy, let the whole world know that today, is the the day of reckoningggg
        
      </footer>
    </Router>
  );
}