import React from "react"
import "./Footer.scss"
import Logofooter from "../../assets/LOGO2.png"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="logo">
          <img src={Logofooter} alt="Kasa Logo" />
        </div>
        <div className="copyright">© 2024 Kasa. All rights reserved</div>
      </div>
    </footer>
  )
}

export default Footer
