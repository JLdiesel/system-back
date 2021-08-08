import { createStore, Store, useStore as useVuexStore } from 'vuex';
import { IrootState, IStoreType } from './types';
import login from './login/login';
const store = createStore<IrootState>({
  state() {
    return {
      name: 'jl'
    };
  },
  mutations: {},
  getters: {},
  actions: {},
  modules: {
    login
  }
});
export function setupStore() {
  store.dispatch('login/loadLocalLogin');
}
export function useStore(): Store<IStoreType> {
  return useVuexStore();
}
export default store;
