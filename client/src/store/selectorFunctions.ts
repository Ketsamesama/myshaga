import type { RootState } from 'store/store';

const getAuthenticationError = (state: RootState) =>
  state.auth.authenticationError;
const getIsLoading = (state: RootState) => state.auth.isLoading;
const getIsAuth = (state: RootState) => state.auth.isAuth;

export { getAuthenticationError, getIsLoading, getIsAuth };
