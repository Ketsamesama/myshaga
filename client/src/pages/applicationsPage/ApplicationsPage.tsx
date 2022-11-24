import React, { useEffect } from 'react';
import MainWrapper from 'shared/mainWrapper';
import LinkComponent from 'shared/link';

import style from './ApplicationsPage.module.scss';

const Applications = () => {
  useEffect(() => {
    const ws = new WebSocket('wss://localhost:8000/');
  }, []);
  return (
    <MainWrapper>
      <div className={style.nav}>
        <LinkComponent path="add" styles={style.link}>
          Подать заявку
        </LinkComponent>
      </div>
    </MainWrapper>
  );
};

export default Applications;
