import React, { useState, useEffect } from "react"
import axios from "axios";

export default function App() {

  const [allThings, setAllThings] = useState('')
  console.log(allThings)
  function handleSubmit(){
    console.log('Mama had a baby, issa boy KEK')
  }
  function handleChange(){
    console.log(`Give me fuel, give me fire, give me that which I desire.. HUAHHH`)
  }
  // useEffect(() => {
  //   console.log("useffect triggered")
  //   axios.get('https://api.vschool.io/kyleshutt/thing')
    
  //   .then(res => {console.log(res.data.data.memes) 
  //       setAllMemes(res.data.data.memes)})
  //   .catch(error => console.log(error))
    
  // }, []);

  return (
    <div className="App">
      <form className='formm' onSubmit={handleSubmit}>
        <div className='container'>
          <input className='inputMe' name="fName" min="3" value={allThings} placeholder="Title" type="text" onChange={handleChange}/>
          <input className='inputMe' name="lName" value={allThings} placeholder="Img URL" type="text" onChange={handleChange}/>
          <input className='desc inputMe' name="desc" value={allThings} placeholder="Description" type="text" onChange={handleChange}/>
        </div>
        <div className='bottom2'>
          <button>UwU</button>
        </div>
      </form>
    </div>
  );
}