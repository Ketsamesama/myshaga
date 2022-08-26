import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from 'store/hooks';
import { IParams } from './guard.types';

const GuardedRoute = ({ component: Component }: IParams) => {
  const isAuth = useAppSelector((state) => state.auth.isAuth);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuth) {
      navigate('/login', { replace: true });
    }
  }, []);
  return <Component />;
};

export default GuardedRoute;
