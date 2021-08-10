import { Module } from 'vuex';
import { ISystemState } from './types';
import { IrootState } from '@/store/types';
import { getPageListdata } from '@/service/main/system/system';
const systemModule: Module<ISystemState, IrootState> = {
  namespaced: true,
  state() {
    return {
      userList: [],
      userCount: 0
    };
  },
  mutations: {
    changeUserList(state, userList: any[]) {
      state.userList = userList;
    },
    changeUserCount(state, userCount: number) {
      state.userCount = userCount;
    }
  },
  actions: {
    async getPageListAction({ commit }, payload: any) {
      console.log(payload);
      const result = await getPageListdata(payload.pageUrl, payload.queryInfo);
      const { list, totalCount } = result.data;
      commit('changeUserList', list);
      commit('changeUserCount', totalCount);
    }
  }
};
export default systemModule;
