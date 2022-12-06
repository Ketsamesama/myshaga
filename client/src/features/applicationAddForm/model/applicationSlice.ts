import { createSlice } from '@reduxjs/toolkit';
import { fetchApplicationForm } from 'features/applicationAddForm/model/actionCreators';
import { IState, STATESTATUS } from 'shared/typeFetchForm';

const initialState = {
  status: STATESTATUS.initialStatus,
};

const applicationSlice = createSlice({
  name: 'applicationAdd',
  initialState,
  reducers: {
    setStatusInitial(state: IState) {
      state.status = STATESTATUS.initialStatus;
    },
    setStatusSucsess(state: IState) {
      state.status = STATESTATUS.sucsess;
    },
    setStatusLoading(state: IState) {
      state.status = STATESTATUS.loading;
    },
    setStatusError(state: IState) {
      state.status = STATESTATUS.error;
    },
  },
});

export default applicationSlice.reducer;
export const {
  setStatusInitial,
  setStatusSucsess,
  setStatusLoading,
  setStatusError,
} = applicationSlice.actions;
