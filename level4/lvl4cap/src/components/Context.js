import React, {createContext, useState} from "react";
import axios from "axios";
import Pokedex from 'pokedex-promise-v2';

const PokeContext = createContext()

function PokeProvider(props) {

    const [Pokedata, setPokedata] = useState([])

    

  const interval = {
    limit: 100000,
    offset: 0
  }



  const P = new Pokedex();

  // P.getPokemonByName(['eevee', 'ditto']) // with Promise
  //   .then((response) => {
  //     console.log(response);
  //   })
  //   .catch((error) => {
  //     console.log('There was an ERROR: ', error);
  //   });
  const pList = P.getPokemonsList(interval)
    .then(res => {console.log(res.data)
      setPokedata(res.data)
    .catch(error => console.log(error))
      })
  
    

    return (
        <PokeContext.Provider value={{
            Pokedata,
            pList
        }}>
            {props.children}
        </PokeContext.Provider>
    )
}

export {PokeProvider, PokeContext}