import axios from 'axios';
import { IFormType } from 'features/profileRedactor/ui/index.type';

const instance = axios.create({
  baseURL: 'http://localhost:5000/api/',
  headers: {
    withCredentials: true,
  },
});

const postAvatarApi = async (img: FormData) => {
  try {
    const response = await axios.patch(
      'http://localhost:5000/api/profileupdateavatar',
      img,
      {
        withCredentials: true,
      }
    );
    return response;
  } catch (err) {
    throw new Error();
  }
};

const postFormProfileApi = async (data: IFormType) => {
  return await axios.patch(
    'http://localhost:5000/api/profileupdate',
    { user: data },
    {
      withCredentials: true,
    }
  );
};

export { postAvatarApi, postFormProfileApi };
