import { IUser } from 'features/authForm/api/api.types';

interface IState {
  isAuth: boolean;
  isLoading: boolean;
  authError: boolean;
}

interface IActionAuth {
  accessToken: string;
  rememberMe: boolean;
}

export type { IState, IActionAuth };
