import React, { useState } from 'react'

export default function App() {
  const [formData, setFormData] = useState('')

  function handleChange(event) {
    setFormData(event.target.value)

  }

const nameArray = ['']
  
function handleSubmit(event){
    console.log('in handlesub func')
    console.log(formData)
    event.preventDefault()
  //   setFormData(prevData => [...prevData, 'cheese'] )
    nameArray.push(formData)
    console.log(nameArray)
  }
  

  // const nameList = 

  return (
    
      <form className='wholeForm' onSubmit={handleSubmit}>
        <input className='inputMe' onChange={handleChange} placeholder="Name" type="text" value={formData.randName}/>
        <h1 className='whatTyped'>{formData}</h1>
        <button onClick={handleSubmit}>SMASH</button>
        <ol>
          {/* {nameList} */}
        </ol>
      </form>
  );
}