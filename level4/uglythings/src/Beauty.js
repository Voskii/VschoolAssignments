import React, { useState, useEffect } from "react"
import axios from "axios";

export default function Beauty(props){

    const {fish, data, id, saveBeauty, setSaveBeauty} = props
    
    const [visible, setVisible] = useState(!true)
    
    const [beautyInputs, setBeautyInputs] = useState({
        topText: props.data.topText,
        bottomText: props.data.bottomText
    })

    
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
        setBeautyInputs(prevState=>{
            return ({
                ...prevState,
                [name]:value 
            })
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('form has been submitted')
        updateBeautyItem(props.id, beautyInputs)
    }

    const deleteMe = (index) => {
        console.log(props)
        console.log(typeof(props))
        setSaveBeauty(preSaveBeauty => {
            return [...preSaveBeauty.filter(item => item !== preSaveBeauty[index])]
        }
    )}

    return (
        <div >
                <div>
                    {visible ?
                        <form onSubmit={handleSubmit}>
                            <input
                                type="text"
                                name="topText"
                                value={beautyInputs.topText}
                                onChange={handleChange}
                            />
                            <input
                                type="text"
                                name="bottomText"
                                value={beautyInputs.bottomText}
                                onChange={handleChange}
                            />
                        </form>
                    :
                    <div className="container">
                    <img src={props.data.randomImage} className="bBeauty--image" alt=""/>
                    <h2 className="bBeauty--text top">{beautyInputs.topText}</h2>
                    <h2 className="bBeauty--text bottom">{beautyInputs.bottomText}</h2>
                    </div>
                    }
                    <button id="editButt" onClick={editMe}>{visible ? "Close" : 'Edit'}</button>
                    <button onClick={() => deleteMe(fish)}>DELETE</button>
                </div>
        </div>
    )
}