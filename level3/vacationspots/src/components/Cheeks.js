import React from "react"

export default function Cheeks (props) {

    return (
        <div className="cheeeks">
            <div className="ltext">
              <div className="wherefrom">Origin</div>
                <h2 className="birth">{props.bornplace}</h2>
              <div className="girth">Power Level</div>
                <h2 className="price">{props.price}</h2>
            </div>
            <img src={props.img} className="dbzimg"/>
            <div className="divdesc">
                <h1 className="dbname">{props.name}</h1>
                <h2 className="desc">{props.desc}</h2>
            </div>
        </div>
    )
}