import style from '../../styles/layouts/_home_location.module.scss';
import Card from './Card';

// Affiche une galerie de cartes à partir des données fournies.
export default function Gallery({ data }) {
  return (
    <div className={style.home__location}>
      {data.map((card) => (
        <Card key={card.id} card={card} />
      ))}
    </div>
  );
}
