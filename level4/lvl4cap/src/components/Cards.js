import React, { useState, useEffect, useContext, useRef } from "react"
import { PokeContext } from './Context'
import { useNavigate } from 'react-router-dom';
import bag from '../images/bag.png'
import poke from '../images/Grillizard.png'


export default function Cards() {
    const {pList, inventory} = useContext(PokeContext)
    const navigate = useNavigate()
    const [open, setOpen] = useState(false)
    let menuRef = useRef();

    const [showCard, setShowCard] = useState(false)
    function popPoke(e){
        console.log('User Selected a Pokemon')
        const userSelect = e.target.innerText
        
        // const fish = inventory.map(item => {
        //     item.name===userSelect?item:item
        // })
        // console.log(fish)
    }

    return (
        <div className="app">
            <div className='menu-container' ref={menuRef}>
                <div className='menu-trigger' onClick={()=>{setOpen(!open); setShowCard(!showCard)}}>
                    <img src={bag}></img>
                </div>

            <div className={`dropdown-menu ${open? 'active' : 'inactive'}`} >
                <ul>
                    {inventory.map(item => <><li onClick={(e) => {popPoke(e)}}className='dropdownItem'>{item.name}</li></>)}
                </ul>
            </div>
            </div>
            {showCard
            ?
                <div className="card-container">
                    <div className="nameHp">
                        <h3>Name</h3>
                        <h3>HP</h3>
                    </div>
                    <img className="cardImg" src={poke}/>
                    <div className="infoBanner">
                        <h6>id</h6>
                        <h6>type</h6>
                        <h6>height</h6>
                        <h6>weight</h6>
                    </div>
                    <h6 className="desc">I cool descriptive sentence about this pokemon</h6>
                    <div className="attackMe">
                        <h6>Known Attacks:</h6>
                        <h6>Base Attack Power:</h6>
                    </div>
                </div>
            :
            ''
            }
        </div>
    )
}