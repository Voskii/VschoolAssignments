import React, { useState } from 'react'
import BoxOButts from "./components/BoxOButts";
import BoxOFunzies from "./components/BoxOFunzies";
import Header from "./components/Header";
import Square from "./components/Square";


export default function App(props) {

  const [colors, setColors] = useState(["white", "white", "white", "white"]);
  
  const changeTop = () => {
    console.log("I should be changing the top 2 squares!")
    setColors (['purple', 'purple', 'black', 'black'])
  }
  
  
  const changeAll = () => {
    console.log("I should be changing all squares")
    setColors(prevColors => {
      if(prevColors[0] === 'white')
        return ['black', 'black', 'black', 'black']
      else 
        return ['white', 'white', 'white', 'white']
    })
  }

  const changeBottomLeft = () => {
    console.log('I should be changing the third square blue')
    setColors(prevColors => {
      return [prevColors[0], prevColors[1], 'blue', prevColors[3]]
    })
  }

  const changeBottomRight = () => {
    console.log('I should be changing the fourth square blue')
    setColors(prevColors => {
      return [prevColors[0], prevColors[1], prevColors[2], 'blue']
    })
  }
  
  return (
    <div className="okay">
      <div>
        <Header />
        <Square colors={colors[0]}/>
        <Square colors={colors[1]}/>
        <Square colors={colors[2]}/>
        <Square colors={colors[3]}/>
      </div>
      <div className='flexButtBox'>
      <button className="beautifyMe" onClick={changeAll}>B1</button>
      <button className="beautifyMe" onClick={changeTop}>B2</button>
      <button className="beautifyMe" onClick={changeBottomLeft}>B3</button>
      <button className="beautifyMe" onClick={changeBottomRight}>B4</button>
      <button className="beautifyMe">B5</button>
      <button className="beautifyMe">B6</button>
      <button className="beautifyMe">B7</button>
      <button className="beautifyMe">B8</button>
      </div>
    </div>
  );
}
// setbackground((prevBackground) => prevBackground === 'white' ? 'black' : 'white')

// setcolors(prevColors => {
//       prevColors[0] === 'white' ? ['black', 'black', 'black', 'black'] : ['white', 'white', 'white', 'white']  why this no worky "we didn't expect an expression"
//     })