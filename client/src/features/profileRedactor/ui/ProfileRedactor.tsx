import React, { useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { setFormDataSaved } from 'features/profileRedactor/models/sliced/profileSlice';

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { postForm } from 'features/profileRedactor/models/sliced/actionCreators';
import { getUser } from 'store/selectorFunctions';

import { inputList } from 'features/profileRedactor/ui/ProfileFormConsts';
import InputWrapper from 'shared/inputWrapper';
import Button from 'shared/button';

import { IFormType } from './index.type';

import classNames from 'classnames';
import style from './ProfileRedactor.module.scss';

const ProfileRedactor = () => {
  const user = useAppSelector(getUser)!;
  const formDataSaved = useAppSelector((state) => state.profile.formDataSaved);

  const formSchema = yup.object().shape({
    password: yup
      .string()
      .required('это обязательное поле')
      .oneOf([yup.ref('confirmPassword')], 'Пароли не совпадают'),
    confirmPassword: yup
      .string()
      .required('это обязательное поле')
      .oneOf([yup.ref('password')], 'Пароли не совпадают'),
  });

  const formOptions = { resolver: yupResolver(formSchema) };

  const {
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm<IFormType>(formOptions);

  useEffect(() => {
    inputList.forEach((item, i) => {
      item.name === 'LFP'
        ? setValue(item.name, `${user?.firstName} ${user?.lastName}`)
        : setValue(item.name, user ? user[item.name] : '');
    });
  }, []);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setFormDataSaved(false));
  }, []);

  const onSubmitForm = (data: IFormType) => {
    dispatch(postForm(data));
  };

  const dataSavedClass = classNames(style.dataSaved, {
    hidden: !formDataSaved,
  });

  return (
    <div className={style.root}>
      <form onSubmit={handleSubmit(onSubmitForm)}>
        {inputList.map((item) => {
          if (item.name === 'password' || item.name === 'confirmPassword') {
            return (
              <Controller
                rules={{ required: true }}
                control={control}
                name={item.name}
                render={({ field }) => (
                  <InputWrapper
                    field={field}
                    errors={errors}
                    element={'input'}
                    title={item.title}
                    styles={style.input}
                    type={item.type}
                  />
                )}
              />
            );
          }
          return (
            <Controller
              rules={{ required: true }}
              control={control}
              name={item.name}
              render={({ field }) => (
                <InputWrapper
                  field={field}
                  element={'input'}
                  title={item.title}
                  styles={style.input}
                  type={item.type}
                />
              )}
            />
          );
        })}

        <p className={dataSavedClass}>Данные сохранены</p>

        <Button styles={style.btn}>Сохранить изменения</Button>
      </form>
    </div>
  );
};

export default ProfileRedactor;
