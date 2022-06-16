import React from "react"
import Navbar from "./components/Navbar"
import Past from "./components/Past"
import Data from "./data"

export default function App() {
  const mapMe = Data.map(item => {
    return (
      <Past
      key={item.id}
      {...item}
      />
  )
  })

  return (
    <div>
      <Navbar />
      <Past />
      <section className="pastlist">
        {mapMe}
      </section>
    </div>
  )
}
