import React from "react"
import Header from "./components/Header"
import Cheeks from "./components/Cheeks"
import Stats from "./components/Stats"
import Data from "./data"



export default function App() {
  const mapMe = Data.map(item => {
    return (
      <Shouldprobbecheeks
      key={item.id}
      {...item}
      />
  )
  })

  return (
    <div>
      <Header />
      <Cheeks />
      <Stats />
      <section className="">
        {mapMe}
      </section>
    </div>
  )

}