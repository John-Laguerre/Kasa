import React from 'react';
import { Link, isRouteErrorResponse } from 'react-router-dom';
import style from '../styles/layouts/_error.module.scss';
import Main from './Main';

export default function ErrorMessage({ error }) {
  // Détermine un message d'erreur par défaut pour les cas non gérés
  let errorMessage = "Oups! Quelque chose s'est mal passé.";

  // Vérifie si l'erreur est une erreur de routage et ajuste le message en conséquence
  if (isRouteErrorResponse(error)) {
    errorMessage = "Oups! La page que vous demandez n'existe pas.";
  }

  return (
    <Main>
      <div className={style.ctaErrorMsg}>
        <h1 className={style.ctaErrorMsg__title}>{error.status || 'Erreur'}</h1>
        <p className={style.ctaErrorMsg__message}>{errorMessage}</p>
        <Link className={style.ctaErrorMsg__link} to={'/'}>
          Retourner sur la page d'accueil
        </Link>
      </div>
    </Main>
  );
}
