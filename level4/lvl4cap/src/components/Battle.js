import React, { useState, useEffect, useContext} from "react"
import { useNavigate } from 'react-router-dom';
import poke1 from '../images/Pikapoo.png'
import poke2 from '../images/Grillizard.png'
import { PokeContext } from './Context'

export default function Battle() {
    const {pokeData, pList, fighter1, fighter2, cherryPick} = useContext(PokeContext)
    const navigate = useNavigate()
    console.log(fighter1, fighter2)
    
    

    // setFighter1(f1)
    // setFighter2(f2)

    // console.log(f1, f2)
    // const num = pokeData.results.map(poke => poke)
    // const mapMe = num.map(index => index)
    // console.log(mapMe)
    // console.log(num[0])
    // const fish = num[Math.floor(Math.random() * num.length)]
    // console.log(fish)
    // const num = pokeData.results[Math.floor(Math.random() * (max - 0 + 1) + 0)]
    return (
        <div className="wars">
            <div className="who1">
                <h2>{fighter1.name}</h2>
                <img src={fighter1.img} className='poke1'/>
                <h2>HP: {fighter1.hp}</h2>
            </div>
               <button className="battlebutton" onClick={() => {cherryPick(fighter1, fighter2)}}>Fight</button> 
            <div className="who2">
                <h2>{fighter2.name}</h2>
                <img src={fighter2.img} className='poke2'/>
                <h2>HP: {fighter2.hp}</h2>
            </div>
        </div>
    )
}