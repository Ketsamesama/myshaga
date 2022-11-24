import React, { useEffect } from 'react';

import LinkComponent from 'shared/link';

import { useAppDispatch, useAppSelector } from 'store/hooks';
import { getCurrentCatigory } from 'store/selectorFunctions';
import { fetchAds } from 'shared/adsModel/sliced/actionCreators';

import style from './Ads.module.scss';
import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'store/store';
import LiWrapper from 'shared/liWrapper';

const trimLine = (string: string) => {
  if (string.length >= 397) {
    const newString = `${string.slice(0, 397)}...`;
    return newString;
  }

  return string;
};

const Ads = () => {
  const currentCategory = useAppSelector(getCurrentCatigory);

  const getAds = createSelector(
    (state: RootState) => state.ads.ads,
    (ads) => ads.filter((ads) => ads.category === currentCategory)
  );

  const ads = useAppSelector(getAds);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAds());
  }, []);

  return (
    <div className={style.ads}>
      <ul>
        {ads.map((item) => {
          return (
            <li>
              <LiWrapper>
                <img src={item.images[0]} alt="ads" className={style.img} />
                <div className={style.prewText}>
                  <p className={style.title}>{item.title}</p>
                  <p className={style.text}>{trimLine(item.text)}</p>
                </div>
                <LinkComponent path={`${item.id}`} styles={style.link}>
                  Подробнее
                </LinkComponent>
              </LiWrapper>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Ads;
