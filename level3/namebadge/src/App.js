import React, { useState } from 'react'
import Badge from './components/Badge'

export default function App() {
  const hasSubmit = false;

  // hasSubmit ? <Badge /> : '';
  
  return (
    <div className='formm'>
      <form className='formm'>
        <div className='container'>
          <input className='inputMe' placeholder="Name" type="text"/>
          <input className='inputMe' placeholder="Last Name" type="text"/>
          <input className='inputMe' placeholder="Email" type="text"/>
          <input className='inputMe' placeholder="Place of Birth" type="text"/>
          <input className='inputMe' placeholder="Phone" type="text"/>
          <input className='inputMe' placeholder="Favorite Food" type="text"/>
        </div>
        <div className='bottom2'>
          <input className='desc inputMe' placeholder="Tell us about yourself" type="text"/>
          <button>SMASH</button>
        </div>
      </form>
      <Badge />
    </div>
    
  )
}