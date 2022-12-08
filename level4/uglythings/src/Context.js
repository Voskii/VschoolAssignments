import React, {createContext, useState} from "react";
import axios from "axios";

const BeautyContext = createContext()

function BeautyProvider(props) {

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

    const getFunc = () => {
        console.log('GET func triggered')
        axios.get('https://api.vschool.io/kyleshutt/thing')
    
    .then(res => {console.log(res.data) 
        setAllThings(res.data)})
    .catch(error => console.log(error))
    }

    const putFunc = () => {
        console.log('PUT func triggered')
        // pretty sure this is bassackwards /shrug kekw
        axios.put('https://api.vschool.io/kyleshutt/thing', {
            title: 'whatever new title is kekw',
            description: 'same same',
            imgUrl: 'also, same same'
        })
    }

    const delFunc = () => {
        console.log('DELETE func triggered')
        // delMe will need rework for proper linking of new stuff!
        const delMe = {
            title: 'title.value',
            description: 'description.value',
            imgUrl: `imgUrl.value`
        }

        axios.delete("https://api.vschool.io/kyleshutt/thing", delMe)
        .then(response => console.log(response))
        .catch(error => console.log(error))
    }

    const postFunc = () => {
        console.log("post function triggered")
        // addNew will need rework for proper linking of new stuff!
        const addNew = {
            title: 'title.value',
            description: 'description.value',
            imgUrl: 'imgUrl.value'
        }

        axios.post('https://api.vschool.io/kyleshutt/thing', addNew)
        .then(res => console.log(res.data))
        .catch(error => console.log(error))
    }

    return (
        <BeautyContext.Provider value={{
            userThing,
            allThings,
            getFunc,
            delFunc,
            putFunc,
            postFunc
        }}>
            {props.children}
        </BeautyContext.Provider>
    )
}

export {BeautyProvider, BeautyContext}