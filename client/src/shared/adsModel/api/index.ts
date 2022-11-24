import { IAd } from 'shared/adsModel/sliced/adsSlice.types';
import { $api } from 'shared/api';

const getAllAds = async () => {
  try {
    const { data } = await $api.get<Array<IAd>>('/ads');
    if (!data) {
      throw new Error('response data is undefined');
    }
    return data;
  } catch (e) {
    console.log(e);
  }
};

export { getAllAds };
