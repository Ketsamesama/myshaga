import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'store/hooks';

import { checkAuthAction } from 'features/authForm/model/slices/actionCreators';
import {
  authFetching,
  loadingCompleted,
  resetError,
} from 'features/authForm/model/slices/authSlice';
import { getIsLoading } from 'store/selectorFunctions';

import MainWrapper from 'pages/mainWrapper';
import Login from 'pages/auth/ui/login';
import SignUp from 'pages/auth/ui/signUp';
import Ads from 'pages/ads';
import Main from 'pages/main/';
import AddAd from 'pages/addAd';

import GuardedRoute from 'pages/auth/model/hoc/GuardedRoute';
import GuardAuthRoute from 'pages/auth/model/hoc/GuardAuthRoute';
import Preloader from 'shared/preloader/Preloader';

import './index.scss';

const App = () => {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(getIsLoading);

  useEffect(() => {
    dispatch(resetError());

    if (localStorage.getItem('token') || sessionStorage.getItem('token')) {
      dispatch(checkAuthAction());
    }
  }, []);

  if (isLoading) {
    return <Preloader />;
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<GuardedRoute component={MainWrapper} />}>
          <Route index element={<Main />} />
          <Route path="ads" element={<Ads />} />
          <Route path="ads/add" element={<AddAd />} />
        </Route>
        <Route path="/login" element={<GuardAuthRoute component={Login} />} />
        <Route path="/singup" element={<GuardAuthRoute component={SignUp} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
