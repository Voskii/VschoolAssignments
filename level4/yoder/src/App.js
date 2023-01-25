import React from 'react';
import { BrowserRouter as Router, Routes, Route , Link } from 'react-router-dom'
import Home from './components/Home.js'
import You from './components/You'
import Are from './components/Are'
import img from './images/yoder.png'
import ohWow from './images/ohwow.jpg'

export default function App() {

  return (
    <Router>
      <div className='navContainer'>
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
        <img src={img} alt="" className="ohhiyoda" />
      </div>
      <div>
        <Routes> 
          <Route path ="/" element={<Home />} />
          <Route path ="/you" element={<You />} />
          <Route path ="/are" element={<Are />} />
        </Routes>
      </div>
      <footer>
        Footer - Disclaimer: Some characters might not be real
      </footer>
    </Router>
  );
}

{/* <img src={ohWow} alt="" className="topBackgrnd"/>  */}