import React from 'react';
import LinkComponent from 'shared/link';

import style from './Ads.module.scss';

const Ads = () => {
  return (
    <div>
      Ads
      <LinkComponent path="add" styles={style.link}>
        Подать объявление
      </LinkComponent>
    </div>
  );
};

export default Ads;
