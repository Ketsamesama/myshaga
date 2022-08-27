import { AppDispatch } from 'store/store';
import {
  authFetching,
  authFetchingSuccess,
  authFetchingError,
  loadingCompleted,
} from 'entities/authForm/model/slices/authSlice';

import { checkAuth, login, registration } from 'entities/authForm/api';
import {
  IParamsLogin,
  IParamsRegistration,
} from 'entities/authForm/api/api.types';

const loginAction = (params: IParamsLogin) => async (dispatch: AppDispatch) => {
  try {
    dispatch(authFetching());
    const response = await login({ ...params });
    dispatch(
      authFetchingSuccess({ ...response, rememberMe: params.rememberMe })
    );
  } catch (e) {
    dispatch(authFetchingError(true));
  }
};

const registrationAction =
  (params: IParamsRegistration) => async (dispatch: AppDispatch) => {
    try {
      dispatch(authFetching());
      const response = await registration({ ...params });
      dispatch(authFetchingSuccess({ ...response, rememberMe: true }));
    } catch (e) {
      console.log(e);
      dispatch(authFetchingError(true));
    }
  };

const checkAuthAction = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(authFetching());
    const response = await checkAuth();
    dispatch(authFetchingSuccess({ ...response, rememberMe: true }));
  } catch (e) {
    dispatch(loadingCompleted());
  }
};

export { loginAction, registrationAction, checkAuthAction };
