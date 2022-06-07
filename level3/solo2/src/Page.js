import React from "react"
import Name from "./Name"
import Navbar from "./Navbar"
import Main from "./Main"


export default function Page () {
    return (
        <div className="container2">
            <Name />
            <Navbar />
            <Main />
        </div>
    )
}

//I don't know where these other margins are coming from