import React, { useState, useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useAppSelector, useAppDispatch } from 'store/hooks';
import { fetchAdForm } from 'features/adAddForm/models/slises/actionCreators';
import { setStatusInitial } from 'features/applicationAddForm/model/applicationSlice';
import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from '@mui/material';

import SetImg from 'features/adAddForm/ui/setImg';
import Button from 'shared/button';

import { IFormType, Img, IParamsSubmitForm, IPrewImg } from './AddAdform.types';

import { STATESTATUS } from 'shared/typeFetchForm';
import { useNavigate } from 'react-router-dom';

import InputWrapper from 'shared/inputWrapper';
import { getStatusAdForm } from 'store/selectorFunctions';

import style from './AddAdForm.module.scss';

const AddAdForm = () => {
  const { handleSubmit, control } = useForm<IFormType>();

  const dispatch = useAppDispatch();

  const [prewImg, setPrewImg] = useState<IPrewImg>([null, null, null, null]);

  const status = useAppSelector(getStatusAdForm);
  const navigate = useNavigate();

  useEffect(() => {
    if (status === STATESTATUS.sucsess) {
      dispatch(setStatusInitial());
      navigate('/ads');
    } else if (status === STATESTATUS.error) {
      navigate('/error', {
        state: { type: 'adsAd/setStatusInitial' },
      });
    }
  }, [status]);

  const sumbitForm = ({ data, prewImg }: IParamsSubmitForm) => {
    const { title, text, radio } = data;
    const images = prewImg
      .filter((item): item is Img => item !== null)
      .map((img) => img.file);
    dispatch(fetchAdForm({ images, title, text, category: radio }));
  };

  return (
    <form
      onSubmit={handleSubmit((data) => sumbitForm({ data, prewImg }))}
      className={style.root}
    >
      <Controller
        rules={{ required: true }}
        control={control}
        name="title"
        render={({ field }) => (
          <InputWrapper
            field={field}
            type="text"
            element={'input'}
            title="Заголовок объявления"
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
            field={field}
            type="text"
            element={'textarea'}
            title="Описание объявления"
            styles={style.input}
          />
        )}
      />

      <SetImg styles={style.title} prewImg={prewImg} setPrewImg={setPrewImg} />
      <Controller
        rules={{ required: true }}
        control={control}
        name="radio"
        render={({ field }) => (
          <FormControl fullWidth style={{ marginTop: '16px' }}>
            <RadioGroup
              {...field}
              row
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              name="radio-buttons-group"
              style={{ justifyContent: 'space-around' }}
            >
              <FormControlLabel
                value="found"
                control={<Radio />}
                label="нашел"
              />
              <FormControlLabel
                value="exchange"
                control={<Radio />}
                label="обмен"
              />
              <FormControlLabel value="seek" control={<Radio />} label="ищу" />
            </RadioGroup>
          </FormControl>
        )}
      />

      <Button styles={style.btn}>Опубликовать</Button>
    </form>
  );
};

export default AddAdForm;
