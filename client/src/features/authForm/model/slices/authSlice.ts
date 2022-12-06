import { createSlice } from '@reduxjs/toolkit';

import type { PayloadAction } from '@reduxjs/toolkit';
import type { IActionAuth, IState } from './authSlice.types';

const initialState: IState = {
  isAuth: false,
  isLoading: false,
  authError: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    authFetchingLoading(state: IState) {
      state.isLoading = true;
    },
    authFetchingSuccess(state: IState, action: PayloadAction<IActionAuth>) {
      state.isLoading = false;
      if (action.payload.rememberMe) {
        localStorage.setItem('token', action.payload.accessToken);
      } else {
        sessionStorage.setItem('token', action.payload.accessToken);
      }
      state.isAuth = true;
      state.authError = false;
    },
    authFetchingError(state: IState, action: PayloadAction<boolean>) {
      state.isLoading = false;
      state.authError = action.payload;
    },
    resetError(state: IState) {
      state.authError = false;
    },
    loadingCompleted(state: IState) {
      state.isLoading = false;
    },
  },
});

export const {
  authFetchingLoading,
  authFetchingSuccess,
  authFetchingError,
  resetError,
  loadingCompleted,
} = authSlice.actions;
export default authSlice.reducer;
