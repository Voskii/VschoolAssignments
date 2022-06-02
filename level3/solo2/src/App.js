import React from "react"
import Voski from "./Voski"
import Name from "./Name"
import Navbar from "./Navbar"
import Main from "./Main"
import Footer from "./Footer"

export default function App() {
    return (
        <div className="container">
            <Voski />
            <Name />
            <Navbar />
            <Main />
            <Footer />
        </div>
    )
}