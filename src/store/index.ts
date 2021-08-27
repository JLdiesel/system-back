import { createStore, Store, useStore as useVuexStore } from 'vuex';
import { IrootState, IStoreType } from './types';
import login from './login/login';
import system from './main/system/system';
import dashboard from './main/analysis/dashboard';
import { getPageListdata } from '@/service/main/system/system';
const store = createStore<IrootState>({
  state() {
    return {
      name: 'jl',
      entireDepartments: [],
      entireRole: [],
      menuList: []
    };
  },
  mutations: {
    changeEntireDepartments(state, list) {
      state.entireDepartments = list;
    },
    changeEntireRole(state, list) {
      state.entireRole = list;
    },
    changeEntireMenu(state, list) {
      state.menuList = list;
    }
  },
  getters: {},
  actions: {
    async getInitialDataAction({ commit }) {
      //请求部门和角色数据保存
      const departmentListData = await getPageListdata('/department/list', {
        offset: 0,
        size: 1000
      });
      const departmentList = departmentListData.data.list;
      const roleListData = await getPageListdata('/role/list', {
        offset: 0,
        size: 1000
      });
      const roleList = roleListData.data.list;
      const menuListData = await getPageListdata('/menu/list', {});
      const menuList = menuListData.data.list;
      //保存数据
      commit('changeEntireDepartments', departmentList);
      commit('changeEntireRole', roleList);
      commit('changeEntireMenu', menuList);
    }
  },
  modules: {
    login,
    system,
    dashboard
  }
});
export function setupStore() {
  store.dispatch('login/loadLocalLogin');
}
export function useStore(): Store<IStoreType> {
  return useVuexStore();
}
export default store;
