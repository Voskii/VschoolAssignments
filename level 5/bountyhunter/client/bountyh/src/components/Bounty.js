import React, { useState } from "react";
import BountyForm from "./BountyForm";

export default function Bounty(props){
    console.log(props)
    const {price, living, _id, delBounty, editBounty, fname, lname, type} = props
    const [editToggle, setEditToggle] = useState(false)
    return (
        <div className="bounty">
            { !editToggle ?
                <>
                    <h1>Name: {fname} {lname}</h1>
                    <h4>Living: {living === false ? 'Dead' : 'Alive' }</h4>
                    <h4>Price: {price}</h4>
                    <h4>Type: {type}</h4>
                    <button className="delete-btn" onClick={() => delBounty(_id)}>Delete</button>
                    <button className="edit-btn" onClick={() => setEditToggle(prev => !prev)}>Edit</button>
                </>
            :
                <>
                    <BountyForm price={price} living={living} fname={fname} lname={lname} type={type} btnText='Submit Edit' submit={editBounty} _id={_id} setEditToggle={setEditToggle} editToggle={editToggle} />
                    <button onClick={() => setEditToggle(prev => !prev)}>Close</button>
                </>
            }
        </div>
    )
}