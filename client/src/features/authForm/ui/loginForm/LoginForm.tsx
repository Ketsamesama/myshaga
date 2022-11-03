import React, { FC, useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

import { useAppDispatch, useAppSelector } from 'store/hooks';
import { loginAction } from 'features/authForm/model/slices/actionCreators';
import { getAuthenticationError, getIsLoading } from 'store/selectorFunctions';

import { IParams } from './LoginForm.types';
import { inputList } from './inputList';

import Button from 'shared/button';

const LoginForm: FC<any> = ({ style }) => {
  const { register, handleSubmit } = useForm<IParams>();
  const dispatch = useAppDispatch();

  const authenticationError = useAppSelector(getAuthenticationError);
  const isLoading = useAppSelector(getIsLoading);

  const onSubmit: SubmitHandler<IParams> = (data) => {
    dispatch(loginAction({ ...data }));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={style.form}>
      <div className={style.inputWrapper}>
        {inputList.map((item, i) => {
          return (
            <input
              {...register(item.register, {
                required: true,
              })}
              className={style.input}
              placeholder={item.placeholder}
              type={item.register}
              key={i}
            />
          );
        })}
        {authenticationError && (
          <p className={style.error}>неверный логин или пароль</p>
        )}
      </div>
      <div className={style.chekboxWrapper}>
        <label>
          <input
            type="checkbox"
            className={style.chekbox}
            {...register('rememberMe', {})}
          />
          <span className={style.fake} />
          <p className={style.description}>Запомнить меня</p>
        </label>
        <a>Забыли пароль?</a>
      </div>

      <Button disabled={isLoading}>ВОЙТИ</Button>
    </form>
  );
};

export default LoginForm;
