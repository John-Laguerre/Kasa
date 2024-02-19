import React from "react"
import "./Banner.scss"
import BannerImage from "../../assets/IMG1.png"

const Banner = () => {
  return (
    <div
      className="kara-banner1"
      style={{ backgroundImage: `url(${BannerImage})` }}
    >
      <h2>Chez vous, partout et ailleurs</h2>
    </div>
  )
}

export default Banner
