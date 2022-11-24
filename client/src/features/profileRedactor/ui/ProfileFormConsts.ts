type INameInput =
  | 'LFP'
  | 'university'
  | 'email'
  | 'dormitory'
  | 'password'
  | 'confirmPassword'
  | 'room';

type IInputList = {
  name: INameInput;
  title: string;
  type: string;
};
const inputList: Array<IInputList> = [
  { name: 'LFP', title: 'ФИО', type: 'text' },
  { name: 'university', title: 'ВУЗ', type: 'text' },
  { name: 'email', title: 'Почта', type: 'email' },
  { name: 'dormitory', title: 'Общежитие', type: 'text' },
  { name: 'password', title: 'Пароль', type: 'password' },
  {
    name: 'confirmPassword',
    title: 'Подтвердить пароль',
    type: 'password',
  },
  { name: 'room', title: 'Номер комнаты', type: 'number' },
];
export { inputList };
export type { INameInput };
