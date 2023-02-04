import React from "react";
import { useNavigate } from 'react-router-dom';
import poke1 from '../images/Pikapoo.png'
import poke2 from '../images/Grillizard.png'

export default function Battle() {
    
    const navigate = useNavigate()

    

    return (
        <div className="wars">
            <div className="who1">
                <h2>Pikapoo</h2>
                <img src={poke1} className='poke1'/>
                <h2>Chubby Zap Cat</h2>
            </div>
               <button className="battlebutton">Fight</button> 
            <div className="who2">
                <h2>Fartrizard</h2>
                <img src={poke2} className='poke2'/>
                <h2>Jurassic Grill</h2>
            </div>
        </div>
    )
}