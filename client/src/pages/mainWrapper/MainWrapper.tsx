import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Header from 'widgets/header';
import { Outlet } from 'react-router-dom'

import style from './mainWrapper.module.scss';

const MainWrapper = () => (
  <>
    <Header />
    <div className={style.root}>
     <Outlet />
    </div>
  </>
);

export default MainWrapper;
