import React from 'react';
import style from '../styles/layouts/_informations.module.scss';
import Star from '../assets/star.png';
import StarRed from '../assets/starRed.png';

function RatingStars({ ratings }) {
  const totalStars = 5;
  const stars = [];

  for (let i = 1; i <= totalStars; i++) {
    stars.push(
      <img
        key={i}
        src={i <= ratings ? StarRed : Star}
        alt={`${
          i <= ratings ? 'étoile rouge' : 'étoile'
        } ${i} sur ${totalStars}`}
        className={style.ctaInformation__profil__rating__star}
      />
    );
  }

  return <div className={style.ctaInformation__profil__rating}>{stars}</div>;
}

export default RatingStars;
