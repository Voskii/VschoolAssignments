import React from "react"
import gpsicon from "../images/gps.png"

export default function Past(props) {
    return (
        <div className="pastContainer">
            <img src={props.googleMapsUrl} className="pastimg" alt=""/>
            <div className="locationinfo">
                <img src={gpsicon} className="gps"alt=""/>
                <div className="locationname">{props.location}</div>
                <a className="apple" href="">View on Google Maps</a>
            </div>
            
            <h1 className="where">{props.title}</h1>
            <small className="date">{props.startDate} - {props.endDate}</small>
            <h3 className="desc">
                {props.description}
            </h3>
        </div>
    )
}