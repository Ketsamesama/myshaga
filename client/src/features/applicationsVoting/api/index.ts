import axios from 'axios';
import { API_URL } from 'shared/api';

interface IParams {
  useId: string;
  result: string;
  appId: string;
}

const putResult = async (params: IParams) => {
  try {
    const response = await axios.put(
      `${API_URL}/applicationsvoting`,
      { ...params },
      {
        withCredentials: true,
      }
    );
    return response.data;
  } catch (err) {
    throw new Error();
  }
};

export { putResult };
export type { IParams };
