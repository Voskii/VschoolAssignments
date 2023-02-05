import React, {createContext, useState} from "react";
import axios from "axios";
import Pokedex from 'pokedex-promise-v2';

const PokeContext = createContext()

function PokeProvider(props) {
  const P = new Pokedex();
  const [pokeData, setPokedata] = useState([{}])
  const [fighter1, setFighter1] = useState({
    name: "",
    url: ""
})
  const [fighter2, setFighter2] = useState({
    name: "",
    url: ""
  })
  
  const pList = () => {
    console.log(`PLIST HAS BEEN CALLED`)
    P.getPokemonsList()
      .then((res) => {console.log(res.results)
        setPokedata(res.results)
        setFighter1(res.results[Math.floor(Math.random() * res.results.length)])
        setFighter2(res.results[Math.floor(Math.random() * res.results.length)])
      })
      .catch(error => console.log(error))
    
  }

  const that1 = fighter1.name
  const that2 = fighter2.name
  const string1 = that1.toString()
  const string2 = that2.toString()

  const whosThatPokemon = () => {
    P.getPokemonByName([`${that1}`, `${that2}`])
    .then((response) => {console.log(response)

  })
  .catch((error) => {
    console.log('There was an ERROR: ', error);
  });
  }
  
  
// console.log(f1, f2)
  
  const cherryPick = () => {
    console.log(`CHERRY PICK called`)
    const f1 = pokeData[Math.floor(Math.random() * pokeData.length)]
    const f2 = pokeData[Math.floor(Math.random() * pokeData.length)]

    setFighter1({
      name: f1.name,
      url: f1.url
    })
    setFighter2({
      name: f2.name,
      url: f2.url
    })
  }
  
   
  
  console.log(`state:`, pokeData, fighter1, fighter2)
  // const max = pokeData.count;
  // console.log(max)
  // const num = pokeData.results
  // console.log(num)
  // const num = pokeData.results[Math.floor(Math.random() * (max - 0 + 1) + 0)]
  
    

    return (
        <PokeContext.Provider value={{
            pokeData,
            pList,
            cherryPick,
            fighter1,
            fighter2,
            whosThatPokemon
        }}>
            {props.children}
        </PokeContext.Provider>
    )
}

export {PokeProvider, PokeContext}