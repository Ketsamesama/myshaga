import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';

import Header from 'widgets/header';

import style from './mainWrapper.module.scss';

interface IProps {
  children: React.ReactNode;
}

const MainWrapper: FC<IProps> = ({ children }) => (
  <>
    <Header />
    <div className={style.root}>{children}</div>
  </>
);

export default MainWrapper;
