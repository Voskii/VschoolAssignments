import {React, useState, useEffect} from 'react'




export default function App() {
  
  const [color, setColor] = useState({
    color1: '#FFFF00',
    color2: '#A020F0',
    deg: '25',
    code: ''  
  })
  console.log(color)
  

  function handleChange(e) {
    const {name, value} = e.target
    console.log(e.target.value)
    console.log(e.target.name)
    setColor(prevColor => ({
      ...prevColor,
      [name]: value
    }))
    console.log(color)
    }

    
// suggested for gradient code update
  // let updateColorBox = useEffect((e) =>{
  //   console.log(e)
  // }, [])
  
  console.log('does this rerender')
  
  let style = {background: `linear-gradient(${color.deg}deg, ${color.color1}, ${color.color2})`}
  let style2 = {background: `linear-gradient(${color.deg}deg, ${color.color1} , ${color.color2}) 
  -moz-background: linear-gradient(${color.deg}deg, ${color.color1} ,${color.color2}) 
  -webkit: linear-gradient(${color.deg}deg,${color.color1} , ${color.color2})`}
    
    
    
  return (
    <div className="App">
      <title>CSS GRADIENT CODE GENERATOR</title>
      <div className='box1'>
        <div className='chosenColor' name='code' style={style}>
          
        </div>
        <textarea className='coolBro' value={style2.background}>
        
        </textarea>
      </div>
      <div className='box2'>
        <h1>
          Options
        </h1>
          <h3>Degree</h3>
          <input type='number' style={{width: 40}} onChange={handleChange} name='deg' value={color.deg}></input>
          <h3>Color 1</h3><div>{color.color1}</div> <input onChange={handleChange} name='color1' value={color.color1} type="color"></input>
          <h3>Color 2</h3><div>{color.color2}</div> <input onChange={handleChange} name='color2' value={color.color2} type="color"></input>
      </div>
    </div>
  );
}

 
