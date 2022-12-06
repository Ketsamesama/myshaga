import { apiFormData } from 'shared/api';

const postAdFormApi = async (formData: FormData) => {
  try {
    const response = await apiFormData.post(`/ads`, formData);
    return response;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export { postAdFormApi };
