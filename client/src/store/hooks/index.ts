import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from 'store/store';

const useAppDispatch: () => AppDispatch = useDispatch;
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

const getAuthenticationError = (state: RootState) =>
  state.auth.authenticationError;
const getIsLoading = (state: RootState) => state.auth.isLoading;

export { useAppDispatch, useAppSelector, getAuthenticationError, getIsLoading };
