// LET'S GO BROTHA!!
import React, { useState, useEffect, useContext, createContext } from "react"
import axios from "axios";
import Beauty from "./Beauty";
import { BeautyContext } from "./Context";

export default function App(props) {
  console.log(`props:`, props)
  const {context, userThing, setUserthing, allThings, setAllthings, getFunc, delFunc, putFunc, postFunc } = useContext(BeautyContext)
  console.log(allThings)
  
  // this needs work obv lol
  function handleSubmit(e){
    e.preventDefault()
    console.log('submit has been smashed')
    postFunc()
  }
  
  function handleChange(event){
    const {name, value} = event.target
        setUserthing(prevThing => ({
            ...prevThing,
            [name]: value
        }))
    console.log(userThing)
  }
 
  useEffect(() => {
    
    getFunc()
    
  }, []);

  console.log(allThings)
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
          <input 
            className='inputMe' 
            name="imgUrl" 
            placeholder="Img URL"
            value={userThing.imgUrl}
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
        {beauty}
      </div>
    </div>
  );
}