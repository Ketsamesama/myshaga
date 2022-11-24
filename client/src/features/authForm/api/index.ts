import axios from 'axios';
import { $api, API_URL } from 'shared/api';
import { IAuthResponse, IParamsLogin, IParamsRegistration } from './api.types';

const login = ({ email, password }: IParamsLogin) => {
  return $api
    .post<IAuthResponse>('/login', { email, password })
    .then((response) => {
      return {
        accessToken: response.data.accessToken,
        user: response.data.user,
      };
    });
};

const registration = ({
  email,
  firstName,
  lastName,
  city,
  dormitory,
  room,
}: IParamsRegistration) => {
  return $api
    .post<IAuthResponse>('/registration', {
      email,
      firstName,
      lastName,
      city,
      dormitory,
      room,
    })
    .then((response) => {
      return {
        accessToken: response.data.accessToken,
        user: response.data.user,
      };
    });
};

const checkAuth = async () => {
  const response = await axios.get<IAuthResponse>(`${API_URL}/refresh`, {
    withCredentials: true,
  });
  return {
    accessToken: response.data.accessToken,
    user: response.data.user,
  };
};

export { login, registration, checkAuth };
