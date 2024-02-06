<<<<<<< HEAD
function Banner({ backgroundImage, title }) {
  return (
    <div
      className="banner"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <h1>{title}</h1>
=======
import React from "react"
import "./Banner.scss"
import BannerImage from "../../assets/IMG1.png"

function Banner() {
  return (
    <div className="banner" style={{ backgroundImage: `url(${BannerImage})` }}>
      <h2>Chez vous, partout et ailleurs</h2>
>>>>>>> de474ea (Mise à jour)
    </div>
  )
}

export default Banner
