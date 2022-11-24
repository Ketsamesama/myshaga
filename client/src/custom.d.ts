import 'react-router-dom';

declare module 'react-router-dom' {
  export declare function useLocation<S>(): location & { state: S };
}
