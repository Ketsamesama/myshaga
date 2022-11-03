import React, { useEffect } from 'react';

import { useNavigate } from 'react-router-dom';
import { useAppSelector } from 'store/hooks';
import { getIsAuth } from 'store/selectorFunctions';

import AuthWrapper from 'pages/auth/ui/authWrapper';
import AuthTitle from 'widgets/login/authTitle/AuthTitle';
import SignUpForm from 'features/authForm/ui/signUpForm';

import style from 'pages/auth/ui/LoginForm.module.scss';

const SingUp = () => {
  const isAuth = useAppSelector(getIsAuth);
  const navigate = useNavigate();
  useEffect(() => {
    if (isAuth) {
      navigate('/');
    }
  }, [isAuth]);

  return (
    <AuthWrapper footerContents="Уже зарегистрированы?" footerLink="/login">
      <AuthTitle>Регистрация</AuthTitle>
      <SignUpForm style={style} />
    </AuthWrapper>
  );
};

export default SingUp;
