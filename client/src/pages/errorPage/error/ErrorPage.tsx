import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAppDispatch } from 'store/hooks';

import ErrorImg from 'assets/svg/Error.svg';
import style from './ErrorPage.module.scss';

interface ILocationState {
  setStateInitial: any;
}

const ErrorPage = () => {
  const dispatch = useAppDispatch();
  const location = useLocation<ILocationState>();
  const type = location?.state?.type;
  dispatch({ type });

  return (
    <div className={style.root}>
      <Link to="/">
        <img src={ErrorImg} alt="error" />
      </Link>
    </div>
  );
};

export default ErrorPage;
