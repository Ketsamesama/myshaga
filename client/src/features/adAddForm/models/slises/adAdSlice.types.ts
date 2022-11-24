import { IPrewImg } from 'features/adAddForm/ui/AddAdform.types';
import { IUser } from 'features/authForm/api/api.types';

interface IParamsThunk {
  title: string;
  text: string;
  category: string;
  images: Array<Blob>;
}

export type { IParamsThunk };
