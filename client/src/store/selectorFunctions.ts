import type { RootState } from 'store/store';

const getAuthenticationError = (state: RootState) => state.auth.authError;
const getIsLoading = (state: RootState) => state.auth.isLoading;
const getIsAuth = (state: RootState) => state.auth.isAuth;
const getCurrentCatigory = (state: RootState) => state.ads.currentCatigory;
const getStatus = (state: RootState) => state.adAd.status;
const getUser = (state: RootState) => state.profile.user;
const getUserAvatar = (state: RootState) => state.profile.user?.avatar;

export {
  getAuthenticationError,
  getIsLoading,
  getIsAuth,
  getCurrentCatigory,
  getStatus,
  getUser,
  getUserAvatar,
};
