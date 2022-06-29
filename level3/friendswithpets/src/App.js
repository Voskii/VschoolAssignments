import React from "react"
import FriendList from "./components/FriendList"
import Data from "./data"



export default function App() {

  return (
    <div className="pageDaddy">
      <section className="">
        <FriendList friends={Data} />
      </section>
    </div>
  )

}