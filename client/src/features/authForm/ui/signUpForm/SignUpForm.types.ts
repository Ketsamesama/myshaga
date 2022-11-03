interface IParams {
  firstName: string;
  lastName: string;
  email: string;
  city: string;
  dormitory: string;
  rooms: string;
}

type IRegister =
  | 'firstName'
  | 'lastName'
  | 'email'
  | 'city'
  | 'rooms'
  | 'dormitory';

interface IIinputList {
  register: IRegister;
  placeholder: string;
  type: string;
  required: boolean;
}

export type { IParams, IIinputList };
