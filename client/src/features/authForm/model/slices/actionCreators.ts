import { AppDispatch } from 'store/store';

import { checkAuth, login, registration } from 'features/authForm/api';
import {
  IParamsLogin,
  IParamsRegistration,
} from 'features/authForm/api/api.types';
import {
  authFetchingLoading,
  authFetchingSuccess,
  loadingCompleted,
  authFetchingError,
} from 'features/authForm/model/slices/authSlice';
import { setUser } from 'features/profileRedactor/models/sliced/profileSlice';
import { setDisabled, removeDisabled } from 'shared/button/models/buttonSliced';

const loginAction = (params: IParamsLogin) => async (dispatch: AppDispatch) => {
  try {
    dispatch(setDisabled());
    dispatch(authFetchingLoading());
    const response = await login({ ...params });

    dispatch(
      authFetchingSuccess({ ...response, rememberMe: params.rememberMe })
    );

    dispatch(setUser(response.user));
  } catch (e) {
    dispatch(authFetchingError(true));
  } finally {
    dispatch(removeDisabled());
  }
};

const registrationAction =
  (params: IParamsRegistration) => async (dispatch: AppDispatch) => {
    try {
      dispatch(setDisabled());
      dispatch(authFetchingLoading());

      const response = await registration({ ...params });

      dispatch(authFetchingSuccess({ ...response, rememberMe: true }));
      dispatch(setUser(response.user));
    } catch (e) {
      dispatch(authFetchingError(true));
    } finally {
      dispatch(removeDisabled());
    }
  };

const checkAuthAction = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(setDisabled());
    dispatch(authFetchingLoading());
    const response = await checkAuth();
    dispatch(authFetchingSuccess({ ...response, rememberMe: true }));
    dispatch(setUser(response.user));
  } catch (e) {
    dispatch(loadingCompleted());
  } finally {
    dispatch(removeDisabled());
  }
};

export { loginAction, registrationAction, checkAuthAction };
