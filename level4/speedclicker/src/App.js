// I am going to write this program until I am efficient and understand it's concepts 
import React, {useState} from "react";


export default function App() {
  const [text, setText] = useState('')

  function handleChange(e){
    const {value} = e.target
    setText(value)
  }
  console.log(text)

  function countWords(text){
    const fish = text.split(' ')
    
    const filterMe = fish.filter(word => word !== '')
    return filterMe.length
  }

  return (
    <div className="App">
      <h1>How Fast do you type?</h1>
      <textarea 
        onChange={handleChange}
        value={text} 
      />
      <h4>Display the amount of time remaining</h4>
      <button onClick={() => console.log(countWords(text))}>Start</button>
      <h1>word count</h1>
    </div>
  );
}