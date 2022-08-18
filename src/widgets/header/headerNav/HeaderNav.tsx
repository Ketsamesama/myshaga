import React from 'react';

import { NavLink } from 'react-router-dom';

import { listItem } from './consts';
import style from './styles.module.scss';

const HeaderNav = () => {
  return (
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
};

export { HeaderNav };
