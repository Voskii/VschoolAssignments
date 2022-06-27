import React from "react"
import Header from "./components/Header"
import Cheeks from "./components/Cheeks"
import Footer from "./components/Footer"
import Data from "./data"



export default function App() {
  const mapMe = Data.map(item => {
    return (
      <Cheeks
      key={item.id}
      {...item}
      />
  )
  })

  return (
    <div className="page">
      <Header />
      <section className="">
        {mapMe}
      </section>
      <Footer />
      
    </div>
  )

}