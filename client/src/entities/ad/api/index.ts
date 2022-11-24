import axios from 'axios';
import { IAd } from 'shared/adsModel/sliced/adsSlice.types';
import { $api } from 'shared/api';

const fetchAd = async (id: string | undefined) => {
  try {
    const response = await axios.get<IAd>(
      `http://localhost:5000/api/ads/${id}`
    );
    console.log(response);
    return response;
  } catch (e) {
    console.log('======>', e);
    return e;
  }
};

export { fetchAd };
