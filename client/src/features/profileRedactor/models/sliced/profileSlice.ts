import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser } from 'features/authForm/api/api.types';

interface IState {
  user: IUser | null;
  formDataSaved: boolean;
}

const initialState: IState = {
  user: null,
  formDataSaved: false,
};

const profileAdSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setUser(state: IState, action: PayloadAction<IUser>) {
      state.user = action.payload;
    },
    updateAvatar(state: IState, action: PayloadAction<string>) {
      state.user!.avatar = action.payload;
    },
    setFormDataSaved(state: IState, action: PayloadAction<boolean>) {
      state.formDataSaved = action.payload;
    },
  },
});

export const { setUser, updateAvatar, setFormDataSaved } =
  profileAdSlice.actions;
export default profileAdSlice.reducer;
