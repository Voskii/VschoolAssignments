import React from "react"
import intellect from "./images/email.svg"
import intellectsmile from "./images/linkedin.svg"

export default function Navbar() {
    return (
        <div className="butts">
            <button className="butt1">
                <img src={intellect} height={16}/>
                <div className="emailmeClan">Email</div>
            </button>
            <button className="butt2">
                <img src={intellectsmile} height={16}/>
                <div className="linkmeClan">LinkedIn</div>
            </button>
        </div>
    )
}