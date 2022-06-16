import React from "react"

export default function Past(props) {
    
    return (
        <div className="past">
            
            <img src={props.coverImg} className="pastimg" alt=""/>
            <div className="paststats">
                
                <span>{props.rating}</span>
                <span className="gray">({props.reviewCount}) • </span>
                <span className="gray">{props.location}</span>
            </div>
            <p>{props.title}</p>
            <p className="pastprice"><span className="boldme">From ${props.price}</span> / person</p>
        </div>
    )
}