import React, { useEffect, memo } from 'react';

import LinkComponent from 'shared/link';

import { useAppDispatch, useAppSelector } from 'store/hooks';
import {
  getCurrentAdsCatigory,
  getCurrentAdsPage,
  getTotalAdsPage,
  getAds,
} from 'store/selectorFunctions';
import { fetchAds } from 'shared/adsModel/sliced/actionCreators';
import { setCurrentPage } from 'shared/adsModel/sliced/adsSlice';

import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'store/store';
import LiWrapper from 'shared/liWrapper';

import NoImg from 'assets/png/no_image.png';
import style from './Ads.module.scss';

const trimLine = (string: string) => {
  if (string.length >= 397) {
    return `${string.slice(0, 397)}...`;
  }
  return string;
};

const Ads = () => {
  const currentCategory = useAppSelector(getCurrentAdsCatigory);
  const currentPage = useAppSelector(getCurrentAdsPage);
  const totalPage = useAppSelector(getTotalAdsPage);

  const ads = useAppSelector(getAds);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAds(1, currentCategory));
  }, [currentCategory]);

  const scrollHandler = (e: any) => {
    const scrollHeight = e.target.documentElement.scrollHeight;
    const scrollTop = e.target.documentElement.scrollTop;

    if (scrollHeight - (scrollTop + window.innerHeight) < 100) {
      dispatch(setCurrentPage(1));
    }
  };

  useEffect(() => {
    document.addEventListener('scroll', scrollHandler);

    return () => {
      document.removeEventListener('scroll', scrollHandler);
    };
  }, []);

  return (
    <div className={style.ads}>
      <ul>
        {Array.isArray(ads)
          ? ads.map((item) => {
              return (
                <li>
                  <LiWrapper>
                    <div className={style.content}>
                      <img
                        src={item.images[0] ? item.images[0] : NoImg}
                        alt="ads"
                        className={style.img}
                      />
                      <div className={style.prewText}>
                        <p className={style.title}>{item.title}</p>
                        <p className={style.text}>{trimLine(item.text)}</p>
                      </div>
                    </div>
                    <LinkComponent path={`${item.id}`} styles={style.link}>
                      Подробнее
                    </LinkComponent>
                  </LiWrapper>
                </li>
              );
            })
          : ''}
      </ul>
    </div>
  );
};

export default Ads;
