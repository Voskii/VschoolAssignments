import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import Data from "./data"

export default function App() {
    const mapMe = Data.map(item => {
        return (
            <Card
            key={item.id}
            {...item}
            />
        )
    })
    
    return (
        <div>
            <Navbar />
            <Hero />
            <section className="cards-list">
                {mapMe}
            </section>
        </div>
    )
}