import React, { useState } from 'react';
import LinkComponent from 'shared/link';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { navEmelent, СURRENTСATEGORY } from './consts';
import { setAds, setCurrentCategory } from 'shared/adsModel/sliced/adsSlice';

import style from './AdsNav.module.scss';

const AdsNav = () => {
  const currentCategory = useAppSelector((state) => state.ads.currentCatigory);
  const dispatch = useAppDispatch();

  const selectCategory = (category: СURRENTСATEGORY) => {
    dispatch(setCurrentCategory(category));
  };

  return (
    <div className={style.nav}>
      <ul>
        {navEmelent.map((item) => {
          return (
            <li key={item.title}>
              <button
                onClick={() => selectCategory(item.category)}
                className={
                  item.category === currentCategory ? style.active : ''
                }
              >
                {item.title}
              </button>
            </li>
          );
        })}
      </ul>
      <LinkComponent path="add" styles={style.link}>
        Подать объявление
      </LinkComponent>
    </div>
  );
};

export default AdsNav;
