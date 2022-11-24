import React from 'react';
import { Link } from 'react-router-dom';

import HeaderNav from './headerNav';
import ButtonsNav from './buttonsNav';

import style from './Header.module.scss';

const Header = () => (
  <header className={style.header}>
    <div className={style.headerWrapper}>
      <Link to="/" className={style.logo}>
        <div>
          <span>мыщ</span>ага
        </div>
      </Link>
      <HeaderNav />
      <ButtonsNav />
    </div>
  </header>
);

export default Header;
