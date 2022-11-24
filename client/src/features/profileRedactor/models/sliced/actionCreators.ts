import { AppDispatch } from 'store/store';
import {
  postAvatarApi,
  postFormProfileApi,
} from 'features/profileRedactor/api';
import {
  setFormDataSaved,
  setUser,
  updateAvatar,
} from 'features/profileRedactor/models/sliced/profileSlice';
import { IFormType } from 'features/profileRedactor/ui/index.type';

const postAvatar = (img: Blob) => async (dispatch: AppDispatch) => {
  try {
    const formData = new FormData();

    formData.append('avatar', img);
    const response = await postAvatarApi(formData);
    dispatch(updateAvatar(response.data.avatar));
  } catch (err) {
    console.log(err);
  }
};

const postForm = (data: IFormType) => async (dispatch: AppDispatch) => {
  try {
    const response = await postFormProfileApi(data);
    dispatch(setUser(response.data));
    dispatch(setFormDataSaved(true));
  } catch (err) {
    console.log(err);
  }
};

export { postAvatar, postForm };
