import React from "react"
import Facebook from "../images/facebook.svg"
import Twit from "../images/twit.svg"
import GitHub from "../images/github.svg"

export default function Footer() {
    return (
        <div>
            <div className="footContainer">
                <img src={Facebook}/>
                <img src={Twit}/>
                <img src={GitHub}/>
            </div>
            <p className="copywrongmf">Copyright © Your Website 2022</p>
        </div>
    )
}