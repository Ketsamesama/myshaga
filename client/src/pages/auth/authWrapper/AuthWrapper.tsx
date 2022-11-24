import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import { IPropsAuthWrapper } from './AuthWrapper.types';

import AuthImg from 'widgets/login/authImg';
import Footer from 'widgets/login/footer';

import style from './AuthWrapper.module.scss';

const AuthWrapper: FC<IPropsAuthWrapper> = ({
  children,
  footerContents,
  footerLink,
}) => (
  <div className={style.authContainer}>
    <div className={style.authWrapper}>
      <div className={style.authForm}>{children}</div>
      <Footer>
        <p>
          <Link to={footerLink}>{footerContents}</Link>
        </p>
      </Footer>
    </div>
    <AuthImg />
  </div>
);

export default AuthWrapper;
