import React from 'react';

import Anxiety from 'widgets/header/buttonsNav/anxiety';
import Bell from 'widgets/header/buttonsNav/bell';
import ProfileBtn from 'widgets/header/buttonsNav/profileBtn';

import style from './styles.module.scss';

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
