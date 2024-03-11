import { redirect, useLoaderData } from 'react-router-dom';
import data from '../data.json';
import Main from '../components/Main.jsx';
import Carousel from '../components/Carousel.jsx';
import Information from '../components/Information.jsx';

// Charge les détails d'un logement spécifique basé sur l'URL.
export async function loader({ params }) {
  const { title } = params;
  // Trouve le logement correspondant au titre fourni ou redirige vers la page d'erreur.
  const house = data.find(
    (h) => h.title.toLowerCase().split(' ').join('-') === title
  );
  if (!house) return redirect(`/error`);
  return { house };
}

// Affiche la page d'un logement avec les détails chargés.
export default function Housing() {
  const { house } = useLoaderData(); // Récupère les données du logement.
  // Rendu du composant avec les informations du logement.
  return (
    <Main>
      <Carousel pictures={house.pictures} />
      <Information
        titleHouse={house.title}
        location={house.location}
        tags={house.tags}
        nameHost={house.host.name}
        pictureHost={house.host.picture}
        ratings={house.rating}
        description={house.description}
        equipments={house.equipments}
      />
    </Main>
  );
}
