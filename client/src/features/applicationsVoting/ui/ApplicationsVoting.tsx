import React, { FC, useEffect, useState } from 'react';
import { useAppSelector } from 'store/hooks';
import { IApps, IStateApp } from 'widgets/applications/Applications.type';
import { putResult } from 'features/applicationsVoting/api';

import style from './ApplicationsVoting.module.scss';

interface IProps {
  app: IApps;
  setApps: React.Dispatch<React.SetStateAction<IStateApp>>;
}

const ApplicationsVoting: FC<IProps> = ({ app, setApps }) => {
  const user = useAppSelector((state) => state.profile.user)!;

  const handlerButton = (result: '+' | '-') => {
    putResult({
      useId: user.id,
      result: String(result),
      appId: app.id,
    })
      .then((response) => console.log(response))
      .catch((e) => console.log(e))
      .finally(() => console.log(12124124));
  };

  return (
    <div className={style.root}>
      <span>{app.numberSignatures}</span>
      <button className={style.plus} onClick={() => handlerButton('+')}>
        <span>+</span>
      </button>
      <button className={style.minus} onClick={() => handlerButton('-')}>
        <span>-</span>
      </button>
    </div>
  );
};

export default ApplicationsVoting;
