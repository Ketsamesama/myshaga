import React from 'react';
import { NavLink } from 'react-router-dom';

import HeaderNav from 'widgets/header/headerNav';
import ButtonsNav from 'widgets/header/buttonsNav';

import style from './styles.module.scss';

const Header = () => {
  return (
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
};

export default Header;
