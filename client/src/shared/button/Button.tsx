import React, { FC } from 'react';

import { IPropsButton } from './Button.types';
import style from './Button.module.scss';

const Botton: FC<IPropsButton> = ({ children, disabled }) => (
  <button disabled={disabled} className={style.btn}>
    {children}
  </button>
);

export default Botton;
