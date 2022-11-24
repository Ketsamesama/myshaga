interface IAd {
  title: string;
  text: string;
  user: {
    email: string;
    id: string;
    isActivated: string;
    firstName: string;
    lastName: string;
    city: string;
    dormitory: string;
    rooms: string | null;
  };
  id: string;
  images: Array<string>;
  dataCreated: string;
}

enum STATUS {
  loading = 'loading',
  error = 'error',
}

type IStateAd = IAd | STATUS;

export type { IStateAd, IAd };
export { STATUS };
