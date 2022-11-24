import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useAppDispatch, useAppSelector } from 'store/hooks';

import { fetchApplicationForm } from 'features/applicationAddForm/model/actionCreators';
import Button from 'shared/button';
import InputWrapper from 'shared/inputWrapper';

import style from './ApplicationAddForm.module.scss';

interface IFormType {
  title: string;
  text: string;
}

const ApplicationAddForm = () => {
  const { handleSubmit, control } = useForm<IFormType>();
  const dispatch = useAppDispatch();

  const onSubmitForm = (data: IFormType) => {
    dispatch(fetchApplicationForm(data));
  };

  return (
    <form className={style.root} onSubmit={handleSubmit(onSubmitForm)}>
      <Controller
        rules={{ required: true }}
        control={control}
        name="title"
        render={({ field }) => (
          <InputWrapper
            title="Заголовок петиции"
            field={field}
            type="text"
            element="input"
            styles={style.input}
          />
        )}
      />

      <Controller
        rules={{ required: true }}
        control={control}
        name="text"
        render={({ field }) => (
          <InputWrapper
            title="Описание петиции"
            field={field}
            type="text"
            element="textarea"
            styles={style.input}
          />
        )}
      />

      <Button styles={style.btn}>Подать</Button>
    </form>
  );
};

export default ApplicationAddForm;
