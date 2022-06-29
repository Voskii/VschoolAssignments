import React from "react"

export default function Pet(props) {
    console.log(props)
        return (
            <div className="petMe">
                <div className="titleName"><span className="tpName">Pet Name:</span>
                    <div className="petName">{props.name}</div>
                </div>
                <div className="titleBreed"><span className="tpBreed">Breed:</span>
                    <div className="petBreed">{props.breed}</div>
                </div>
            </div>
        )
    }
