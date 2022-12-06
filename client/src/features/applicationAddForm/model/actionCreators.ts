import { fetchApplicationFormApi } from 'features/applicationAddForm/api';
import { putResult } from 'features/applicationsVoting/api';
import { removeDisabled, setDisabled } from 'shared/button/models/buttonSliced';
import { AppDispatch } from 'store/store';
import {
  setStatusSucsess,
  setStatusLoading,
  setStatusError,
} from './applicationSlice';

interface IParams {
  title: string;
  text: string;
}

const fetchApplicationForm =
  ({ title, text }: IParams) =>
  async (dispatch: AppDispatch) => {
    try {
      dispatch(setDisabled());
      dispatch(setStatusLoading());
      const response = await fetchApplicationFormApi({ title, text });
      dispatch(setStatusSucsess());
    } catch (err) {
      dispatch(setStatusError());
    } finally {
      dispatch(removeDisabled());
    }
  };

const chendgeAppResult =
  (useId: string, result: string, appId: string) =>
  async (dispatch: AppDispatch) => {
    const response = await putResult({ useId, result, appId });
    

  };

export { fetchApplicationForm, chendgeAppResult };
