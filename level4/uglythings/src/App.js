// LET'S GO BROTHA!!
import React, { useState, useEffect, useContext, createContext } from "react"
import axios from "axios";
// import Beauty from "./Beauty";

export default function App() {

  const BeautyContext = createContext()

  function ThemeProvider(){

    return (
      <BeautyContext.Provider>

      </BeautyContext.Provider>
    )
  }

  const [allThings, setAllThings] = useState('')
  console.log(allThings)
  
  
  function handleSubmit(){
    console.log('Mama had a baby, issa boy KEK')
    e.preventDefault()
         //meme.topText + meme.bottomText + meme.randomImage + `,`
        setSaveMeme(prevSaveMeme => [...prevSaveMeme, meme])
        setMeme({topText: "",
        bottomText: "",
        randomImage: meme.randomImage
        })
        console.log(saveMeme + `yo`)
  }
  
  
  function handleChange(event){
    console.log(`Give me fuel, give me fire, give me that which I desire.. HUAHHH`)
    const {name, value} = event.target
        setAllThings(prevThing => ({
            ...prevThing,
            [name]: value
        }))
  }

  function Beauty(){
    //useContext here
    
  }

  useEffect(() => {
    console.log("useffect triggered")
    axios.get('https://api.vschool.io/kyleshutt/thing')
    
    .then(res => {console.log(res.data) 
        setAllThings(res.data)})
    .catch(error => console.log(error))
    
  }, []);

  return (
    <div className="App">
      <form className='formm' onSubmit={handleSubmit}>
        <div className='container'>
          <input className='inputMe' name="fName" min="3" value={allThings} placeholder="Title" type="text" onChange={handleChange}/>
          <input className='inputMe' name="lName" value={allThings} placeholder="Img URL" type="text" onChange={handleChange}/>
          <input className='desc inputMe' name="desc" value={allThings} placeholder="Why do you think this is Beautiful" type="text" onChange={handleChange}/>
        </div>
        <div className='bottom2'>
          <button>UwU</button>
        </div>
      </form>
      <div>
        {Beauty}
      </div>
    </div>
  );
}