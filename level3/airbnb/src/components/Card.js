import React from "react"
import star from "../images/Star.png"

export default function Card(props) {
    return (
        <div className="card">
          <img src={props.img} className="cardimg" alt=""/>
          <div className="cardstats">
              <img src={star} className="cardstar"alt=""/>
              <span>{props.rating}</span>
              <span className="gray">({props.reviewCount}) • </span>
              <span className="gray">{props.country}</span>
          </div>
          <p>{props.title}</p>
          <p><span className="boldme">From ${props.price}</span> / person</p>
        </div>
    )
}