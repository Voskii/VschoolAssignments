import React, { useContext } from "react";
import { ThemeContext } from "./themeContext";

export default function Main(props){
    
    const {color, toggleTheme} = useContext(ThemeContext)
    
    return (
        <div className="moveButt">
            <button onClick={toggleTheme} className={`${color}-theme`}>SMASH ME</button>
        </div>
        
    )
}