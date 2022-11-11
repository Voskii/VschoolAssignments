import React from "react";
import img from '../images/me.png';

export default function header(){
    return (
        <div className="headerContainer">
            <img src={img} />
            <h1 className="headText">Kyle Shutt</h1>
        </div>
    )
}