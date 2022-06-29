import React from "react"
import Friend from "./Friend"

export default function FriendList(props) {
  const {friends} = props
  // wth is that ^^
    const mapMe = friends.map(item => {
      return (
        <Friend
        key={item.id}
        name={item.name}
        age={item.age}
        pets={item.pets}
        />
    )
    })
  
    return (
      <div>
        <section className="FriendMe">
          {mapMe}
        </section>
      </div>
    )
  
  }