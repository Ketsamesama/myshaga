import React from 'react';
import MainWrapper from 'shared/mainWrapper';

import Avatar from 'widgets/avatar';
import ProfileRedactor from 'features/profileRedactor/ui';

import style from './Profile.module.scss';

const Profile = () => {
  return (
    <MainWrapper>
      <div className={style.root}>
        <h1 className={style.title}>Профиль</h1>
        <Avatar />
        <ProfileRedactor />
      </div>
    </MainWrapper>
  );
};

export default Profile;
