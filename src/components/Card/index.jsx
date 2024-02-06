<<<<<<< HEAD
function Card({ title, image }) {
  return (
    <div className="card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
=======
import React from "react"
import "./Card.scss"

function Card({ title, imageUrl }) {
  return (
    <div className="card">
      <img src={imageUrl} alt={title} className="card-image" />
      <div className="card-title">{title}</div>
>>>>>>> de474ea (Mise à jour)
    </div>
  )
}

export default Card
