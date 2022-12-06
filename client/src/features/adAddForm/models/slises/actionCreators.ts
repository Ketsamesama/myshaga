import { postAdFormApi } from 'features/adAddForm/api';
import { IParamsThunk } from 'features/adAddForm/models/slises/adAdSlice.types';
import {
  setStatusSucsess,
  setStatusError,
} from 'features/adAddForm/models/slises/adAddSlice';
import { setDisabled, removeDisabled } from 'shared/button/models/buttonSliced';

import { AppDispatch } from 'store/store';

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
    } finally {
      dispatch(removeDisabled());
    }
  };

export { fetchAdForm };
