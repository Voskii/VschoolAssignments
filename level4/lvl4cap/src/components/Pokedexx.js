import React, { useState, useEffect, useContext, useRef} from "react"
import { PokeContext } from './Context'
import { useNavigate } from 'react-router-dom';
import Carousel from "./Carousel";
import Switch from "react-switch";
import poke from '../images/pokeball.png'
import pika from '../images/pikachu.png'
import opika from '../images/oface.png'
import axios from "axios";

export default function Pokedex() {
    
    var [date, setDate] = useState(new Date());
    const [whoDat, setWhoDat] = useState(false)
    const [userPoke, setUserPoke] = useState({})
    const [pokeName, setPokeName] = useState('')
    
    useEffect(() => {
        var timer = setInterval(()=>setDate(new Date()), 1000 )
        return function cleanup() {
            clearInterval(timer)
        }
        
    });

    const handleChange = (e) => {
        const {name, value} = e.target
        setPokeName({[name]:value})
        console.log(`handleCHANGE FUNC:`, pokeName)
    }
    

    const pokeReveal = () => {
        
        axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeName.name}`)
            .then(res => {
                const speciesUrl = res.data.species.url
                setUserPoke({
                    id: res.data.id,
                    name: res.data.species.name.charAt(0).toUpperCase() + res.data.species.name.slice(1),
                    hp: res.data.stats[0].base_stat,
                    attack: res.data.stats[1].base_stat,
                    def: res.data.stats[2].base_stat,
                    speed: res.data.stats[5].base_stat,
                    img: res.data.sprites.other.home.front_default,
                    imgB: res.data.sprites.front_default,
                    types: res.data.types,
                    attacks: res.data.abilities,
                    species: res.data.species.url,
                    height: res.data.height,
                    weight: res.data.weight,
                    evos: ''
                })
                axios.get(speciesUrl)
                    .then(res => {
                        const evo = res.data.evolution_chain.url
                        console.log(`species get call info:`, res.data, evo)
                        setUserPoke(prev => ({
                            ...prev, 
                            species: res.data.flavor_text_entries.filter(e => e.language.name === "en").map(e => e.flavor_text)
                        }))
                        axios.get(evo)
                            .then(res => {
                                const theChain = res.data.chain
                                console.log(`evo call:`, res.data.chain.evolves_to[0].evolves_to[0].species.name)
                                setUserPoke(prev => ({
                                    ...prev, 
                                    evos: res.data.chain
                                }))
                                console.log(theChain)
                            })
                    })
                })
            .catch(error => console.log(error))

        console.log(`inside poke Reveal:`, pokeName, userPoke)
        setWhoDat(!whoDat)
        setPokeName({name: ''})
    }

    const flavor = () => {
        console.log(`H6 STATE CALL:`, userPoke.evos.species.name)
    }
    
    return (
        <div className="pd-grid-container">
                {whoDat
                ?
                <div className="box1"> 
                    <div className="time">
                        <div>{date.toLocaleDateString()}</div>
                        <div>{date.toLocaleTimeString()}</div>
                    </div>
                    <img src={userPoke.img
                        ?
                        userPoke.img
                        :
                        userPoke.imgB}  
                        className={userPoke.img?'who-dat-img':'who-dat-imgg'} alt='' /> 
                    <div className="info-container">
                        <h6 className="stat1">Spd:{userPoke.speed}</h6>
                        <h6 className="stat2">Hp:{userPoke.hp}</h6>
                        <h6 className="stat3">Atk:{userPoke.attack}</h6>
                        <h6 className="stat4">Height: {userPoke.height}</h6>
                        <h6 className="stat5">Weight: {userPoke.weight}</h6>
                    </div>
                </div>
                :
                    <div className="box1">
                        <div className="time">
                        <div>{date.toLocaleDateString()}</div>
                        <div>{date.toLocaleTimeString()}</div>
                    </div>
                    <input 
                    className="who-dat-input" 
                    placeholder='...Search' 
                    onChange={handleChange}
                    value={pokeName.name}
                    name="name">
                    </input>
                    <div className="info-container">
                        <h6 className="stat1">Spd: </h6>
                        <h6 className="stat2">Hp: </h6>
                        <h6 className="stat3">Atk: </h6>
                        <h6 className="stat4">Height: </h6>
                        <h6 className="stat5">Weight: </h6>
                    </div>
                </div>
                }
            
            <div className="box2">
                <div className="batt-sub">
                    <div style={{border: 'solid 2px aqua'}}>BATT %</div>
                    <button className="sub-butt" onClick={() => pokeReveal()}>{whoDat? 'Find Poke' : 'Who Dat?'}</button>
                </div>
                <div className="keypad-container ">
                    <div className="key"></div>
                    <div className="key"></div>
                    <div className="key"></div>
                    <div className="key"></div>
                    <div className="key"></div>
                    <div className="key"></div>
                    <div className="key"></div>
                    <div className="key"></div>
                </div>
                {whoDat
                ?
                    <input style={{height: '50px', width: '220px', alignSelf:"center", fontFamily: "Pokemon GB"}} value={userPoke.species}></input>
                :
                    <input style={{height: '50px', width: '220px', alignSelf:"center", fontFamily: "Pokemon GB"}} value='...description...'></input>
                }
            </div>
            {whoDat
            ?
            <div className="box3">
                <div>
                    <div className="evo-container">
                        <div>
                            <h6>{flavor}</h6>
                            <img src={poke}/>
                        </div>
                        {/* <div>
                            <h6>{userPoke.evos.evolves_to[0].species.name}</h6>
                            <img src={poke}/>
                        </div>
                        <div>
                            <h6>{userPoke.evos.evolves_to[0].evolves_to[0].species.name}</h6>
                            <img src={poke}/>
                        </div> */}
                    </div>
                    <div>
                        Types map
                    </div>
                </div>
            </div>
            :
            ''
            }
            
            <div className="box4">
            {whoDat
            ?
            <div>
                <img src={pika} style={{height: "60%", width: '80%'}}/>
            </div>
            :
            <div>
                <img src={opika} style={{height: "60%", width: '80%'}}/>
            </div>
            }
                
            </div>
        </div>
    )
}

// userPoke.chain.evolves_to.evolves_to.species.name