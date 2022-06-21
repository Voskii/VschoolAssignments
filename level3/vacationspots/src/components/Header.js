import React from "react"

export default function Header(props){

    return (
        <div className="nameinfo">
            <div className="name">
                {props.name}
            </div>
            <p>DBZ UNIVERSE SMADUHTHAT</p>
        </div>
    )
}