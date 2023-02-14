import React, {createContext, useState} from "react";
import axios from "axios";
import { set } from "mongoose";

const PokeContext = createContext()

function PokeProvider(props) {
  const [pokeData, setPokedata] = useState([{}])
  const [fighter1, setFighter1] = useState({
    id: "",
    name: "",
    hp: "",
    img: "",
    imgB: "",
    types: [],
    attacks: [],
    stats: [],
    species: "",
    height: "",
    weight: ""
})
  const [fighter2, setFighter2] = useState({
    id: "",
    name: "",
    hp: "",
    img: "",
    imgB: "",
    types: [],
    attacks: [],
    stats: [],
    species: "",
    height: "",
    weight: ""
  })
  
  const [inventory, setInventory] = useState([])

  const pList = () => {
      console.log(`PLIST HAS BEEN CALLED`)
      axios.get('https://pokeapi.co/api/v2/pokemon?offset=0&limit=1279')
            .then(res => {
              console.log(res.data) 
              setPokedata(res.data.results)
            })
            .catch(error => console.log(error))     
    }

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
          id: res.data.id,
          name: res.data.species.name.charAt(0).toUpperCase() + res.data.species.name.slice(1),
          hp: res.data.stats[0].base_stat,
          attack: res.data.stats[1].base_stat,
          img: res.data.sprites.other.home.front_default,
          imgB: res.data.sprites.front_default,
          types: res.data.types,
          attacks: res.data.abilities,
          stats: res.data.stats,
          species: res.data.species.url,
          height: res.data.height,
          weight: res.data.weight
        })
      })
      .catch(error => console.log(error))

      axios.get(poke2Url)
      .then(res => {console.log(res.data) 
        setFighter2({
          id: res.data.id,
          name: res.data.species.name.charAt(0).toUpperCase() + res.data.species.name.slice(1),
          hp: res.data.stats[0].base_stat,
          attack: res.data.stats[1].base_stat,
          img: res.data.sprites.other.home.front_default,
          imgB: res.data.sprites.front_default,
          types: res.data.types,
          attacks: res.data.abilities,
          stats: res.data.stats,
          species: res.data.species.url,
          height: res.data.height,
          weight: res.data.weight
        })  
      })
      .catch(error => console.log(error))
  }

  const fight = () => {
    console.log('INSIDE FIGHT FUNCTION')
    // const {name, value} = e.target
    const chance = Math.random()
      if(chance > .5){
        setInventory(prev => ([
          ...prev,
          {
          id: fighter1.id,
          name: fighter1.name,
          hp: fighter1.hp,
          attack: fighter1.attack,
          img: fighter1.img,
          imgB: fighter1.imgB,
          types: fighter1.types,
          attacks: fighter1.attacks,
          stats: fighter1.stats,
          species: fighter1.species,
          height: fighter1.height,
          weight: fighter1.weight
          }
        ]))
      } else {
        setInventory(prev => ([
          ...prev,
          {
            id: fighter2.id,
            name: fighter2.name,
            hp: fighter2.hp,
            attack: fighter2.attack,
            img: fighter2.img,
            imgB: fighter2.imgB,
            types: fighter2.types,
            attacks: fighter2.attacks,
            stats: fighter2.stats,
            species: fighter2.species,
            height: fighter2.height,
            weight: fighter2.weight
          }
        ]))
      }
    cherryPick()
  }

//    POKEDEX
  const whosThatPokemon = (num) => {
    console.log(`who's that pokemon!`)
    // axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`)
    //         .then(res => {console.log(res.data) 
                
    //           })
    //         .catch(error => console.log(error))
  }
  
  console.log(`state:`, pokeData, fighter1, fighter2, inventory)

    return (
        <PokeContext.Provider value={{
            pokeData,
            pList,
            cherryPick,
            fighter1,
            fighter2,
            whosThatPokemon,
            fight,
            inventory
        }}>
            {props.children}
        </PokeContext.Provider>
    )
}

export {PokeProvider, PokeContext}