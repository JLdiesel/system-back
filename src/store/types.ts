import { ILoginState } from './login/types';
export interface IrootState {
  name: string;
}

export interface IRootWithModule {
  login: ILoginState;
}
export type IStoreType = IrootState & IRootWithModule;
