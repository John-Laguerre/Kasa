import React from "react"
import "./Card.css"
import { Link } from "react-router-dom"

const Card = ({ title, imageUrl, id }) => {
  return (
    <Link to={"./Housing/" + id}>
      <div className="card">
        <img src={imageUrl} alt={title} className="card-image" />
        <div className="card-title">{title}</div>
      </div>
    </Link>
  )
}

export default Card
