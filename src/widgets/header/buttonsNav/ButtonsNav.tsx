import React from 'react';

import Anxiety from './anxiety';
import Bell from './bell';
import ProfileBtn from './profileBtn';

import style from './ButtonsNav.module.scss';

const ButtonsNav = () => {
  return (
    <div className={style.btns}>
      <Anxiety />
      <Bell />
      <ProfileBtn />
    </div>
  );
};

export default ButtonsNav;
