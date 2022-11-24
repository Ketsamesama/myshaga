import React, { useEffect } from 'react';

import { useNavigate } from 'react-router-dom';
import { useAppSelector } from 'store/hooks';
import { getIsAuth } from 'store/selectorFunctions';

import AuthWrapper from 'pages/auth/ui/authWrapper';
import AuthTitle from 'widgets/login/authTitle/AuthTitle';
import LoginForm from 'features/authForm/ui/loginForm';

import style from 'pages/auth/ui/LoginForm.module.scss';

const Auth = () => {
  const isAuth = useAppSelector(getIsAuth);
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuth) {
      navigate('/');
    }
  }, [isAuth]);

  return (
    <AuthWrapper
      footerContents="Авторизация доступна только по специальным приглошениям"
      footerLink="/singup"
    >
      <AuthTitle>Авторизация</AuthTitle>
      <LoginForm style={style} />
    </AuthWrapper>
  );
};

export default Auth;
