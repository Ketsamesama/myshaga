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
      navigate('/login', { replace: true });
    } else if (
      isAuth &&
      location.pathname !== '/login' &&
      location.pathname !== '/singup'
    ) {
      navigate(location.pathname);
    }
  }, []);
  return <Component />;
};

export default GuardedRoute;
