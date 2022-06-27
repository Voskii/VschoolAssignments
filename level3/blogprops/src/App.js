import React from "react"
import BlogList from "./components/BlogList"
import BlogPost from "./components/BlogPost"
import BlueButton from "./components/BlueButton"
import Footer from "./components/Footer"
import Grab from "./components/grab"
import Header from "./components/Header"

import Data from "./data"

export default function App() {
  const mapMe = Data.map(item => {
    return (
      <div className="">
        
        <BlogPost 
          key={item.id}
          {...item}
        />
        
        {/* <Header 
        key={item.id}
        {...item}
        /> */}

      </div>
  )
})

  return (
    <div>
      <Header />
      <Grab />
      <BlogList />
      <section className="">
      {mapMe}
      </section>
      <BlueButton />
      <Footer />
      
    </div>
  )
}
