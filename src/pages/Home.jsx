import React from 'react';
import { useLoaderData } from 'react-router-dom';

import data from '../data.json';

import Main from '../components/Main';
import HomeBanner from '../components/Banner/HomeBanner';
import Gallery from '../components/Gallery/Gallery';

// Crée une fonction asynchrone pour renvoyez les données contenu dans la variable 'house'
export async function loader({ params }) {
  const house = data;
  return { house };
}

function Home() {
  // Utilise le hook 'useLoaderData' pour extraire les valeurs retourné par la fonction 'loader'
  const { house } = useLoaderData();

  return (
    <Main>
      <HomeBanner />
      {/* Passe en prop 'data', les données au composant 'Location' */}
      <Gallery data={house} />
    </Main>
  );
}

export default Home;
