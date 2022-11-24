import { createAsyncThunk } from '@reduxjs/toolkit';
import { postAdFormApi } from 'features/adAddForm/api';
import { IParamsThunk } from 'features/adAddForm/models/slises/adAdSlice.types';
import { removeDisabled, setDisabled } from 'shared/button/models/buttonSliced';
import { useAppDispatch } from 'store/hooks';
import { AppDispatch } from 'store/store';

import { setStatusSucsess, setStatusError } from './adAddSlice';

const fetchAdForm =
  ({ title, text, images, category }: IParamsThunk) =>
  async (dispatch: AppDispatch) => {
    try {
      dispatch(setDisabled());

      const formData = new FormData();
      formData.append('title', title);
      formData.append('text', text);
      formData.append('category', category);

      images.forEach((item) => formData.append('files', item));

      const response = await postAdFormApi(formData);

      dispatch(setStatusSucsess());
    } catch (e) {
      dispatch(setStatusError());
    }
  };

export { fetchAdForm };
