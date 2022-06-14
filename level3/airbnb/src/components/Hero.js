import React from "react"
import groupImg from "../images/group.png"

export default function Hero() {


    
    return (
        <section className="hero">
                <img src={groupImg} className="heroimg" alt=""/>
                <h1 className="heroheader">Online Experiences</h1>
                <p className="herotext">Join the unique interactive activities led by one-of-a-kind hosts-all without leaving home.</p>
        </section>
    )
}