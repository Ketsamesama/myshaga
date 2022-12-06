import { createSlice } from '@reduxjs/toolkit';

import type { PayloadAction } from '@reduxjs/toolkit';
import type { IState, IAd } from './adsSlice.types';
import { СURRENTСATEGORY } from './adsSlice.types';

const initialState: IState = {
  ads: [],
  currentCatigory: СURRENTСATEGORY.found,
  currentPage: 1,
};

const adsSlice = createSlice({
  name: 'ads',
  initialState,
  reducers: {
    setAds(state: IState, action: PayloadAction<Array<IAd>>) {
      state.ads = action.payload;
    },
    setCurrentCategory(state: IState, action: PayloadAction<СURRENTСATEGORY>) {
      state.currentCatigory = action.payload;
    },
    setCurrentPage(state: IState, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
  },
});

export const { setAds, setCurrentCategory, setCurrentPage } = adsSlice.actions;
export default adsSlice.reducer;
