import React, { useState } from 'react'

export default function Badge (props) {
console.log(props)
const fish = `${props.data.fName} ${props.data.lName}`

    return (
      <div>
        <header>Badge</header>
         <div className='badgeContainer'> 
          <h2>Name: {fish}</h2>
          <h2>Phone: {props.data.phoneN}</h2>
          <h2>Place of Birth: {props.data.pob}</h2>
          <h2>Favorite Food: {props.data.fFood}</h2>
          <h2>Email: {props.data.email}</h2>
          <h2></h2>
          <h2>About: {props.data.desc}</h2>
        </div>
      </div>
      
    )
}