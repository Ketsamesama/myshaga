import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'store/hooks';

import { getIsLoading } from 'store/selectorFunctions';
import { resetError } from 'features/authForm/model/slices/authSlice';
import { checkAuthAction } from 'features/authForm/model/slices/actionCreators';

import Login from 'pages/auth/ui/login';
import SignUp from 'pages/auth/ui/signUp';
import AdAdd from 'pages/adAdd';
import AdsPage from 'pages/adsPage';
import AdPage from 'pages/adPage';
import Main from 'pages/main/';
import Profile from 'pages/profile';
import ApplicationsPage from 'pages/applicationsPage';
import ApplicationAdd from 'pages/applicationAdd';
import InDevelop from 'pages/errorPage/inDevelop';
import ErrorPage from 'pages/errorPage/error';

import GuardedRoute from 'processes/HocAuth/GuardedRoute';
import GuardAuthRoute from 'processes/HocAuth/GuardAuthRoute';
import Preloader from 'shared/preloader/Preloader';

import './index.scss';

const App = () => {
  const isLoading = useAppSelector(getIsLoading);

  const dispatch = useAppDispatch();

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
        <Route path="ads" element={<GuardedRoute component={AdsPage} />} />
        <Route path="ads/:id" element={<GuardedRoute component={AdPage} />} />
        <Route path="ads/add" element={<GuardedRoute component={AdAdd} />} />

        <Route
          path="applications"
          element={<GuardedRoute component={ApplicationsPage} />}
        />
        <Route
          path="applications/add"
          element={<GuardedRoute component={ApplicationAdd} />}
        />

        <Route path="/" element={<GuardedRoute component={Main} />} />
        <Route path="profile" element={<GuardedRoute component={Profile} />} />

        <Route path="login" element={<GuardAuthRoute component={Login} />} />
        <Route path="singup" element={<GuardAuthRoute component={SignUp} />} />
        <Route path="error" element={<ErrorPage />} />
        <Route path="*" element={<InDevelop />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
