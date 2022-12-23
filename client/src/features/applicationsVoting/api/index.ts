import axios from 'axios';
import { API_URL } from 'shared/api';

interface IParams {
  useId: string;
  result: number;
  appId: string;
}

const putResult = async (params: IParams) => {
  try {
    return await axios.put(
      `${API_URL}/applicationsvoting`,
      { ...params },
      {
        withCredentials: true,
      }
    );
  } catch (err) {
    throw new Error();
  }
};

export { putResult };
export type { IParams };
