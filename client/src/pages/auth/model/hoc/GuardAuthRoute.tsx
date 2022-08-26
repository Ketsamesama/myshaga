import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from 'store/hooks';
import { IParams } from './guard.types';

const GuardAuthRoute = ({ component: Component }: IParams) => {
  const isAuth = useAppSelector((state) => state.auth.isAuth);
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuth) {
      navigate('/', { replace: true });
    }
  }, []);
  return <Component />;
};

export default GuardAuthRoute;
