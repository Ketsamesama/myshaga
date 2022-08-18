import React from 'react';
import { NavLink } from 'react-router-dom';

import { listItem } from './consts';

import style from './HeaderNav.module.scss';

const HeaderNav = () => (
  <ul className={style.nav}>
    {listItem.map((item, i) => {
      return (
        <li key={i}>
          <NavLink to={'/'}>{item}</NavLink>
        </li>
      );
    })}
  </ul>
);

export default HeaderNav;
