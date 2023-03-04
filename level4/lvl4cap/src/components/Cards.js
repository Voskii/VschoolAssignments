import React, { useState, useEffect, useContext, useRef} from "react"
import { PokeContext } from './Context'
import { useNavigate } from 'react-router-dom';
import Carousel from "./Carousel";
import Switch from "react-switch";
import bag from '../images/bag.png'
import poke from '../images/pokeball.png'
import bankImg from '../images/pokebank.png'
import { set } from "mongoose";



export default function Cards() {
    let menuRef = useRef();
    const {pList, inventory, setInventory, bankInv, setBankInv} = useContext(PokeContext)
    const [open, setOpen] = useState(false)
    const [chosen, setChosen] = useState([])
    const [showCard, setShowCard] = useState(false)
    const [checked, setChecked] = useState(false);
    const [editCard, setEditCard] = useState('')
    
    console.log(`card component inventory:`, inventory)
    
    function popPoke(e){
        console.log('User Selected a Pokemon')
        const userSelect = e.target.innerText
        setChosen(inventory.find(index => index.name === userSelect)) 
        console.log(`chosen (inside pop func):`, chosen)
        setShowCard(true)
    }
    console.log(`chosen(outside):`, chosen)

    
    const handleChange = nextChecked => {
        setChecked(nextChecked);
        setEditCard({
            id: chosen.id,
            name: chosen.name,
            hp: chosen.hp,
            attack: chosen.attack,
            img: chosen.img,
            imgB: chosen.imgB,
            types: chosen.types,
            attacks: chosen.attacks,
            stats: chosen.stats,
            height: chosen.height,
            weight: chosen.weight,
            fighter: chosen.fighter,
            species: chosen.species,
            speciesB: chosen.speciesB
        })
    };
    const handleEdits = (e) => {
        const {name, value} = e.target
        setEditCard(prev => {
            return ({
                ...prev,
                [name]:value
            })
        })
    }

    const bankIt = (banked) =>{
        console.log(`BANK IT CLICK FUNC:`, banked)
        setShowCard(!showCard)
        setBankInv(prev => ([
            ...prev,
            {
            id: editCard.id,
            name: editCard.name,
            hp: editCard.hp,
            attack: editCard.attack,
            img: editCard.img,
            imgB: editCard.imgB,
            types: editCard.types,
            attacks: editCard.attacks,
            stats: editCard.stats,
            height: editCard.height,
            weight: editCard.weight,
            fighter: editCard.fighter,
            species: editCard.species,
            speciesB: 'we seem to not have a lot of accurate information about this Pokemon at this time, but we are sure it is really cool!'
            }
            ]))
        setChecked(false)
        setInventory(prev => {
            return [...prev.filter(item => item.id !== banked)]
        })
        setChosen(inventory[Math.floor(Math.random() * inventory.length)])
        setOpen(!open)
    }
        console.log(inventory, bankInv)

    return (
        <div>
            <div className="app">
                <div className='menu-container' ref={menuRef}>
                    <div className='menu-trigger' onClick={()=>{setOpen(!open)}}>
                        <img src={bag}></img>
                    </div>

                    <div className={`dropdown-menu ${open? 'active' : 'inactive'}`} >
                        <ul>
                            {open
                            ?
                            inventory.map((item, index) => <><li onClick={(e) => {popPoke(e)}} className='dropdownItem' key={index}>{item.name}</li></>)
                            :
                            ''
                            }
                        </ul>
                    </div>
                </div>
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    paddingLeft: '10px',
                }}>
                {showCard && checked
                ?   
                    <>
                        <div className={`card-container ${showCard? 'active' : 'inactive'}`}>
                            <div className="nameHp">
                                <h3>{editCard.name}</h3>
                                <img src={poke}/>
                                <h3>HP: {editCard.hp}</h3>
                            </div>
                            <div className="pokeImg">
                                <img src={editCard.img
                                ?
                                editCard.img
                                :
                                editCard.imgB}  
                                className={editCard.img?'cardImgB cardImgBg':'cardImgB2 cardImgBg'} alt=''/>
                            </div>
                            
                            <div className="infoBanner">
                                <h6>ID: {editCard.id}</h6>
                                <h6>Types:</h6>
                                    <div className="">
                                        <div className="infoBannerTypes">{editCard && editCard.types 
                                        ? 
                                        editCard.types.map(type => (
                                            <div className={type.type.name}></div>
                                            ))
                                            :
                                            ''
                                        }
                                        </div>
                                    </div>
                                <h6>Height: {editCard.height}</h6>
                                <h6>Weight: {editCard.weight}</h6>
                            </div>
                            <h6 className="desc">{editCard.species[0]}</h6>
                            <div className="attackMe">
                                <h6>Known Attacks:</h6>
                                <div>
                                    <div>
                                    {editCard && editCard.attacks
                                    ?
                                    editCard.attacks.map(attack => (
                                        <><h6>{attack.ability.name}</h6></>
                                        ))
                                        :
                                        ''
                                    }
                                    </div>
                                </div>
                                <h6>Base Attack Power:{editCard.attack}</h6>
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
                                <div style={{display: 'flex', flexDirection: 'column', marginTop: '15px', fontSize: '2em'}}>
                                    <span style={{textAlign: 'center', color: '#ffcb05'}}>edit</span>
                                    
                                        <input 
                                        className='editInputs' 
                                        type='text' 
                                        placeholder="Name"
                                        name="name"
                                        value={editCard.name}
                                        onChange={handleEdits}
                                    />
                                    <input 
                                        className='editInputs' 
                                        type='text' 
                                        placeholder="Description"
                                        name="species"
                                        value={editCard.species[0]}
                                        onChange={handleEdits}
                                    />
                                    <input className='editInputs' type='text' placeholder="Style"/>
                                    <button className="battleButton" onClick={() => bankIt(editCard.id)}>BANK IT</button>
                                    
                                    
                                </div>
                        </div>
                    </>
                :
                showCard
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
                            <h6 className="desc">{chosen.species[0]}</h6>
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
                        </div>
                    </>
                :
                ''
                }
                </div>
            </div>
            <div >
                {bankInv
                ?
                <div className="bank tform">
                    <img src={bankImg}  />
                    {bankInv
                    ?
                    <Carousel bank={bankInv} num={bankInv.length}/>
                    :
                    ''
                    }
                    
                </div>
                :
                ''}
            </div>
        </div>
    )
}