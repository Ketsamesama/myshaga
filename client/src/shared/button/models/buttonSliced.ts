import { createSlice } from '@reduxjs/toolkit';

interface IState {
  disabled: boolean;
}

const initialState: IState = {
  disabled: false,
};

const buttonSlice = createSlice({
  name: 'button',
  initialState,
  reducers: {
    setDisabled(state: IState) {
      state.disabled = true;
    },
    removeDisabled(state: IState) {
      state.disabled = false;
    },
  },
});

export const { setDisabled, removeDisabled } = buttonSlice.actions;
export default buttonSlice.reducer;
