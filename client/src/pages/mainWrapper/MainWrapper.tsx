import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Header from 'widgets/header';
import Ads from 'pages/ads';
import Main from 'pages/main/';

import style from './mainWrapper.module.scss';

const MainWrapper = () => (
  <>
    <Header />
    <div className={style.root}>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/ads" element={<Ads />} />
      </Routes>
    </div>
  </>
);

export default MainWrapper;
