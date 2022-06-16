import React from "react"
import navlogo from "../images/world.png"

export default function Navbar() {
    return (
        <nav>
            <img src={navlogo} className="navlogo" alt=""/>
        </nav>
    )
}