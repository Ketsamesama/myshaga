type IUser = {
  email: string;
  id: string;
  isActivated: string;
  firstName: string;
  lastName: string;
  city: string;
  dormitory: string;
  room: string | null;
  avatar: string | null;
  university: string | null;
};

interface IParamsLogin {
  email: string;
  password: string;
  rememberMe: boolean;
}

interface IAuthResponse {
  accessToken: string;
  refreshToken: string;
  user: IUser;
}

interface IParamsRegistration {
  email: string;
  firstName: string;
  lastName: string;
  city: string;
  dormitory: string;
  room: string;
}

export type { IAuthResponse, IParamsLogin, IParamsRegistration, IUser };
