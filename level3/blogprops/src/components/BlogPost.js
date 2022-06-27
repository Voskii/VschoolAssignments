import React from 'react'

export default function BlogPost(props) {
    return (
        <div>
            <div className="blogtitle">{props.title}</div>
            <div className="blogsubtitle">{props.subTitle}</div>
            <div className="yada">Posted by <span className="blogauthor">{props.author}</span> on {props.date}</div>
            <div className="border"></div>
        </div>
    )
}