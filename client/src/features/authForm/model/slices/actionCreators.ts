import { AppDispatch } from 'store/store';
import {
  authFetchingSuccess,
  authFetchingError,
  loadingCompleted,
  authFetchingLoading,
} from 'features/authForm/model/slices/authSlice';

import { checkAuth, login, registration } from 'features/authForm/api';
import {
  IParamsLogin,
  IParamsRegistration,
} from 'features/authForm/api/api.types';
import { setDisabled, removeDisabled } from 'shared/button/models/buttonSliced';
import { setUser } from 'features/profileRedactor/models/sliced/profileSlice';

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
