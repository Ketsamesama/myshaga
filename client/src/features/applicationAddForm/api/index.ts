import axios, { AxiosRequestConfig } from 'axios';
import { apiFormData } from 'shared/api';

interface IParamsAPI {
  title: string;
  text: string;
}

const fetchApplicationFormApi = async ({ title, text }: IParamsAPI) => {
  try {
    const response = await axios.post(
      'http://localhost:5000/api/application',
      { title, text },
      {
        withCredentials: true,
      }
    );
    return response;
  } catch (e) {
    return e;
  }
};

export { fetchApplicationFormApi };
