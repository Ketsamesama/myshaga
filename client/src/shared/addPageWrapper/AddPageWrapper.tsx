import React, { FC } from 'react';
import MainWrapper from 'shared/mainWrapper';

import style from './AddPageWrapper.module.scss';

interface IProps {
  title: string;
  children: React.ReactNode;
}

const AddPageWrapper: FC<IProps> = ({ title, children }) => {
  return (
    <MainWrapper>
      <div className={style.root}>
        <h1 className={style.title}>{title}</h1>
        {children}
      </div>
    </MainWrapper>
  );
};

export default AddPageWrapper;
