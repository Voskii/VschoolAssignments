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
  const [desc, setDesc] = useState([])
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
          weight: res.data.weight,
          fighter: '1'
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
          weight: res.data.weight,
          fighter: '2'
        })  
      })
      .catch(error => console.log(error))

      // axios.get(fighter1.species)
      // .then(res => setDesc(res.data))
          
      // // axios.get(fighter1.species)
      // //   .then(res => {setFighter1(prev => [{
      // //     ...prev,
      // //     species: res.data.flavor_text_entries[0].flavor_text
      // // }])})
      //   .catch(error => console.log(error))

      // axios.get(fighter2.species)
      //   .then(res => setDesc(res.data))
          
      //   .catch(error => console.log(error))
  }

  const fight = () => {
    console.log('INSIDE FIGHT FUNCTION')
    // const {name, value} = e.target

    const chance = Math.random()
    console.log(`SPECIES GET CALL: `, fighter1.species, fighter2.species)
    
      if(chance > .5){
        // species: desc.flavor_text_entries.find(index => index.language.name === 'en').flavor_text
        //res.data.flavor_text_entries.find(index => index.language.name === 'en').flavor_text
        console.log(`set fighter 1`)
        axios.get(fighter1.species)
          .then(res => setInventory(prev => ([
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
              height: fighter1.height,
              weight: fighter1.weight,
              fighter: fighter1.fighter,
              species: res.data.flavor_text_entries.find(index => index.language.name === 'en').flavor_text
            }
          ])))
          .catch(error => console.log(error))

        // setInventory(prev => ([
        //       ...prev,
        //       {
        //       id: fighter1.id,
        //       name: fighter1.name,
        //       hp: fighter1.hp,
        //       attack: fighter1.attack,
        //       img: fighter1.img,
        //       imgB: fighter1.imgB,
        //       types: fighter1.types,
        //       attacks: fighter1.attacks,
        //       stats: fighter1.stats,
        //       height: fighter1.height,
        //       weight: fighter1.weight,
        //       species: fighter1.species,
        //       fighter: fighter1.fighter
        //       }
        //     ]))
            console.log(`inside set inventory1:`, inventory)
      } else {
        axios.get(fighter2.species)
          .then(res => setInventory(prev => ([
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
              height: fighter2.height,
              weight: fighter2.weight,
              fighter: fighter2.fighter,
              species: res.data.flavor_text_entries.find(index => index.language.name === 'en').flavor_text
            }
          ])))
          .catch(error => console.log(error))
        // console.log(`set fighter 2`)
        // axios.get(fighter2.species)
        //   .then(res => setFighter2(prev => ({
        //     ...prev,
        //       species: res.data.flavor_text_entries.find(index => index.language.name === 'en').flavor_text
        // })))
        //   .catch(error => console.log(error))
        
        // setInventory(prev => ([
        //   ...prev,
        //   {
        //     id: fighter2.id,
        //     name: fighter2.name,
        //     hp: fighter2.hp,
        //     attack: fighter2.attack,
        //     img: fighter2.img,
        //     imgB: fighter2.imgB,
        //     types: fighter2.types,
        //     attacks: fighter2.attacks,
        //     stats: fighter2.stats,
        //     height: fighter2.height,
        //     weight: fighter2.weight,
        //     species: fighter2.species,
        //     fighter: fighter2.fighter
        //   }
        // ]))
        // console.log(`inside set inventory2:`, inventory)
      }
      console.log(`inside set inventory ALL:`, inventory)
    cherryPick()
  }

//    POKEDEX
//   const whosThatPokemon = () => {
    
//     console.log(`who's that pokemon!`)
//     // axios.get(inventory[0].species)
//     //   .then(res => console.log(res.data)) somehow working... lol
          
//     //   .catch(error => console.log(error))
    
//     console.log(`flavor text find: `, desc)
// // desc.find(index => index.language.name === 'en').flavor_text
//           //   .then(res => setInventory(prev => {
//           //     return ({
//           //         ...prev,
//           //         species: res.data.flavor_text_entries[7].flavor_text
//           //     })
//           // }))
              
//           // .catch(error => console.log(error))
//           }
  
  console.log(`state:`, pokeData, inventory, desc)

    return (
        <PokeContext.Provider value={{
            pokeData,
            pList,
            cherryPick,
            fighter1,
            fighter2,
            
            fight,
            inventory
        }}>
            {props.children}
        </PokeContext.Provider>
    )
}

export {PokeProvider, PokeContext}