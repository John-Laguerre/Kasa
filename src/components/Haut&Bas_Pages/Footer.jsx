import React from 'react';
import { Link } from 'react-router-dom';
import logoFooter from '../../assets/logo_footer.png';
import style from '../../styles/layouts/Haut&Bas_Pages/_footer.module.scss';

export default function Footer() {
  return (
    <footer className={style.footer}>
      <div className={style.footer__ctaLogo}>
        <Link to="/">
          <img className={style.footer__logo} src={logoFooter} alt="" />
        </Link>
      </div>
      <div className={style.footer__ctaTitle}>
        <h3 className={style.footer__title}>
          © 2020 Kasa. All rights reserved
        </h3>
      </div>
    </footer>
  );
}
