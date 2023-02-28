import React, { useState, useEffect, useContext} from "react"
import { BrowserRouter as Router, Routes, Route , Link } from 'react-router-dom'
import { PokeContext } from './components/Context'
import Pokedexx from './components/Pokedexx'
import Battle from './components/Battle'
import Cards from './components/Cards'
import img from './images/PokeAPII.png'


export default function App(props) {
  // console.log(`props:`, props)
  const {pokeData, pList, cherryPick, fighter1, fighter2, whosThatPokemon} = useContext(PokeContext)
  
  
  useEffect(() => {
    
    pList()
    
  }, [])
  
  // console.log(pokeData, fighter1, fighter2)

  return (
    <Router>
      <div className='navContainer'>
        <nav>
          <Link to="/" style={{ padding:5 }}>
            Battle
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
          <Route path ="/" element={<Battle />} />
          <Route path ="/cards" element={<Cards />} />
          <Route path ="/pokedex" element={<Pokedexx />} />
        </Routes>
      </div>
      <footer style={{color: '#FFD700'}}>
        HAVE FUN
      </footer>
    </Router>
  );
}


    // ̿̿  ̿̿ ̿̿ ̿'̿'\̵͇̿\з= ( ▀ ͜͞ʖ▀) =ε/̵͇̿/’̿’̿ ̿ ̿̿ ̿̿ 