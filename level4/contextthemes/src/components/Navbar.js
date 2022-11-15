import React, { useContext } from "react";
import { ThemeContext } from "./themeContext";

export default function Navbar(props){

    const {color} = useContext(ThemeContext)

    return (
        <nav className={`${color}-theme`}>
            <a href="/" className="siteTitle">Context Themes!</a>
            <ul>
                <li>
                    <a href="/Home">Home</a>
                </li>  
                <li>  
                    <a href="/about">About</a>
                </li> 
            </ul>
        </nav>
    )
}