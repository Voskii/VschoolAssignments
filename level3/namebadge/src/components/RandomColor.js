import React, { useState, useEffect } from "react"
import axios from "axios";

export default function RandomColor(){
    const [bColor, setbColor] = useState('')
    const [count, setCount] = useState(0)

    const fish = Math.floor(Math.random() * 8)
    useEffect(() => {
        console.log("useffect triggered")
        axios.get(`https://www.colr.org/json/color/random?timestamp=${new Date().getTime()}
        `)
        .then(res => {console.log(res)
            setbColor(res.data.colors[0].hex)}    
        )
        .catch(error => console.log(error))
        // .then(data => setbColor(data.colors[1].hex))
        // fetch(`https://www.colr.org/json/colors/random/7`)
        // .then(res => console.log(res))
        // .then(data => setbColor(data.colors[fish].hex))
        // .then(res => res.json())
        
      }, [count]);
    
      console.log(bColor)
      console.log("its math yo:", fish)
      let style = {backgroundColor: `#${bColor}`, height: '30px', width: '300px'}
    return (
        <div style={style}></div>
    )
}


// const fish = colorss.map(index => setbColor(index))