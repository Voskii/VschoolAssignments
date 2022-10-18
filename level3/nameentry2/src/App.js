import React, { useState } from 'react'
import Cheeks from './components/Cheeks'

export default function App() {
  const [input, setInput] = useState('')
  const [names, setNames] = useState([])

  function handleChange(event) {
    setInput(event.target.value)

  }

  
  const nameList = names.map(index => {
    return (
    <Cheeks 
    // fish={!index ? 'Your Name List Here' : index} />
    fish={index} />
    )
  })
 
// const nameList = names.map(index => index + ` `)

function handleSubmit(event){
    // console.log('in handlesub func')
    console.log(input)
    event.preventDefault()
    setNames(prevNames => [...prevNames, input] )
    console.log(names)
    // console.log((event.target.value))
    // event.target.value = ''; why this no worky?
  }
  

  
  
  return (
    
      <form className='wholeForm' onSubmit={handleSubmit}>
        <input className='inputMe' onChange={handleChange} placeholder="Name" type="text" value={input.randName}/>
        <h1 className='whatTyped'>{input}</h1>
        <button onClick={handleSubmit}>SMASH</button>
        <ol>
          {nameList}
        </ol>
      </form>
  );
}