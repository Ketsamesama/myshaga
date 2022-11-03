import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { IPropsLink } from './types';

import style from './Link.module.scss';

const LinkComponent: FC<IPropsLink> = ({ path, styles, children }) => {
  return (
    <div className={`${style.root} ${styles}`}>
      <Link to={path}>{children}</Link>
    </div>
  );
};

export default LinkComponent;
