import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAppSelector } from 'store/hooks';
import { getIsAuth } from 'store/selectorFunctions';
import { IParams } from './guard.types';

const GuardedRoute = ({ component: Component }: IParams) => {
  const isAuth = useAppSelector(getIsAuth);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!isAuth) {
      navigate('/login', { replace: true, state: { path: location.pathname } });
    }
  }, [isAuth]);
  return <Component />;
};

export default GuardedRoute;
