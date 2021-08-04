import JLRequest from '../index';

import { IAccount, IDataType, ILoginResult } from './types';
enum LoginAPI {
  AccountLogin = '/login',
  LoginUserInfo = '/users/', //用法 users/id
  UserMenus = '/role/' //用法 role/:id/menu
}
export function accountLoginRequest(account: IAccount) {
  return JLRequest.post<IDataType<ILoginResult>>({
    url: LoginAPI.AccountLogin,
    data: account
  });
}
export function requestUserInfoById(id: number) {
  return JLRequest.get<IDataType>({
    url: LoginAPI.LoginUserInfo + id
  });
}
export function requsetUserMenuByRoleId(id: number) {
  return JLRequest.get<IDataType>({
    url: LoginAPI.UserMenus + id + '/menu'
  });
}
