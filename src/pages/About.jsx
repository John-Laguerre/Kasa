import Main from '../components/Main';
import AboutBanner from '../components/Banner/AboutBanner';
import style from '../styles/layouts/_collapse.module.scss';
import Collapse from '../components/Collapse';

export default function About() {
  return (
    <Main>
      <AboutBanner title="Fiabilité" />
      <div className={style.ctaCollapseAbout}>
        <div className={style.ctaCollapseAbout__item}>
          <Collapse
            title="Fiabilité"
            content="Les annonces postée sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
          />
        </div>
        <div className={style.ctaCollapseAbout__item}>
          <Collapse
            title="Respect"
            content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
          />
        </div>
        <div className={style.ctaCollapseAbout__item}>
          <Collapse
            title="Service"
            content="Nous nous engageons à offrir un service de qualité à nos utilisateurs. Notre équipe est à votre écoute pour toute question ou problème."
          />
        </div>
        <div className={style.ctaCollapseAbout__item}>
          <Collapse
            title="Sécurité"
            content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
          />
        </div>
      </div>
    </Main>
  );
}
