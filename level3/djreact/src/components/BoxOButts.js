import React, { useState } from 'react';
import ChangeAll from "./ChangeAll"

export default function BoxOButts(props) {
    
    console.log("I am in boxobutts")
    console.log(props)
    return (
        <div className="flexButtBox">
            <button className="beautifyMe" >B1</button>
            <button className="beautifyMe">B2</button>
            <button className="beautifyMe">B3</button>
            <button className="beautifyMe">B4</button>
            <button className="beautifyMe">B5</button>
            <button className="beautifyMe">B6</button>
            <button className="beautifyMe">B7</button>
            <button className="beautifyMe">B8</button>
        </div>
    )
}
// onClick={setbackground((prevBackground) => prevBackground === 'white' ? 'black' : 'white')} 
// onClick={executeOrder66}