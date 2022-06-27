import React from "react"
import Data from "./data"

export default function FriendList() {
    const mapMe = Data.map(item => {
      return (
        <Friend
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