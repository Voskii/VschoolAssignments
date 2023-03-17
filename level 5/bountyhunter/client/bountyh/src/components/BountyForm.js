import React, { useState } from "react";

export default function BountyForm(props){
    const initInputs = { bounty_amount: props.bounty_amount || '', living: props.living || '', fname: props.fname || '', lname: props.lname || '', type: props.type || ''}
    const [inputs, setInputs] = useState(initInputs)
    const {submit, setEditToggle, editToggle} = props

    function handleChange(e){
        const {name, value} = e.target
        setInputs(prev => ({...prev, [name]: value}))
    }

    function handleSubmit(e){
        e.preventDefault()
        // console.log(inputs, props)
        submit(inputs, props._id)
        setInputs(initInputs)
        // setEditToggle(!editToggle)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type='text'
                name='fname'
                value={inputs.fname}
                onChange={handleChange}
                placeholder='First Name'/>
            <input 
                type='text'
                name='lname'
                value={inputs.lname}
                onChange={handleChange}
                placeholder='Last Name'/>
            <input 
                type='number'
                name='bounty_amount'
                value={inputs.bounty_amount}
                onChange={handleChange}
                placeholder='Price'/>
            <input 
                type='text'
                name='living'
                value={inputs.living}
                onChange={handleChange}
                placeholder='Living? true or false'/>
            <input 
                type='text'
                name='type'
                value={inputs.type}
                onChange={handleChange}
                placeholder='Type? sith or jedi'/>
            <button>{props.btnText}</button>
        </form>
    )
}