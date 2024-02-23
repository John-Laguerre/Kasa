import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/LOGO.png';

import styles from '../../styles/layouts/Haut&Bas_Pages/_header.module.scss';

function Header() {
  return (
    <header className={styles.header}>
      <NavLink to="/">
        <img src={logo} alt="Logo KASA" className={styles.logo} />
      </NavLink>
      <nav className={styles.nav}>
        <ul>
          <li>
            {/* utilisation du composant 'NavLink' qui reconnait si avtive est ou non */}
            <NavLink to="/">Accueil</NavLink>
          </li>
          <li>
            <NavLink to="/about">A Propos</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
