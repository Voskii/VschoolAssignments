import React, { useState } from 'react'

export default function App() {
  const [formData, setFormData] = useState('')

  function handleChange(event) {
    setFormData(event.target.value)

  }

  function handleSubmit(event){
    console.log('in handlesub func')
    console.log(event)
    event.preventDefault()
    setFormData(prevData => [...prevData, 'cheese'] )
  }

  return (
    
      <form className='wholeForm' onSubmit={handleSubmit}>
        <input className='inputMe' onChange={handleChange} placeholder="Name" type="text" value={formData.randName}/>
        <h1 className='whatTyped'>{formData}</h1>
        <button onClick={handleSubmit}>SMASH</button>
        <ol>
          <li></li>
          <li></li>
          <li></li>
        </ol>
      </form>
  );
}