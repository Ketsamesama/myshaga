import React, { FC } from 'react';

import { IPropsFooter } from './Footer.types';
import style from './Footer.module.scss';

const Footer: FC<IPropsFooter> = ({ children }) => (
  <footer className={style.footer}>{children}</footer>
);

export default Footer;
