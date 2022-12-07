// LET'S GO BROTHA!!
import React, { useState, useEffect, useContext, createContext } from "react"
import axios from "axios";
import Beauty from "./Beauty";

export default function App() {

  const BeautyContext = createContext()

  function ThemeProvider(){

    return (
      <BeautyContext.Provider>

      </BeautyContext.Provider>
    )
  }

  const [allThings, setAllThings] = useState({
    title: "",
    imgURL: "",
    description: ""
  })
  
  const [userThing, setUserThing] = useState({
    title: "",
    imgURL: "",
    description: ""
  })
  
  // this needs work obv lol
  function handleSubmit(e){
    console.log('Mama had a baby, issa boy KEK')
    e.preventDefault()
    // take userThing state and post to api     
        // setAllThings(prevAllThings => [...prevAllThings, meme])
        
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
    console.log("useffect triggered")
    
    axios.get('https://api.vschool.io/kyleshutt/thing')
    
    .then(res => {console.log(res.data) 
        setAllThings(res.data)})
    .catch(error => console.log(error))
    
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
          <button>UwU</button>
        </div>
      </form>
      <div>
        {beauty}
      </div>
    </div>
  );
}