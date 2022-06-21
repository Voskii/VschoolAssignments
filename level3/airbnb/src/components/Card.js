import React from "react"
import star from "../images/Star.png"

export default function Card(props) {
    let badgeText
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    }
    return (
        <div className="card">
            {badgeText && <div className="cardbadge">SOLD OUT</div>}
            <img src={props.coverImg} className="cardimg" alt=""/>
            <div className="cardstats">
                <img src={star} className="cardstar" alt=""/>
                <span>{props.rating}</span>
                <span className="gray">({props.reviewCount}) • </span>
                <span className="gray">{props.location}</span>
            </div>
            <p>{props.title}</p>
            <p className="cardprice"><span className="boldme">From ${props.price}</span> / person</p>
        </div>
    )
}