import React from "react"

export default function Star() {
    return <img 
    src={`../images/${starIcon}`} 
    className="card--favorite"
    onClick={toggleFavorite}
/>
}