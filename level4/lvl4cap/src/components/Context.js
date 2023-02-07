import React, {createContext, useState} from "react";
import axios from "axios";

const PokeContext = createContext()

function PokeProvider(props) {
  const [pokeData, setPokedata] = useState([{}])
  const [fighter1, setFighter1] = useState({
    name: "",
    hp: "",
    img: ""
})
  const [fighter2, setFighter2] = useState({
    name: "",
    hp: "",
    img: ""
  })
  const [whoDat1, setWhoDat1] = useState('')
  const [whoDat2, setWhoDat2] = useState('')
   
  const pList = () => {
      console.log(`PLIST HAS BEEN CALLED`)
      axios.get('https://pokeapi.co/api/v2/pokemon?offset=0&limit=1279')
            .then(res => {
              console.log(res.data) 
              setPokedata(res.data.results)
            })
            .catch(error => console.log(error))     
    }
  
  // const cherryPick = (f1, f2) => {
  //   console.log(`CHERRY PICK called`)
  //   const num1 = Math.floor(Math.random() * pokeData.length)
  //   const num2 = Math.floor(Math.random() * pokeData.length)

  //   setFighter1({
  //     name: pokeData[num1].name,
  //     url: pokeData[num1].url,
  //     id: num1 + 1
  //   })
  //   setFighter2({
  //     name: pokeData[num2].name,
  //     url: pokeData[num2].url,
  //     id: num2 + 1
  //   })
  //   console.log(fighter1.id)
  //   whosThatPokemon(num1)
  //   whosThatPokemon(num2)
  // }
  // THE ABOVE WAS WORKING BUT THE API CHANGES THE NUMBERING ORDER OF PKMN AFTER 1007ISH....LOLOLOLOL
  // request forwarder code const url = `url=https://pokeapi.co/api/v2/pokemon/${poke1Url}`
    // axios.get(`https://request-forwarder.onrender.com?${url}`)

  const cherryPick = () => {
    const poke1 = Math.floor(Math.random() * pokeData.length-1)
    const poke2 = Math.floor(Math.random() * pokeData.length-1)
    const poke1Url = pokeData[poke1].url
    const poke2Url = pokeData[poke2].url
    console.log(poke1Url)
    console.log(poke2Url)

    
    axios.get(poke1Url)
      .then(res => {console.log(res.data) 
        setFighter1({
          name: res.data.species.name,
          hp: res.data.stats[0].base_stat,
          img: res.data.sprites.front_default
        })  
      })
      .catch(error => console.log(error))

      axios.get(poke2Url)
      .then(res => {console.log(res.data) 
        setFighter2({
          name: res.data.species.name,
          hp: res.data.stats[0].base_stat,
          img: res.data.sprites.front_default
        })  
      })
      .catch(error => console.log(error))


    
  }

  const whosThatPokemon = (num) => {
    console.log(`who's that pokemon!`)
    axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`)
            .then(res => {console.log(res.data) 
                
              })
            .catch(error => console.log(error))
  }
  
  console.log(`state:`, pokeData, fighter1, fighter2)

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