import axios, { AxiosRequestConfig } from 'axios';
import { API_URL } from 'shared/api';

interface IParamsAPI {
  title: string;
  text: string;
}

const fetchApplicationFormApi = async ({ title, text }: IParamsAPI) => {
  try {
    const response = await axios.post(
      `${API_URL}/applications/`,
      { title, text },
      {
        withCredentials: true,
      }
    );
    return response;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export { fetchApplicationFormApi };
