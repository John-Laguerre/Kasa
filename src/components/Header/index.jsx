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
<<<<<<< HEAD
        <NavLink to="/" exact activeClassName="active">
          Acceuil
        </NavLink>
        <NavLink to="/About" activeClassName="active">
          A Propos
=======
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
>>>>>>> de474ea (Mise à jour)
        </NavLink>
      </nav>
    </header>
  )
}

export default Header
