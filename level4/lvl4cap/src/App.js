import React, { useState, useEffect, useContext} from "react"
import { BrowserRouter as Router, Routes, Route , Link } from 'react-router-dom'
import Cards from './components/Cards'
import {PokeContext} from './components/Context'
import Pokedex from './components/Pokedex'

export default function App(props) {

  const {Pokedata, getFunc} = useContext(PokeContext)

  useEffect(() => {
    
    getFunc()
    
  }, []);

  return (
    <Router>
      <div className='navContainer'>
        <nav style={{margin:10}}>
          <Link to="/" style={{ padding:5 }}>
            WAR
          </Link>        
          <Link to="/cards" style={{ padding:5 }}>
            Cards
          </Link>                
          <Link to="/pokedex" style={{ padding:5 }}>     
            Pokedex
          </Link>
        </nav>
        <img src={img} alt="" className="navimg" />
      </div>
      <div>
        <Routes> 
          <Route path ="/" element={<War />} />
          <Route path ="/cards" element={<Cards />} />
          <Route path ="/pokedex" element={<Pokedex />} />
        </Routes>
      </div>
      <footer>
        These pokemon die in real life :o
      </footer>
    </Router>
  );
}


    // ̿̿  ̿̿ ̿̿ ̿'̿'\̵͇̿\з= ( ▀ ͜͞ʖ▀) =ε/̵͇̿/’̿’̿ ̿ ̿̿ ̿̿ 