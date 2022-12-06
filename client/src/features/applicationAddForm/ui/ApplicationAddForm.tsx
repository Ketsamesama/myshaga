import React, { useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { setStatusInitial } from 'features/applicationAddForm/model/applicationSlice';
import { getStatusAppForm } from 'store/selectorFunctions';
import { fetchApplicationForm } from 'features/applicationAddForm/model/actionCreators';

import Button from 'shared/button';
import InputWrapper from 'shared/inputWrapper';

import style from './ApplicationAddForm.module.scss';
import { STATESTATUS } from 'shared/typeFetchForm';

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

  useEffect(() => {
    dispatch(setStatusInitial());
  }, []);

  const status = useAppSelector(getStatusAppForm);
  const navigate = useNavigate();

  useEffect(() => {
    if (status === STATESTATUS.sucsess) {
      dispatch(setStatusInitial());
      navigate('/applications');
    } else if (status === STATESTATUS.error) {
      navigate('/error', {
        state: { type: 'applicationAdd/setStatusInitial' },
      });
    }
  }, [status]);

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
