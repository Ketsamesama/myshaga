import React, { FC } from 'react';

import { IPropsAuthTitle } from './AuthTitle.types';
import style from './AuthTitle.module.scss';

const AuthTitle: FC<IPropsAuthTitle> = ({ children }) => (
  <h1 className={style.authTitle}>{children}</h1>
);

export default AuthTitle;
