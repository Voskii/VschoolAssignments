import React from "react"

export default function Pet(props) {
    console.log(props)
        return (
            <div className="petMe">
                <div className="titleName">Name
                    <div className="petName">{props.name}</div>
                </div>
                <div className="titleBreed">Breed
                    <div className="petBreed">{props.breed}</div>
                </div>
                
            </div>
        )
    }
