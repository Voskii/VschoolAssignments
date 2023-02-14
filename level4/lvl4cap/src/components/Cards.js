import React, { useState, useEffect, useContext, useRef } from "react"
import { PokeContext } from './Context'
import { useNavigate } from 'react-router-dom';
import bag from '../images/bag.png'
import poke from '../images/pokeball.png'
import axios from "axios";




export default function Cards() {
    let menuRef = useRef();
    const {pList, inventory} = useContext(PokeContext)
    const navigate = useNavigate()
    const [open, setOpen] = useState(false)
    const [chosen, setChosen] = useState([])

    const [showCard, setShowCard] = useState(false)
    function popPoke(e){
        console.log('User Selected a Pokemon')
        const userSelect = e.target.innerText
        setChosen(inventory.find(index => index.name === userSelect)) 
        console.log(`chosen:`, chosen)
        axios.get(chosen.species)
            .then(res => setChosen(prev => {
                return ({
                    ...prev,
                    species: res.data.flavor_text_entries[7].flavor_text
                })
            }))
                
            .catch(error => console.log(error))
    }

    return (
        <div className="app">
            <div className='menu-container' ref={menuRef}>
                <div className='menu-trigger' onClick={()=>{setOpen(!open); setShowCard(!showCard)}}>
                    <img src={bag}></img>
                </div>

            <div className={`dropdown-menu ${open? 'active' : 'inactive'}`} >
                <ul>
                    {inventory.map(item => <><li onClick={(e) => {popPoke(e)}}className='dropdownItem' key={''}>{item.name}</li></>)}
                </ul>
            </div>
            </div>
            {showCard
            ?
                <div className="card-container">
                    <div className="nameHp">
                        <h3>{chosen.name}</h3>
                        <img src={poke}/>
                        <h3>HP: {chosen.hp}</h3>
                    </div>
                    <div className="pokeImg">
                        <img src={chosen.img
                        ?
                        chosen.img
                        :
                        chosen.imgB}  
                        className={chosen.img?'cardImgB cardImgBg':'cardImgB2 cardImgBg'} alt=''/>
                    </div>
                    
                    <div className="infoBanner">
                        <h6>ID: {chosen.id}</h6>
                            <h6>Types:</h6>
                            <div className="">
                                <h6 className="infoBannerTypes">{chosen && chosen.types 
                                ? 
                                chosen.types.map(type => (
                                    <div className={type.type.name}></div>
                                    ))
                                    :
                                    ''
                                }
                                </h6>
                            </div>
                        <h6>Height: {chosen.height}</h6>
                        <h6>Weight: {chosen.weight}</h6>
                    </div>
                    <h6 className="desc">{chosen.species}</h6>
                    <div className="attackMe">
                        <h6>Known Attacks:</h6>
                        <div>
                            <h6>
                            {chosen && chosen.attacks
                            ?
                            chosen.attacks.map(attack => (
                                <><h6>{attack.ability.name}</h6></>
                                ))
                                :
                                ''
                            }
                            </h6>
                        </div>
                        <h6>Base Attack Power:{chosen.attack}</h6>
                    </div>
                </div>
            :
            ''
            }
        </div>
    )
}