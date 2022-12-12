import React, { useState, useEffect, useContext } from "react"
import axios from "axios";
import { BeautyContext } from "./Context";

export default function Beauty(props){
    console.log(props)
    const {context, userThing, setUserthing, allThings, setAllthings, editInputs, setEditInputs, getFunc, delFunc, putFunc, postFunc } = useContext(BeautyContext)
    const [visible, setVisible] = useState(!true)
    console.log(allThings)
    console.log(editInputs)
    

// donno if this fully worky lol id a lil sus
    // const updateBeautyItem = (id, updatedItem) => {
    //     console.log(`updateBeautyItem function has been called`,id)
    //     props.setSaveBeauty(prevsaveBeauty => {
    //        return prevsaveBeauty.map((item, index)=> {
    //             if (index === id) {
    //                 return updatedItem
    //             }
    //             else {
    //                 return item
    //             }
    //         })
    //     })
    // }

    const editMe = (e) => {
        setVisible((prev) => !prev);
        setEditInputs({
         title: props.data.title,
         imgUrl: props.data.imgUrl,
         description: props.data.description,
         _id: props.data._id
    }) 
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
        e.preventDefault()
        console.log('form has been submitted')
        putFunc(editInputs)
    }

    const deleteMe = (index) => {
        console.log(delFunc)
        console.log(index)
        delFunc(index)
        return 
        }

    return (
        <div>
                <div className="container">
                    {visible ?
                        <form onSubmit={handleSubmit}>
                            <input
                                className='inputMe'
                                type="text"
                                name="title"
                                value={editInputs.title}
                                onChange={handleChange}
                            />
                            <input
                                className='inputMe'
                                type="text"
                                name="description"
                                value={editInputs.description}
                                onChange={handleChange}
                            />
                            <input 
                                className='inputMe' 
                                name="imgUrl"
                                value={editInputs.imgUrl}
                                type="text" 
                                onChange={handleChange}
                            />
                            <button>I Want</button>  
                      </form>
                    :
                    <div className="">
                    <h2 className="bBeautyTitle">{props.data.title}</h2>    
                    <img src={props.data.imgUrl} className="bBeauty--image" alt=""/>
                    <h2 className="bBeauty--text bottom">{props.data.description}</h2>
                    </div>
                    }
                    <div>
                    <button id="editButt" onClick={editMe}>{visible ? "Close" : 'Edit'}</button>
                    <button onClick={() => deleteMe(props.data._id)}>DELETE</button>
                    </div>
                </div>
        </div>
    )
}