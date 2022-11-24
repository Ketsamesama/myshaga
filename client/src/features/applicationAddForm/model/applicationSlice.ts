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
    setInitialStatus(state: IState) {
      state.status = STATESTATUS.initialStatus;
    },
  },

  extraReducers: {
    [fetchApplicationForm.fulfilled.type]: (state) => {
      state.status = STATESTATUS.sucsess;
    },
    [fetchApplicationForm.pending.type]: (state) => {
      state.status = STATESTATUS.loading;
    },
    [fetchApplicationForm.rejected.type]: (state) => {
      state.status = STATESTATUS.error;
    },
  },
});

export default applicationSlice.reducer;
export const { setInitialStatus } = applicationSlice.actions;
