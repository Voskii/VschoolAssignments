import React, { useState } from "react"

export default function Buttons(props){
    const {fish, data, id, saveMeme, setSaveMeme} = props
    console.log(saveMeme)
    console.log(props)
    console.log(data)
    console.log(fish)
    console.log(data.isDeleted)
    console.log(setSaveMeme)
    const [visible, setVisible] = useState(!true)
    
    const [memeInputs, setMemeInputs] = useState({
        topText: props.data.topText,
        bottomText: props.data.bottomText
    })

    
// donno if this fully worky lol id a lil sus
    const updateMemeItem = (id, updatedItem) => {
        console.log(`*****IN BUTT COMPONENT*****`)
        console.log(`updateMemeItem function has been called`,id)
        props.setSaveMeme(prevsaveMeme => {
           return prevsaveMeme.map((item, index)=> {
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
        // const edits = document.getElementById('editButt').textContent
        // console.log(edits)
        // if(edits === 'close'){
        //     updateMemeItem(props.id, memeInputs)
        // }

        setVisible((prev) => !prev);
    }

    const handleChange = (e) => {
        const {name, value} = e.target
        setMemeInputs(prevState=>{
            return ({
                ...prevState,
                [name]:value
                
            })
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('form has been submitted')
        updateMemeItem(props.id, memeInputs)
    }



    const deleteMe = (index) => {
        console.log(props)
        console.log(typeof(props))
        setSaveMeme(preSaveMeme => {
            return [...preSaveMeme.filter(item => item !== preSaveMeme[index])]
        }
        
    )}
    //  saveMeme.filter((myMeme) => myMeme.props.fish !== props.fish));
    // function deleteMe(props){
    //     props.setSaveMeme((current) => current.filter((myMeme) => myMeme.props.fish !== props.fish));
    // }
    
    // const deleteMe = (props) => {
    //     props.setSaveMeme((current) => current.filter((myMeme) => myMeme.props.fish !== props.fish));
    // }
    
    return (
        <div >
            
                <div>
                    {visible ?
                        <form onSubmit={handleSubmit}>
                            <input
                                type="text"
                                name="topText"
                                value={memeInputs.topText}
                                onChange={handleChange}
                            />
                            <input
                                type="text"
                                name="bottomText"
                                value={memeInputs.bottomText}
                                onChange={handleChange}
                            />
                        </form>
                    :
                    <div className="container">
                    <img src={props.data.randomImage} className="bmeme--image" alt=""/>
                    <h2 className="bmeme--text top">{memeInputs.topText}</h2>
                    <h2 className="bmeme--text bottom">{memeInputs.bottomText}</h2>
                    </div>
                    }

                    <button id="editButt" onClick={editMe}>{visible ? "Close" : 'Edit'}</button>
            
                    <button onClick={() => deleteMe(fish)}>DELETE</button>
                    
                </div>
              
        </div>
    )
}