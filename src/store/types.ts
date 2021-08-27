import { ILoginState } from './login/types';
import { ISystemState } from './main/system/types';
import { DashboardState } from './main/analysis/types';
export interface IrootState {
  name: string;
  entireDepartments: any[];
  entireRole: any[];
  menuList: any[];
}

export interface IRootWithModule {
  login: ILoginState;
  system: ISystemState;
  dashboard: DashboardState;
}
export type IStoreType = IrootState & IRootWithModule;
