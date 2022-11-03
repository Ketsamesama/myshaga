import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from 'store/hooks';
import { getIsAuth } from 'store/selectorFunctions';
import { IParams } from './guard.types';

const GuardAuthRoute = ({ component: Component }: IParams) => {
  const isAuth = useAppSelector(getIsAuth);
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuth) {
      navigate('/', { replace: true });
    }
  }, [isAuth]);
  return <Component />;
};

export default GuardAuthRoute;
