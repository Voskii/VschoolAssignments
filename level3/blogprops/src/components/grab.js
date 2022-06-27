import React from 'react'
import school from '../images/home-bg.jpg'

export default function grab(props) {
  return (
    <div className="container">
        <img src={school} className="grabimg" alt="" />
        <div className="imgtext">
            <div className="grabtitle">Clean Blog</div>
            <div className="grabauthor">A Blog Theme by Start Bootstrap{props.author}</div>
        </div>
    </div>
  )
}

