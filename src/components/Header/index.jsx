import React from "react"
import { NavLink } from "react-router-dom"
import "./header.scss"
import Logo from "../../assets/LOGO.png"

function Header() {
  return (
    <header>
      <NavLink to="/" className="logo">
        <img src={Logo} alt="Kara Logo" />
      </NavLink>
      <nav>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : undefined)}
        >
          Accueil
        </NavLink>
        <NavLink
          to="/About"
          className={({ isActive }) => (isActive ? "active" : undefined)}
        >
          À Propos
        </NavLink>
      </nav>
    </header>
  )
}

export default Header
