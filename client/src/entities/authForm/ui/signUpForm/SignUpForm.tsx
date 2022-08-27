import React, { FC, useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

import { useAppDispatch, useAppSelector } from 'store/hooks';
import { getAuthenticationError, getIsLoading } from 'store/selectorFunctions';

import { registrationAction } from 'entities/authForm/model/slices/actionCreators';
import { resetError } from 'entities/authForm/model/slices/authSlice';

import { IParams } from './SignUpForm.types';
import { inputList } from './inputList';

import Button from 'shared/button';

const SignUpForm: FC<any> = ({ style }) => {
  const dispatch = useAppDispatch();

  const authenticationError = useAppSelector(getAuthenticationError);
  const isLoading = useAppSelector(getIsLoading);

  const { register, handleSubmit } = useForm<IParams>();
  const onSubmit: SubmitHandler<IParams> = (data) => {
    dispatch(registrationAction({ ...data }));
  };

  useEffect(() => {
    dispatch(resetError());
  }, []);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={style.form}>
      <div className={style.inputWrapper}>
        {inputList.map((item, i) => {
          return (
            <input
              {...register(item.register, {
                required: item.required,
              })}
              placeholder={item.placeholder}
              className={style.input}
              key={i}
              type={item.type}
            />
          );
        })}
        {authenticationError && (
          <p className={style.error}>
            Пользователь с таким email уже существует
          </p>
        )}
      </div>
      <Button disabled={isLoading}>Зарегистрироваться</Button>
    </form>
  );
};

export default SignUpForm;
