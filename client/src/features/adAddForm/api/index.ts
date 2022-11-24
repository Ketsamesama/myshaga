import axios, { AxiosRequestConfig } from 'axios';
import { apiFormData } from 'shared/api';

const postAdFormApi = async (formData: FormData) => {
  try {
    const response = await apiFormData.post(
      'http://localhost:5000/api/ads',
      formData
    );
    return response;
  } catch (e) {
    return e;
  }
};

export { postAdFormApi };
