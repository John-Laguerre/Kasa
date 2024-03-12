import React from 'react';
import style from '../../styles/layouts/_home_location.module.scss';
import { Link } from 'react-router-dom';

export default function Card({ card }) {
  // Création du slug à partir du titre pour l'URL de la page détaillée.
  const slug = card.title.toLowerCase().split(' ').join('-');

  return (
    <Link to={`/house/${slug}`} className={style.home__location__card}>
      <img
        src={card.cover}
        alt={card.title}
        className={style.home__location__card__img}
      />
      <h2 className={style.home__location__card__title}>{card.title}</h2>
    </Link>
  );
}
