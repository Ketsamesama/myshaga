import React, { FC, useState } from 'react';
import { useAppSelector } from 'store/hooks';
import { IApps } from 'widgets/applications/Applications.type';
import { putResult } from 'features/applicationsVoting/api';

import style from './ApplicationsVoting.module.scss';

interface IProps {
  app: IApps;
}

const ApplicationsVoting: FC<IProps> = ({ app }) => {
  const user = useAppSelector((state) => state.profile.user)!;
  const [result, setResult] = useState<number>(+app.numberSignatures);

  const handlerButton = (result: 1 | -1) => {
    putResult({
      useId: user.id,
      result: result,
      appId: app.id,
    }).then((response) => {
      setResult(response.data);
    });
  };

  return (
    <div className={style.root}>
      <span>{result}</span>
      <button className={style.plus} onClick={() => handlerButton(1)}>
        <span>+</span>
      </button>
      <button className={style.minus} onClick={() => handlerButton(-1)}>
        <span>-</span>
      </button>
    </div>
  );
};

export default ApplicationsVoting;
