import React, { useState } from 'react'

export default function DiceBox(props) {
    console.log("I am in DiceBox function!")
    const fishSticks = [Math.floor(Math.random() * 6) + 1, Math.floor(Math.random() * 5) + 1, Math.floor(Math.random() * 5) + 1, Math.floor(Math.random() * 5) + 1, Math.floor(Math.random() * 5) + 1]
    
    const [numbers, setNumbers] = useState([0, 0, 0, 0, 0])
    // const fish = Math.floor(Math.random() * 5) + 1
    
    
    
    const doItDoItdoIt = () => {
        setNumbers([fishSticks[0], fishSticks[1], fishSticks[2], fishSticks[3], fishSticks[4]])
    }

    // const freezeMe = () => {

    // }
    
    return (
        <div>
            <div className=''>
                <div className="dice" style={{
                    border: "5px dotted violet",
                    width: "104px",
                    height: "104px",
                    display: 'inline-flex',
                    isFrozen: 'false'
                }}>{numbers[0]}
                </div>
                <div className="dice" style={{
                    border: "5px dotted violet",
                    width: "104px",
                    height: "104px",
                    display: 'inline-flex',
                    isFrozen: 'false'
                }}>{numbers[1]}
                </div> 
                <div className="dice" style={{
                    border: "5px dotted violet",
                    width: "104px",
                    height: "104px",
                    display: 'inline-flex',
                    isFrozen: 'false'
                }}>{numbers[2]}
                </div> 
                <div className="dice" style={{
                    border: "5px dotted violet",
                    width: "104px",
                    height: "104px",
                    display: 'inline-flex',
                    isFrozen: 'false'
                }}>{numbers[3]}
                </div> 
                <div className="dice" style={{
                    border: "5px dotted violet",
                    width: "104px",
                    height: "104px",
                    display: 'inline-flex',
                    isFrozen: 'false'
                }}>{numbers[4]} 
                </div>
            </div>
        <button onClick={doItDoItdoIt}>SMASH ME</button>
    </div>
    )
}