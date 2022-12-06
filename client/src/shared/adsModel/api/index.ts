import { IAd } from 'shared/adsModel/sliced/adsSlice.types';
import { $api } from 'shared/api';

const getAllAds = async (page: number) => {
  try {
    const { data } = await $api.get<Array<IAd>>(`/ads?page=${page}`);
    if (!data) {
      throw new Error('response data is undefined');
    }
    return data;
  } catch (e) {
    console.log(e);
  }
};

export { getAllAds };
