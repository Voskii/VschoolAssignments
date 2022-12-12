import React, {createContext, useState} from "react";
import axios from "axios";

const BeautyContext = createContext()

function BeautyProvider(props) {

    const [allThings, setAllthings] = useState([{
        title: "",
        imgUrl: "",
        description: "",
        _id: ""
      }])
      
    const [userThing, setUserthing] = useState({
        title: "",
        imgUrl: "",
        description: ""
      }) 

    const [editInputs, setEditInputs] = useState({
        title: "",
        imgUrl: "",
        description: "",
        _id: ""
    })

    const fish = {
        title: editInputs.title,
        description: editInputs.description,
        imgUrl: editInputs.imgUrl,
        _id: editInputs._id
    }

    const delMe = {
        title: allThings.title,
        description: allThings.description,
        imgUrl: allThings.imgUrl,
        _id: allThings._id
    }

    const addNew = {
        title: userThing.title,
        description: userThing.description,
        imgUrl: userThing.imgUrl
    }

    const getFunc = () => {
        console.log('GET func triggered')
        axios.get('https://api.vschool.io/kyleshutt/thing')
            .then(res => {console.log(res.data) 
                setAllthings(res.data)})
            .catch(error => console.log(error))
    }

    const putFunc = (index) => {
        console.log('PUT func triggered')
        axios.put(`https://api.vschool.io/kyleshutt/thing/${fish._id}`, index)
            .then(res => {
                console.log("put request:", res.data)
                setAllthings(prevState => prevState.map(item => item._id === fish._id ? res.data : item))
            }) 
            .catch(error => console.log(error))
    }

    const delFunc = (index) => {
        console.log('DELETE func triggered')
        axios.delete(`https://api.vschool.io/kyleshutt/thing/${index}`)
            .then(res => {
                console.log(res.data)
                setAllthings(prevState => prevState.filter(item => item._id !== index))
            })
            .catch(error => console.log(error))
        
    }

    const postFunc = () => {
        console.log("post function triggered")
        axios.post('https://api.vschool.io/kyleshutt/thing', addNew)
            .then(res => {
                console.log("submitted  item: ",res.data)
                setAllthings(prevState => [...prevState, res.data])
            })
            .catch(error => console.log(error))
    }

    return (
        <BeautyContext.Provider value={{
            userThing,
            setUserthing,
            allThings,
            setAllthings,
            editInputs,
            setEditInputs,
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