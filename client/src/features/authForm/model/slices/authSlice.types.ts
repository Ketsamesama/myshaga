import { IUser } from 'features/authForm/api/api.types';

interface IState {
  isAuth: boolean;
  isLoading: boolean;
  authenticationError: boolean;
  user: IUser | null;
}

interface IActionAuth {
  accessToken: string;
  rememberMe: boolean;
}

export type { IState, IActionAuth };
