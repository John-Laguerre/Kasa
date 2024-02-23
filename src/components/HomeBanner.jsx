import style from '../styles/layouts/_home_banner.module.scss';

function HomeBanner() {
  return (
    <div className={style.home__banner}>
      <h1 className={style.home__banner__title}>
        Chez vous, partout et ailleurs
      </h1>
    </div>
  );
}

export default HomeBanner;
