import React, { useState } from 'react';
import style from '../styles/layouts/_carrousel.module.scss';
import LeftArrow from './Directions_Carousel/LeftArrow';
import RightArrow from './Directions_Carousel/RightArrow';

export default function Carrousel({ pictures }) {
  const [currentImage, setCurrentImage] = useState(0);

  const prevImg = () => {
    setCurrentImage((prev) => (prev - 1 + pictures.length) % pictures.length);
  };

  const nextImg = () => {
    setCurrentImage((prev) => (prev + 1) % pictures.length);
  };

  return (
    <div className={style.caroussel}>
      <div className={style.caroussel__numberPicture}>
        {currentImage + 1}/{pictures.length}
      </div>
      {pictures.length > 1 && <LeftArrow onClick={prevImg} />}
      <img
        src={pictures[currentImage]}
        alt={`Vue de l'appartement ${currentImage + 1}`}
        className={style.caroussel__image}
      />
      {pictures.length > 1 && <RightArrow onClick={nextImg} />}
    </div>
  );
}
