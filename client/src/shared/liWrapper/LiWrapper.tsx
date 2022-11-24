import React, { FC } from 'react';
import style from './LiWrapper.module.scss';

interface IProps {
  children: React.ReactNode;
}

const LiWrapper: FC<IProps> = ({ children }) => {
  return <div className={style.root}>{children}</div>;
};

export default LiWrapper;
