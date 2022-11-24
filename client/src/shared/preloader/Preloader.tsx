import React from 'react';

import PreloaderSvg from 'assets/svg/preloader.svg';
import style from './Preloader.module.scss';

const Preloader = () => (
  <div className={style.root}>
    <img src={PreloaderSvg} alt="preloader" />
  </div>
);

export default Preloader;
