interface IParams {
  firstName: string;
  lastName: string;
  email: string;
  city: string;
  dormitory: string;
  room: string;
}

type IRegister =
  | 'firstName'
  | 'lastName'
  | 'email'
  | 'city'
  | 'room'
  | 'dormitory';

interface IIinputList {
  register: IRegister;
  placeholder: string;
  type: string;
  required: boolean;
}

export type { IParams, IIinputList };
