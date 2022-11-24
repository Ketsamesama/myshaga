import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAppSelector } from 'store/hooks';
import { getIsAuth } from 'store/selectorFunctions';
import { IParams } from './guard.types';

interface ILocationState {
  path: string;
}

const GuardAuthRoute = ({ component: Component }: IParams) => {
  const isAuth = useAppSelector(getIsAuth);
  const navigate = useNavigate();
  const location = useLocation<ILocationState>();

  const path = location?.state?.path || '/';

  useEffect(() => {
    if (isAuth) {
      navigate(path, { replace: true });
    }
  }, [isAuth]);
  return <Component />;
};

export default GuardAuthRoute;
