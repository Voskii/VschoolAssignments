import React, { useContext } from "react";
import { ThemeContext } from "./themeContext";

export default function Footer(props){

    const {color} = useContext(ThemeContext)

    return (
        <footer className={`${color}-theme`}>
            Look at my Feet bro
        </footer>
    )
}