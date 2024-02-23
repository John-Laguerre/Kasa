import React from 'react';
import style from '../../styles/layouts/_carrousel.module.scss';
import ArrowRight from '../../assets/arrowRight.png';

export default function RightArrow({ onClick }) {
  return (
    <img
      className={`${style.caroussel__arrowRight} ${style.caroussel__arrow}`}
      onClick={onClick}
      src={ArrowRight}
      alt="Flèche droite"
    />
  );
}
