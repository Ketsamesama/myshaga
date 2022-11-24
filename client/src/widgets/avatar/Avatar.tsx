import React, { useState } from 'react';

import { useAppDispatch, useAppSelector } from 'store/hooks';
import { getUserAvatar } from 'store/selectorFunctions';

import noavatar from 'assets/png/noavatar.png';
import style from './Avatar.module.scss';
import { postAvatar } from 'features/profileRedactor/models/sliced/actionCreators';

const Avatar = () => {
  const userAvatar = useAppSelector(getUserAvatar) || noavatar;

  const dispatch = useAppDispatch();

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget.files) {
      dispatch(postAvatar(e.currentTarget.files[0]));
    }
  };

  return (
    <div className={style.avatar}>
      <img src={userAvatar} alt="avatar" />

      <label className={style.inputFile}>
        <input
          type="file"
          name="file"
          accept=".png, .jpg, .jpeg"
          onChange={handleInput}
        />
        <span>Загрузить аватар</span>
      </label>
    </div>
  );
};

export default Avatar;
