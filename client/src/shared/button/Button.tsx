import React, { FC, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'store/hooks';

import { IPropsButton } from './Button.types';
import style from './Button.module.scss';
import { removeDisabled } from 'shared/button/models/buttonSliced';

const Button: FC<IPropsButton> = ({ children, styles }) => {
  const disabled = useAppSelector((state) => state.button.disabled);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(removeDisabled());
  }, []);

  if (disabled) {
    return (
      <button disabled className={`${style.btn} ${styles}`}>
        {children}
      </button>
    );
  }

  return <button className={`${style.btn} ${styles}`}>{children}</button>;
};

export default Button;
