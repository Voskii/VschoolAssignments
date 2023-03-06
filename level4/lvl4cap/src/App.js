import React, { useState, useEffect, useContext} from "react"
import { BrowserRouter as Router, Routes, Route , Link } from 'react-router-dom'
import { PokeContext } from './components/Context'
import { useMediaQuery } from 'react-responsive'
import Pokedexx from './components/Pokedexx'
import Battle from './components/Battle'
import Cards from './components/Cards'
import img from './images/PokeAPII.png'


export default function App(props) {
  // console.log(`props:`, props)
  const {pokeData, pList, cherryPick, fighter1, fighter2, whosThatPokemon} = useContext(PokeContext)
  
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 521px)'
    })

  useEffect(() => {
    
    pList()
    
  }, [])
  
  // console.log(pokeData, fighter1, fighter2)

  return (
    <Router>
      <div>
        <div >
          {isDesktopOrLaptop?
          <div className="title-container">
            <img src={img} alt="" className="pokiapi-img" />
            <nav className='navContainer'>
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
          </div>
          :
          <div className="title-container shrink">
            <img src={img} alt="" className="pokiapi-img" />
            <nav className='navContainer'>
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
          </div>
        }
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
      </div>
    </Router>
  );
}


    // ̿̿  ̿̿ ̿̿ ̿'̿'\̵͇̿\з= ( ▀ ͜͞ʖ▀) =ε/̵͇̿/’̿’̿ ̿ ̿̿ ̿̿ 