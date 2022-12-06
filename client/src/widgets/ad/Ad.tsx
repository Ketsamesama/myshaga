import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { API_URL } from 'shared/api';

import { IStateAd, IAd, STATUS } from 'widgets/ad/Ad.type';

import SkeletonAd from 'widgets/ad/Skeleton';
import NoImg from 'assets/png/no_image.png';
import style from './Ad.module.scss';

const Ad = () => {
  const [ad, setAd] = useState<IStateAd>(STATUS.loading);
  const [currentImg, setCurrentImg] = useState<string>();
  const { id } = useParams();

  useEffect(() => {
    const url = `${API_URL}/ads/${id}`;
    axios
      .get<IAd>(url)
      .then((response) => {
        setAd(response.data);
        setCurrentImg(response.data.images[0]);
      })
      .catch((e) => setAd(STATUS.error));
  }, []);

  const handlerImg = (url: string) => {
    setCurrentImg(url);
  };

  if (ad === STATUS.error) {
    return <div>error</div>;
  }

  if (ad === STATUS.loading) {
    return <SkeletonAd />;
  }

  return (
    <div className={style.ad}>
      <h1 className={style.title}>{ad.title}</h1>
      <img
        src={currentImg || NoImg}
        alt="изображение объявления"
        className={style.currentImage}
      />
      <div className={style.imagesList}>
        {ad.images.map((item) => {
          return (
            <img
              src={item}
              onClick={() => handlerImg(item)}
              alt="изображение объявления"
            />
          );
        })}
      </div>
      <p className={style.text}>{ad.text}</p>
      <div className={style.contacts}>
        <span>Данные для связи</span>
        <span>Дата создания</span>
        <span>
          +8298473284234{' '}
          <span className={style.name}>({ad.user.firstName})</span>
        </span>
        <span className={style.data}>{ad.dataCreated}</span>
      </div>
    </div>
  );
};

export default Ad;
