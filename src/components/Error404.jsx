import React from 'react';
import { Link, isRouteErrorResponse } from 'react-router-dom';
import style from '../styles/layouts/_error.module.scss';
import Main from './Main';

export default function ErrorMessage({ error }) {
  // Avec la fonction 'isRouteErrorResponse' de react-router-dom,
  // il vérifie si l'erreur de la route est bien une erreur
  if (isRouteErrorResponse(error)) {
    return (
      <Main>
        <div className={style.ctaErrorMsg}>
          {/* affiche la valeur du statut du prop 'error' */}
          <h1 className={style.ctaErrorMsg__title}>{error.status}</h1>
          <p className={style.ctaErrorMsg__message}>
            Oups! La page que vous demandez n'existe pas.
          </p>
          <Link className={style.ctaErrorMsg__link} to={'/'}>
            Retourner sur la page d'accueil
          </Link>
        </div>
      </Main>
    );
  }
}
