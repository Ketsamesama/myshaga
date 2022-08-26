interface IUser {
  email: string;
  id: string;
  isActivated: string;
  firstName: string;
  lastName: string;
  city: string;
  dormitory: string;
  rooms: string | null;
}

interface IParamsLogin {
  email: string;
  password: string;
  rememberMe: boolean;
}

interface IAuthResponse {
  accessToken: string;
  refreshToken: string;
  user: IUser | null;
}

interface IParamsRegistration {
  email: string;
  firstName: string;
  lastName: string;
  city: string;
  dormitory: string;
  rooms: string;
}

export type { IAuthResponse, IParamsLogin, IParamsRegistration, IUser };
