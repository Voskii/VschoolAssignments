import React from "react"
import airlogo from "../images/airbnb.png"

export default function Navbar() {
    return (
        <nav>
            <img src={airlogo} className="navlogo" alt=""/>
        </nav>
    )
}