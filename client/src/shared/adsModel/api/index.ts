import { IAd } from 'shared/adsModel/sliced/adsSlice.types';
import { $api } from 'shared/api';

interface IRes {
  ads: IAd[];
  total: number;
}

const getAllAds = async (page: number, currentCategory: string) => {
  try {
    const { data } = await $api.get<IRes>(
      `/ads?page=${page}&currentCategory=${currentCategory}`
    );
    if (!data) {
      throw new Error('response data is undefined');
    }
    return data;
  } catch (e) {
    console.log(e);
  }
};

export { getAllAds };
