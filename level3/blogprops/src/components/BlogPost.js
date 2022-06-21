import React from 'react'

export default function BlogPost(props) {
    return (
        <div>
            <div>{props.title}</div>
            <div>{props.subTitle}</div>
            <p>Posted by {props.author} on {props.date}</p>
        </div>
    )
}