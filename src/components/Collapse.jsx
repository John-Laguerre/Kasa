import { React, useState, useRef } from 'react';
import Arrow from '../assets/arrow.svg';
import style from '../styles/layouts/_collapse.module.scss';

export default function Collapse({ title, content }) {
  // Références au titre et au contenu pour manipulation directe.
  const head = useRef(null);
  const contient = useRef(null);
  // Gestion de l'état d'ouverture/fermeture.
  const [isActive, setIsActive] = useState(false);

  // Bascule l'état ouvert/fermé du composant.
  const toggleCollapse = () => {
    // Ajustement du style pour l'animation d'ouverture/fermeture.
    const { current: contentElement } = contient;
    if (contentElement.style.maxHeight) {
      contentElement.style.maxHeight = null;
      contentElement.style.padding = null;
    } else {
      contentElement.style.maxHeight = `${contentElement.scrollHeight}px`;
      contentElement.style.padding = `20px 20px 20px 15px`;
    }
    // Mise à jour de l'état.
    setIsActive(!isActive);
  };

  return (
    <div className={style.collapse}>
      <div className={style.collapse__head} ref={head} onClick={toggleCollapse}>
        <h3 className={style.collapse__head__title}>{title}</h3>
        <img
          src={Arrow}
          alt="Toggle collapse"
          className={`${style.collapse__arrow} ${
            isActive ? style.rotate180 : ''
          }`}
        />
      </div>
      <div className={style.collapse__content} ref={contient}>
        <div
          className={`${style.collapse__content__inside} ${
            isActive ? style.active : ''
          }`}
        >
          {content || 'Pas de contenu disponible'}
        </div>
      </div>
    </div>
  );
}
