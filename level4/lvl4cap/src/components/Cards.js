import React, { useState, useEffect, useContext, useRef } from "react"
import { PokeContext } from './Context'
import { useNavigate } from 'react-router-dom';
import bag from '../images/bag.png'

export default function Cards() {
    const {pList, inventory} = useContext(PokeContext)
    const navigate = useNavigate()
    const [open, setOpen] = useState(false)
    let menuRef = useRef();

    return (
        <div className="App">
            <div className='menu-container' ref={menuRef}>
                <div className='menu-trigger' onClick={()=>{setOpen(!open)}}>
                    <img src={bag}></img>
                </div>

            <div className={`dropdown-menu ${open? 'active' : 'inactive'}`} >
                <ul>
                    {inventory.map(item => <><li className='dropdownItem'>{item.name}</li></>)}
                </ul>
            </div>
            </div>
        </div>
    )
}