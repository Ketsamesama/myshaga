import { configureStore } from '@reduxjs/toolkit';
import addAdSlice from 'features/adAddForm/models/slises/adAddSlice';
import authSlice from 'features/authForm/model/slices/authSlice';
import adsSlice from 'shared/adsModel/sliced/adsSlice';
import applicationSlice from 'features/applicationAddForm/model/applicationSlice';
import buttonSlice from 'shared/button/models/buttonSliced';
import profileSlice from 'features/profileRedactor/models/sliced/profileSlice';

const store = configureStore({
  reducer: {
    auth: authSlice,
    adAd: addAdSlice,
    ads: adsSlice,
    applicationAd: applicationSlice,
    button: buttonSlice,
    profile: profileSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
