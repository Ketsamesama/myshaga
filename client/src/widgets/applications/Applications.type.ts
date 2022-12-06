enum STATUS {
  loading = 'loading',
  error = 'error',
}

interface IApps {
  text: string;
  title: string;
  user: string;
  id: string;
  numberSignatures: string;
}

type IStateApp = IApps[] | STATUS;

export { STATUS };
export type { IStateApp, IApps };
