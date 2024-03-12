import React from 'react';
import { useRouteError } from 'react-router-dom';
import Header from '../components/Haut&Bas_Pages/Header.jsx';
import ErrorMessage from '../components/Error404.jsx';
import Footer from '../components/Haut&Bas_Pages/Footer.jsx';

// Affiche une page d'erreur avec des informations spécifiques sur l'erreur survenue.
export default function ErrorPage() {
  const error = useRouteError(); // Récupération de l'erreur pour affichage.
  console.log(error);

  return (
    <>
      <Header />
      <ErrorMessage error={error} />
      <Footer />
    </>
  );
}
