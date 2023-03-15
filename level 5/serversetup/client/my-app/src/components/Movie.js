import React from "react";

export default function Movie(props){
    console.log(props)
    const {title, genre, _id} = props
    return (
        <div className="movie">
            <h1>Title: {title}</h1>
            <p>Genre: {genre}</p>
        </div>
    )
}