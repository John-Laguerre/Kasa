import React from "react"
import "./Card.css"
import { Link } from "react-router-dom"

const Card = ({ title, imageUrl, id }) => {
  return (
    <div className="card">
      <Link className="linkModir" to={"./Housing/" + id}>
        <img src={imageUrl} alt={title} className="card-image" />
        <div className="card-title">{title}</div>
      </Link>
    </div>
  )
}

export default Card
