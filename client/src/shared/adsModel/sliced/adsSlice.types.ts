enum СURRENTСATEGORY {
  seek = 'seek',
  exchange = 'exchange',
  found = 'found',
}

interface IAd {
  images: Array<any>;
  title: string;
  text: string;
  user: number;
  id: number;
  category: СURRENTСATEGORY;
  dataCreated: string;
}

interface IState {
  ads: Array<IAd> | [];
  currentCatigory: СURRENTСATEGORY;
  currentPage: number;
}

export type { IState, IAd };
export { СURRENTСATEGORY };
