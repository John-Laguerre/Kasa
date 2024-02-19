import React from "react"
import "./About.css"
import BannerImg from "../../assets/IMG2.png"
import Collapse from "../../components/Collapse"

const About = () => {
  return (
    <>
      <div
        className="kara-banner2"
        style={{ backgroundImage: `url(${BannerImg})` }}
      ></div>
      <div className="about-content">
        <Collapse title="Fiabilité"></Collapse>
        <Collapse title="Respect"></Collapse>
        <Collapse title="Service"></Collapse>
        <Collapse title="Sécurité"></Collapse>
      </div>
    </>
  )
}

export default About
