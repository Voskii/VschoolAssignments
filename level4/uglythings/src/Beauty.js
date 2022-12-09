import React, { useState, useEffect, useContext } from "react"
import axios from "axios";
import { BeautyContext } from "./Context";

export default function Beauty(props){
    
    const {context, userThing, setUserthing, allThings, setAllthings, editInputs, setEditInputs, getFunc, delFunc, putFunc, postFunc } = useContext(BeautyContext)
    const [visible, setVisible] = useState(!true)
    

// donno if this fully worky lol id a lil sus
    const updateBeautyItem = (id, updatedItem) => {
        console.log(`updateBeautyItem function has been called`,id)
        props.setSaveBeauty(prevsaveBeauty => {
           return prevsaveBeauty.map((item, index)=> {
                if (index === id) {
                    return updatedItem
                }
                else {
                    return item
                }
            })
        })
    }

    const editMe = () => {
        setVisible((prev) => !prev);
    }

    const handleChange = (e) => {
        const {name, value} = e.target
        setEditInputs(prevState=>{
            return ({
                ...prevState,
                [name]:value 
            })
        })
    }
    const handleSubmit = (e) => {
        
        console.log('form has been submitted')
        putFunc()
    }

    const deleteMe = (index) => {
        console.log(props)
        console.log(typeof(props))
        return 
        }

    return (
        <div>
                <div>
                    {visible ?
                        <form onSubmit={handleSubmit}>
                            <input
                                className='inputMe'
                                type="text"
                                name="title"
                                value={props.data.title}
                                onChange={handleChange}
                            />
                            <input
                                className='inputMe'
                                type="text"
                                name="description"
                                value={props.data.description}
                                onChange={handleChange}
                            />
                            <input 
                                className='inputMe' 
                                name="imgUrl"
                                value={props.data.imgUrl}
                                type="text" 
                                onChange={handleChange}
                            />
                            <button onClick={() => handleSubmit()}>I Want</button>  
                      </form>
                    :
                    <div className="container">
                    <img src={props.data.imgUrl} className="bBeauty--image" alt=""/>
                    <h2 className="bBeauty--text top">{props.data.title}</h2>
                    <h2 className="bBeauty--text bottom">{props.data.description}</h2>
                    
                    </div>
                    
                    }
                    <button id="editButt" onClick={editMe}>{visible ? "Close" : 'Edit'}</button>
                    <button onClick={() => deleteMe()}>DELETE</button>
                    
                </div>
        </div>
    )
}