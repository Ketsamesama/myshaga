import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'store/hooks';

import { checkAuthAction } from 'entities/authForm/model/slices/actionCreators';
import {
  authFetching,
  loadingCompleted,
} from 'entities/authForm/model/slices/authSlice';
import { getIsLoading } from 'store/selectorFunctions';

import MainWrapper from 'pages/mainWrapper';
import Login from 'pages/auth/ui/login';
import SignUp from 'pages/auth/ui/signUp';
import GuardedRoute from 'pages/auth/model/hoc/GuardedRoute';
import GuardAuthRoute from 'pages/auth/model/hoc/GuardAuthRoute';
import Preloader from 'shared/preloader/Preloader';
import './index.scss';

const App = () => {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(getIsLoading);

  useEffect(() => {
    if (localStorage.getItem('token')) {
      dispatch(checkAuthAction());
    }
  }, []);

  if (isLoading) {
    return <Preloader />;
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<GuardedRoute component={MainWrapper} />} />
        <Route path="/login" element={<GuardAuthRoute component={Login} />} />
        <Route path="/singup" element={<GuardAuthRoute component={SignUp} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
