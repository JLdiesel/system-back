import { Module } from 'vuex';
import { ILoginState } from './types';
import { IrootState } from '../types';
import {
  accountLoginRequest,
  requestUserInfoById,
  requsetUserMenuByRoleId
} from '@/service/login/login';
import router from '@/router';
import cache from '@/utils/cache';
import { IAccount } from '@/service/login/types';
import { mapMenusToPermissions, mapMenusToRoutes } from '@/utils/mapMenus';
const loginModule: Module<ILoginState, IrootState> = {
  namespaced: true,
  state() {
    return {
      token: '',
      userInfo: '',
      userMenus: [],
      permissions: []
    };
  },
  getters: {},
  mutations: {
    changeToken(state, token: string) {
      state.token = token;
    },
    changeUserInfo(state, userInfo) {
      state.userInfo = userInfo;
    },
    changeUserMenus(state, userMenus) {
      state.userMenus = userMenus;

      //映射userMenus到Routes
      const routes = mapMenusToRoutes(userMenus);
      // console.log(routes);
      //讲routes映射到router.main.children
      routes.forEach((route) => router.addRoute('main', route));

      const result = mapMenusToPermissions(userMenus);
      state.permissions = result;
    }
  },
  actions: {
    async accountLoginAction({ commit, dispatch }, payload: IAccount) {
      //实现登录
      const loginResult = await accountLoginRequest(payload);
      const { id, token } = loginResult.data;

      commit('changeToken', token);
      //本地缓存token
      cache.setCache('token', token);
      //请求用户数据
      const userInfoResult = await requestUserInfoById(id);
      const userInfo = userInfoResult.data;
      commit('changeUserInfo', userInfo);
      //本地缓存用户数据
      cache.setCache('userInfo', userInfo);
      //获取用户路由权限
      const userMenusResult = await requsetUserMenuByRoleId(userInfo.role.id);
      const userMenus = userMenusResult.data;
      cache.setCache('userMenus', userMenus);

      dispatch('getInitialDataAction', null, { root: true });

      commit('changeUserMenus', userMenus);
      router.push('/main');
    },
    loadLocalLogin({ commit, dispatch }) {
      const token = cache.getCache('token');
      if (token) {
        commit('changeToken', token);
      }
      const userInfo = cache.getCache('userInfo');
      if (userInfo) {
        commit('changeUserInfo', userInfo);
      }
      const userMenus = cache.getCache('userMenus');
      if (userMenus) {
        commit('changeUserMenus', userMenus);
      }
      dispatch('getInitialDataAction', null, { root: true });
    }
    /*   phoneLoginAction({ commit }, payload: any) {
      console.log('执行phoneaction');
    } */
  }
};
export default loginModule;
