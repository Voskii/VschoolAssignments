import React, { useState, useEffect, useContext, useRef } from "react"
import { PokeContext } from './Context'
import { useNavigate } from 'react-router-dom';
import Switch from "react-switch";
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

    console.log(`card component inventory:`, inventory)
    
    function popPoke(e){
        console.log('User Selected a Pokemon')
        const userSelect = e.target.innerText
        setChosen(inventory.find(index => index.name === userSelect)) 
        console.log(`chosen (inside pop func):`, chosen)
        
    }
    console.log(`chosen(outside):`, chosen)

    const [checked, setChecked] = useState(false);
    const handleChange = nextChecked => {
        setChecked(nextChecked);
    };

    return (
        <div className="app">
            <div className='menu-container' ref={menuRef}>
                <div className='menu-trigger' onClick={()=>{setOpen(!open); setShowCard(!showCard)}}>
                    <img src={bag}></img>
                </div>

                <div className={`dropdown-menu ${open? 'active' : 'inactive'}`} >
                    <ul>
                        {inventory.map(item => <><li onClick={(e) => {popPoke(e)}} className='dropdownItem' key={''}>{item.name}</li></>)}
                    </ul>
                </div>
            </div>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                paddingLeft: '10px',
            }}>
                {showCard
                ?   
                    <>
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
                                        <div className="infoBannerTypes">{chosen && chosen.types 
                                        ? 
                                        chosen.types.map(type => (
                                            <div className={type.type.name}></div>
                                            ))
                                            :
                                            ''
                                        }
                                        </div>
                                    </div>
                                <h6>Height: {chosen.height}</h6>
                                <h6>Weight: {chosen.weight}</h6>
                            </div>
                            <h6 className="desc">{chosen.species? chosen.species: chosen.speciesB}</h6>
                            <div className="attackMe">
                                <h6>Known Attacks:</h6>
                                <div>
                                    <div>
                                    {chosen && chosen.attacks
                                    ?
                                    chosen.attacks.map(attack => (
                                        <><h6>{attack.ability.name}</h6></>
                                        ))
                                        :
                                        ''
                                    }
                                    </div>
                                </div>
                                <h6>Base Attack Power:{chosen.attack}</h6>
                            </div>
                        </div>
                        <div>
                            <label>
                            <Switch
                                checked={checked}
                                onChange={handleChange}
                                offColor="#ffae00"
                                onColor="#2a75bb"
                                offHandleColor="#FFD700"
                                onHandleColor="#3c5aa6"
                                handleDiameter={30}
                                uncheckedIcon={
                                    <div
                                        style={{
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        height: "100%",
                                        fontSize: 15,
                                        color: "black",
                                        paddingRight: 2,
                                        fontFamily: "Pokemon solid"
                                    }}
                                    >
                                    ?
                                    </div>
                                }
                                checkedIcon={false}
                                boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                                activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                                height={20}
                                width={48}
                                className="react-switch"
                                id="material-switch"
                            />
                            </label>
                            {checked
                                ?
                                <div style={{display: 'flex', flexDirection: 'column', marginTop: '15px', fontSize: '2em'}}>
                                    <span style={{textAlign: 'center', color: '#ffcb05'}}>edit</span>
                                    <input className='editInputs' type='text' placeholder="Name"/>
                                    <input className='editInputs' type='text' placeholder="Description"/>
                                    <input className='editInputs' type='text' placeholder="Style"/>
                                </div>
                                :
                                ""
                            }
                                
                        </div>
                    </>
                :
                'Click and pick a pokemon from Inventory!'
                }
            </div>
        </div>
    )
}