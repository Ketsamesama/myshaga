import React, { FC, memo } from 'react';
import style from './LiWrapper.module.scss';

interface IProps {
  children: React.ReactNode;
}

const LiWrapper = memo(({ children }: IProps) => {
  return <div className={style.root}>{children}</div>;
});

export default LiWrapper;
