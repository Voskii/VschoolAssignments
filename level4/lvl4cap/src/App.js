import React, { useState, useEffect, useContext} from "react"
import { BrowserRouter as Router, Routes, Route , Link } from 'react-router-dom'
import {PokeContext} from './components/Context'
import Pokedexx from './components/Pokedexx'
import Battle from './components/Battle'
import Cards from './components/Cards'
import img from './images/PokeAPII.png'
import Pokedex from 'pokedex-promise-v2';


export default function App(props) {

  // const {Pokedata, pList} = useContext(PokeContext)

  const P = new Pokedex();
  const [fish, setFish] = useState([])
  // const interval = {
  //   limit: 5,
  //   offset: 0
  // }

  useEffect(() => {
    P.getPokemonsList()
      .then((res) => {
        console.log(res)
        setFish(res)
      })
    }, [])
    const max = fish.count;
    console.log(max)
  // const num = fish.results[Math.floor(Math.random() * (max - 0 + 1) + 0)] RANDOM PKMN LOGIC
  // console.log(num)
  

  return (
    <Router>
      <div className='navContainer'>
        <nav style={{ margin:10 }}>
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
      <footer>
        These pokemon die in real life :o
      </footer>
    </Router>
  );
}


    // ̿̿  ̿̿ ̿̿ ̿'̿'\̵͇̿\з= ( ▀ ͜͞ʖ▀) =ε/̵͇̿/’̿’̿ ̿ ̿̿ ̿̿ 