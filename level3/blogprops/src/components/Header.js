import React from 'react'
import Navbar from "./Navbar"

export default function header(props) {
  return (
    <div>
      <div>{props.author}</div>
      <button>
        <Navbar />
      </button>
    </div>
  )
}
