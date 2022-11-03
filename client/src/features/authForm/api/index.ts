import axios from 'axios';
import { $api, API_URL } from 'shared/api';
import { IAuthResponse, IParamsLogin, IParamsRegistration } from './api.types';

const login = ({ email, password, rememberMe }: IParamsLogin) => {
  return $api
    .post<IAuthResponse>('/login', { email, password })
    .then((response) => {
      return {
        accessToken: response.data.accessToken,
        refreshToken: response.data.refreshToken,
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
  rooms,
}: IParamsRegistration) => {
  return $api
    .post<IAuthResponse>('/registration', {
      email,
      firstName,
      lastName,
      city,
      dormitory,
      rooms,
    })
    .then((response) => {
      return {
        accessToken: response.data.accessToken,
        refreshToken: response.data.refreshToken,
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
    refreshToken: response.data.refreshToken,
    user: response.data.user,
  };
};

export { login, registration, checkAuth };
