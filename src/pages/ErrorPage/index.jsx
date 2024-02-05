import React from "react"
import "./errorPage.scss"
import image404 from "../../assets/404.png"

function ErrorPage() {
  return (
    <div className="error-page">
      <img src={image404} alt="404" className="img404" />
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <a href="/">Retourner sur la page d'accueil</a>
    </div>
  )
}

export default ErrorPage
