import React from "react"

export default function Card (props) {
    return (
        <div className="card__container">
            <img src={`../images/${props.imageSrc}`} alt=""/>
            <div className="text__container">
                <h3>{props.location}</h3>
                <h2>{props.title}</h2>
                <p>{props.startDate}  -  {props.endDate}</p>
                <p>{props.description}</p>
            </div>
        </div>
    )
}