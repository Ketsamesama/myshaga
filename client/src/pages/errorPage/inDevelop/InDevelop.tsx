import React from 'react';

import LinkComponent from 'shared/link';
import DevelopImg from 'assets/png/developImg.png';
import style from './InDevelop.module.scss';

const InDevelop = () => {
  return (
    <div className={style.root}>
      <LinkComponent styles={style.link} path="/">
        раздел находится в разработке
      </LinkComponent>

      <img src={DevelopImg} />
    </div>
  );
};

export default InDevelop;
