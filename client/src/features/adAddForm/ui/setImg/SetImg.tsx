import React, { FC, useState } from 'react';
import classNames from 'classnames';
import { updatePrewImg } from 'features/adAddForm/models/utils';

import { IProps } from 'features/adAddForm/ui/setImg/SetImg.types';

import NullImg from 'assets/png/BlackImg.png';
import style from './SetImg.module.scss';

const SetImg: FC<IProps> = ({ styles, prewImg, setPrewImg }) => {
  const [toggleDrop, setToggleDrop] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let images = updatePrewImg({ filesImg: e.currentTarget.files, prewImg });
    setPrewImg(images);
  };

  const handlerDragStart = (e: React.DragEvent<HTMLElement>) => {
    e.preventDefault();
    setToggleDrop(true);
  };

  const handlerDragLeave = (e: React.DragEvent<HTMLElement>) => {
    e.preventDefault();
    setToggleDrop(false);
  };

  const handlerDragOver = (e: React.DragEvent<HTMLElement>) => {
    e.preventDefault();
  };

  const handlerOnDrop = (e: React.DragEvent<HTMLElement>) => {
    e.preventDefault();
    setToggleDrop(false);

    let images = updatePrewImg({ filesImg: e.dataTransfer.files, prewImg });
    setPrewImg(images);
  };

  const lableClass = classNames(style.inputFile, {
    [style.drop]: toggleDrop,
  });

  return (
    <div className={style.root}>
      <p className={styles}>Фотографии</p>
      <div>
        {prewImg.map((item) => {
          return (
            <img
              src={item?.path || NullImg}
              alt="предпоказ загруженных изображений"
              className={style.img}
            />
          );
        })}
      </div>
      <label className={lableClass}>
        <input
          type="file"
          name="file"
          multiple
          accept=".png, .jpg, .jpeg"
          onChange={handleChange}
        />
        <span
          onDragStart={handlerDragStart}
          onDragLeave={handlerDragLeave}
          onDragOver={handlerDragOver}
          onDrop={handlerOnDrop}
        >
          Перетащите или нажмите на меня
        </span>
      </label>
    </div>
  );
};

export default SetImg;
