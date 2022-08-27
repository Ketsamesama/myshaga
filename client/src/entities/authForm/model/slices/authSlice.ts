import { createSlice } from '@reduxjs/toolkit';

import type { PayloadAction } from '@reduxjs/toolkit';
import type { IActionAuth, IState } from './authSlice.types';

const initialState: IState = {
  isAuth: false,
  isLoading: false,
  authenticationError: false,
  user: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    authFetching(state: IState) {
      state.isLoading = true;
    },
    authFetchingSuccess(state: IState, action: PayloadAction<IActionAuth>) {
      state.isLoading = false;
      if (action.payload.rememberMe) {
        localStorage.setItem('token', action.payload.accessToken);
      }
      state.isAuth = true;
      state.authenticationError = false;
    },
    authFetchingError(state: IState, action: PayloadAction<boolean>) {
      state.isLoading = false;
      state.authenticationError = action.payload;
    },
    resetError(state: IState) {
      state.authenticationError = false;
    },
    loadingCompleted(state: IState) {
      state.isLoading = false;
    },
  },
});

export const {
  authFetching,
  authFetchingSuccess,
  authFetchingError,
  resetError,
  loadingCompleted,
} = authSlice.actions;
export default authSlice.reducer;
