import { createSlice } from '@reduxjs/toolkit';
import { IState, STATESTATUS } from 'shared/typeFetchForm';

import { fetchAdForm } from './actionCreators';

const initialState: IState = {
  status: STATESTATUS.initialStatus,
};

const addAdSlice = createSlice({
  name: 'adsAd',
  initialState,
  reducers: {
    setStatusInitial(state: IState) {
      state.status = STATESTATUS.initialStatus;
    },
    setStatusSucsess(state: IState) {
      state.status = STATESTATUS.sucsess;
    },
    setStatusError(state: IState) {
      state.status = STATESTATUS.error;
    },
  },
});

export const { setStatusInitial, setStatusSucsess, setStatusError } =
  addAdSlice.actions;
export default addAdSlice.reducer;
