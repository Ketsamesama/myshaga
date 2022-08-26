import React, { useEffect, useLayoutEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useAppDispatch } from 'store/hooks';

import { checkAuthAction } from 'entities/authForm/model/slices/actionCreators';

import Main from 'pages/main';
import Login from 'pages/auth/ui/login';
import SignUp from 'pages/auth/ui/signUp';
import GuardedRoute from 'pages/auth/model/hoc/GuardedRoute';
import GuardAuthRoute from 'pages/auth/model/hoc/GuardAuthRoute';

import './index.scss';

const App = () => {
  const dispatch = useAppDispatch();
  useLayoutEffect(() => {
    if (localStorage.getItem('token')) {
      dispatch(checkAuthAction());
    }
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<GuardedRoute component={Main} />} />
        <Route path="/login" element={<GuardAuthRoute component={Login} />} />
        <Route path="/singup" element={<GuardAuthRoute component={SignUp} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
