import { createStore } from 'vuex';
import { IrootState } from './types';
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
export default store;
