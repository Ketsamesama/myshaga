import React, { useEffect } from 'react';
import MainWrapper from 'shared/mainWrapper';
import LinkComponent from 'shared/link';
import Applications from 'widgets/applications/Applications';

import style from './ApplicationsPage.module.scss';

const ApplicationsPage = () => {
  return (
    <MainWrapper>
      <div className={style.nav}>
        <LinkComponent path="add" styles={style.link}>
          Подать заявку
        </LinkComponent>
      </div>
      <Applications />
    </MainWrapper>
  );
};

export default ApplicationsPage;
