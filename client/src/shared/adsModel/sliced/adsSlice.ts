import { createSlice } from '@reduxjs/toolkit';

import type { PayloadAction } from '@reduxjs/toolkit';
import type { IState, IAd, IASetAds } from './adsSlice.types';
import { СURRENTСATEGORY } from './adsSlice.types';

const initialState: IState = {
  ads: [],
  currentCatigory: СURRENTСATEGORY.found,
  currentPage: 1,
  totalPage: undefined,
};

const adsSlice = createSlice({
  name: 'ads',
  initialState,
  reducers: {
    setAds(state: IState, action: PayloadAction<IASetAds>) {
      state.ads = action.payload.ads;
      state.totalPage = action.payload.total;
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
