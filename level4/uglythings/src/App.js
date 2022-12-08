// LET'S GO BROTHA!!
import React, { useState, useEffect, useContext, createContext } from "react"
import axios from "axios";
import Beauty from "./Beauty";
import { BeautyContext } from "./Context";

export default function App(props) {
  console.log(`props:`, props)
  const context = useContext(BeautyContext)
  console.log(context)
  
  
  // this needs work obv lol
  function handleSubmit(e){
    console.log('submit has been smashed')
    e.preventDefault()
    
        
  }
  
  function handleChange(event){
    console.log(`Give me fuel, give me fire, give me that which I desire.. HUAHHH`)
    const {name, value} = event.target
        setUserThing(prevThing => ({
            ...prevThing,
            [name]: value
        }))
    console.log(userThing)
  }

  useEffect(() => {
    console.log("useffect triggered bro")
    
    
  }, []);

  //look up map syntax, don't have to render component 
  const beauty = allThings.map((thing, index) => (<Beauty key={index} data={thing}/>))

  return (
    <div className="App">
      <form className='formm' onSubmit={handleSubmit}>
        <div className='container'>
          <input 
            className='inputMe'
            placeholder="Title"
            name="title"  
            value={userThing.title} 
            type="text" 
            onChange={handleChange}
          />
          <input className='inputMe' 
            name="imgURL" 
            value={userThing.imgURL} 
            placeholder="Img URL" 
            type="text" 
            onChange={handleChange}
          />
          <input 
            className='desc inputMe' 
            name="description" 
            value={userThing.description} 
            placeholder="Why do you think this is Beautiful" 
            type="text" 
            onChange={handleChange}
          />
        </div>
        <div className='bottom2'>
          <button>Nice</button>
        </div>
      </form>
      <div>
        <Beauty context={context}/>
      </div>
    </div>
  );
}