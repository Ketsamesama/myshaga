interface IIinputList {
  register: 'email' | 'password';
  placeholder: string;
}

const inputList: IIinputList[] = [
  {
    register: 'email',
    placeholder: 'Почта',
  },
  {
    register: 'password',
    placeholder: '****************',
  },
];

export { inputList };
