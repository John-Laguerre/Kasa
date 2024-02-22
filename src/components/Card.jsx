import React from 'react';
import style from '../styles/layouts/_home_location.module.scss';
import { Link } from 'react-router-dom';

// Fonction utilitaire pour générer un slug à partir d'un titre
const generateSlug = (title) => title.toLowerCase().split(' ').join('-');

export default function Card({ card: { title, cover } }) {
  const slug = generateSlug(title);

  return (
    <Link to={`/house/${slug}`} className={style.home__location__card}>
      <img
        className={style.home__location__card__img}
        src={cover}
        alt={title}
      />
      <h2 className={style.home__location__card__title}>{title}</h2>
    </Link>
  );
}
