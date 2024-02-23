import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Haut&Bas_Pages/Header';
import Footer from '../components/Haut&Bas_Pages/Footer';

export default function HeaderFooterLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
