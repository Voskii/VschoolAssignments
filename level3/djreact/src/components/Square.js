import React, { useState } from 'react'

export default function Square(props) {
    console.log("I am in Square function!")
    console.log(useState)
    return (
        <div className="square" style={{
            border: "5px dotted violet",
            width: "225px",
            height: "400px",
            display: "inline-flex",
            backgroundColor: props.fish
        }}>

        </div>
    )
}

