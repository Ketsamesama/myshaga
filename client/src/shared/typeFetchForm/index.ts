enum STATESTATUS {
  initialStatus = 'initialStatus',
  loading = 'loading',
  error = 'error',
  sucsess = 'sucsess',
}

interface IState {
  status: STATESTATUS;
}

export type { IState };
export { STATESTATUS };
