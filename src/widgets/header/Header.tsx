import React from 'react';
import { NavLink } from 'react-router-dom';

import HeaderNav from './headerNav';
import ButtonsNav from './buttonsNav';

import style from './Header.module.scss';

const Header = () => (
  <header className={style.header}>
    <div className={style.headerWrapper}>
      <NavLink to="/" className={style.logo}>
        <div>
          <span>мыщ</span>ага
        </div>
      </NavLink>
      <HeaderNav />
      <ButtonsNav />
    </div>
  </header>
);

export default Header;
