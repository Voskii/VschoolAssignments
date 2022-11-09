import {React, useState, useEffect} from 'react'



export default function App() {
  
  const {color, setColor} = useState('')
  console.log(color)
  let fish = ""

  function handleChange(e) {
    const {name, value} = e.target
    console.log(e.target.value)
    setColor(e.target.value)
    }
// my back is killing me smile
  //  useEffect((e) =>{
  //   const cValue = e.target.value
  //   fish += `#${cValue}`
  // }, [fish])
  
  console.log('deos this rerender')
  
  
  return (
    <div className="App">
      <title>CSS GRADIENT CODE GENERATOR</title>
      <div className='box1'>
        <div className='chosenColor'>
          HERE IS CHOSEN COLOR
        </div>
        <textarea value="your code for myspace!">
          
        </textarea>
      </div>
      <div className='box2'>
        <h1>
          Options
        </h1>
        
          <h3>Color 1</h3><h4>{color}</h4> <input onChange={handleChange}  name='color1' type="color"></input>
          <h3>Color 2</h3><h4>{fish}</h4> <input onChange={handleChange}  name='color2' type="color"></input>
        
      </div>
    </div>
  );
}

 
