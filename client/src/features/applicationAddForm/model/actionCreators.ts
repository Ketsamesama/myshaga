import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchApplicationFormApi } from 'features/applicationAddForm/api';
import { removeDisabled, setDisabled } from 'shared/button/models/buttonSliced';
import { useAppDispatch } from 'store/hooks';

interface IParams {
  title: string;
  text: string;
}

const fetchApplicationForm = createAsyncThunk(
  'addAd/fetchForm',
  async ({ title, text }: IParams) => {
    const dispatch = useAppDispatch();
    dispatch(setDisabled());
    const response = await fetchApplicationFormApi({ title, text });
    dispatch(removeDisabled());
    return response;
  }
);

export { fetchApplicationForm };
