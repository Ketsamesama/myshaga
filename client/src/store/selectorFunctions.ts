import type { RootState } from 'store/store';

const getAuthenticationError = (state: RootState) => state.auth.authError;
const getIsLoading = (state: RootState) => state.auth.isLoading;
const getIsAuth = (state: RootState) => state.auth.isAuth;

const getCurrentAdsCatigory = (state: RootState) => state.ads.currentCatigory;
const getCurrentAdsPage = (state: RootState) => state.ads.currentPage;
const getTotalAdsPage = (state: RootState) => state.ads.totalPage;
const getAds = (state: RootState) => state.ads.ads;

const getStatusAdForm = (state: RootState) => state.adAd.status;
const getStatusAppForm = (state: RootState) => state.applicationAd.status;
const getFormDataSaved = (state: RootState) => state.profile.formDataSaved;

const getUser = (state: RootState) => state.profile.user;
const getUserAvatar = (state: RootState) => state.profile.user?.avatar;

export {
  getAuthenticationError,
  getIsLoading,
  getIsAuth,
  getCurrentAdsCatigory,
  getCurrentAdsPage,
  getTotalAdsPage,
  getAds,
  getStatusAdForm,
  getStatusAppForm,
  getFormDataSaved,
  getUser,
  getUserAvatar,
};
