import React from 'react';
import style from '../styles/layouts/_informations.module.scss';
import styles from '../styles/layouts/_collapse.module.scss';
import RatingStars from './RatingStars';
import Collapse from '../components/Collapse';
import Host from '../assets/Host.png';

function Information({
  titleHouse,
  location,
  tags,
  nameHost,
  pictureHost,
  ratings,
  description,
  equipments,
}) {
  const [firstName, lastName] = nameHost.split(' ');

  const equipmentsList = equipments.map((e) => <li key={e}>{e}</li>);

  return (
    <>
      <div className={style.ctaInformation}>
        <div className={style.ctaInformation__house}>
          <div className={style.ctaInformation__house__info}>
            <h1 className={style.ctaInformation__house__info__title}>
              {titleHouse}
            </h1>
            <p className={style.ctaInformation__house__info__location}>
              {location}
            </p>
          </div>
          <div className={style.ctaInformation__house__tags}>
            <ul>
              {tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className={style.ctaInformation__profil}>
          <div className={style.ctaInformation__profil__host}>
            <div className={style.ctaInformation__profil__host__name}>
              <p className={style.ctaInformation__profil__host__name__first}>
                {firstName}
              </p>
              <p className={style.ctaInformation__profil__host__name__last}>
                {lastName}
              </p>
            </div>
            <img
              src={pictureHost || Host}
              alt="portrait de l'hôte"
              className={style.ctaInformation__profil__host__pictureHost}
            />
          </div>
          <RatingStars ratings={Number(ratings)} />
        </div>
      </div>
      <div className={styles.ctaCollapseHouse}>
        <div className={styles.ctaCollapseHouse__item}>
          <Collapse
            title="Description"
            content={description || 'Aucune description pour le moment'}
          />
        </div>
        <div className={styles.ctaCollapseHouse__item}>
          <Collapse
            title="Equipements"
            content={
              equipments.length > 0
                ? equipmentsList
                : 'Aucun équipement renseigner pour le moment'
            }
          />
        </div>
      </div>
    </>
  );
}

export default Information;
