import { Img, IPrewImg } from 'features/adAddForm/ui/AddAdform.types';

interface IProps {
  styles: string;
  prewImg: IPrewImg;
  setPrewImg: React.Dispatch<React.SetStateAction<IPrewImg>>;
}

export type { IProps };
