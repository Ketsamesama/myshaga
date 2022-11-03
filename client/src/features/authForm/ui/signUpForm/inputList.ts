import { IIinputList } from './SignUpForm.types';

const inputList: IIinputList[] = [
  {
    register: 'firstName',
    placeholder: 'Имя',
    type: 'text',
    required: true,
  },
  {
    register: 'lastName',
    placeholder: 'Фамилия',
    type: 'text',
    required: true,
  },
  {
    register: 'email',
    placeholder: 'Почта',
    type: 'email',
    required: true,
  },
  {
    register: 'city',
    placeholder: 'Город',
    type: 'text',
    required: true,
  },
  {
    register: 'dormitory',
    placeholder: 'Выберите общежитие',
    type: 'text',
    required: true,
  },
  {
    register: 'rooms',
    placeholder: 'Номер комнаты (необязательно)',
    type: 'text',
    required: false,
  },
];

export { inputList };
