import axios from 'axios';
import { IFormType } from 'features/profileRedactor/ui/index.type';
import { API_URL } from 'shared/api';

const postAvatarApi = async (img: FormData) => {
  try {
    const response = await axios.patch(`${API_URL}/profileupdateavatar`, img, {
      withCredentials: true,
    });
    return response;
  } catch (err) {
    throw new Error();
  }
};

const postFormProfileApi = async (data: IFormType) => {
  return await axios.patch(
    `${API_URL}/profileupdate`,
    { user: data },
    {
      withCredentials: true,
    }
  );
};

export { postAvatarApi, postFormProfileApi };
