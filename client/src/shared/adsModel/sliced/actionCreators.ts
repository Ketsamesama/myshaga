import { getAllAds } from 'shared/adsModel/api';
import { setAds } from 'shared/adsModel/sliced/adsSlice';
import { AppDispatch } from 'store/store';

const fetchAds = () => async (dispatch: AppDispatch) => {
  try {
    const response = await getAllAds();
    dispatch(setAds(response!));
  } catch (e) {
    console.log(e);
  }
};

export { fetchAds };
