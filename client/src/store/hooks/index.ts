import { bindActionCreators } from '@reduxjs/toolkit';
import { fetchAdForm } from 'features/adAddForm/models/slises/actionCreators';
import { addAdActions } from 'features/adAddForm/models/slises/adAddSlice';
import { applicationActions } from 'features/applicationAddForm/model/applicationSlice';
import {
  loginAction,
  registrationAction,
  checkAuthAction,
} from 'features/authForm/model/slices/actionCreators';
import { authActions } from 'features/authForm/model/slices/authSlice';
import { profieActions } from 'features/profileRedactor/models/sliced/profileSlice';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { adsActions } from 'shared/adsModel/sliced/adsSlice';
import { buttonActions } from 'shared/button/models/buttonSliced';
import type { RootState, AppDispatch } from 'store/store';

const useAppDispatch: () => AppDispatch = useDispatch;
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export { useAppDispatch, useAppSelector };
