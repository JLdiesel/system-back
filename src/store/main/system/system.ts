import { Module } from 'vuex';
import { ISystemState } from './types';
import { IrootState } from '@/store/types';
import {
  getPageListdata,
  deletePagedata,
  createPagedata,
  editPagedata
} from '@/service/main/system/system';
// const pageUrlMap = {
//   users: '/users/getlist'
// };

const systemModule: Module<ISystemState, IrootState> = {
  namespaced: true,
  state() {
    return {
      userList: [],
      userCount: 0,
      roleList: [],
      roleCount: 0,
      goodsList: [],
      goodsCount: 0,
      menuList: [],
      menuCount: 0,
      departmentList: [],
      departmentCount: 0
    };
  },
  mutations: {
    changeUserList(state, userList: any[]) {
      state.userList = userList;
    },
    changeUserCount(state, userCount: number) {
      state.userCount = userCount;
    },
    changeRoleList(state, RoleList: any[]) {
      state.roleList = RoleList;
    },
    changeRoleCount(state, RoleCount: number) {
      state.roleCount = RoleCount;
    },
    changeGoodsList(state, goodsList: any[]) {
      state.goodsList = goodsList;
    },
    changeGoodsCount(state, goodsCount: number) {
      state.goodsCount = goodsCount;
    },
    changeMenuList(state, menuList: any[]) {
      state.menuList = menuList;
    },
    changeMenuCount(state, menuCount: number) {
      state.menuCount = menuCount;
    },
    changeDepartmentList(state, departmentList: any[]) {
      state.departmentList = departmentList;
    },
    changeDepartmentCount(state, departmentCount: number) {
      state.departmentCount = departmentCount;
    }
  },
  getters: {
    pageListData(state) {
      return (pageName: string) => {
        switch (pageName) {
          case 'users':
            return state.userList;
          case 'role':
            return state.roleList;
          case 'goods':
            return state.goodsList;
          case 'menu':
            return state.menuList;
          case 'department':
            return state.departmentList;
        }
      };
    },
    pageListCount(state) {
      return (pageName: string) => {
        switch (pageName) {
          case 'users':
            return state.userCount;
          case 'role':
            return state.roleCount;
          case 'goods':
            return state.goodsCount;
          case 'menu':
            return state.menuCount;
          case 'department':
            return state.departmentCount;
        }
      };
    }
  },
  actions: {
    async getPageListAction({ commit }, payload: any) {
      const pageName = payload.pageName;
      let pageUrl = '';

      switch (pageName) {
        case 'users':
          pageUrl = '/users/list';
          break;
        case 'role':
          pageUrl = '/role/list';
          break;
        case 'goods':
          pageUrl = '/goods/list';
          break;
        case 'menu':
          pageUrl = '/menu/list';
          break;
        case 'department':
          pageUrl = '/department/list';
          break;
      }

      const result = await getPageListdata(pageUrl, payload.queryInfo);
      const { list, totalCount } = result.data;
      switch (pageName) {
        case 'users':
          commit(`changeUserList`, list);
          commit(`changeUserCount`, totalCount);
          break;
        case 'role':
          commit('changeRoleList', list);
          commit('changeRoleCount', totalCount);
          break;
        case 'goods':
          commit('changeGoodsList', list);
          commit('changeGoodsCount', totalCount);
          break;
        case 'menu':
          commit('changeMenuList', list);
          commit('changeMenuCount', totalCount);
          break;
        case 'department':
          commit('changeDepartmentList', list);
          commit('changeDepartmentCount', totalCount);
          break;
      }
    },
    async deletePageDataAction(
      { dispatch },
      payload: { pageName: string; id: number }
    ) {
      const { pageName, id } = payload;
      const pageUrl = `/${pageName}/${id}`;
      await deletePagedata(pageUrl);
      dispatch('getPageListAction', {
        pageName,
        queryInfo: {
          offset: 0,
          size: 10
        }
      });
    },
    //新增数据
    async createPageDataAction({ dispatch }, payload) {
      //获取新增数据和pageName
      const { pageName, newData } = payload;
      let pageUrl = '';
      switch (pageName) {
        case 'users':
          pageUrl = '/users';
          break;
        case 'role':
          pageUrl = '/role';
          break;
        case 'goods':
          pageUrl = '/goods';
          break;
        case 'menu':
          pageUrl = '/menu';
          break;
        case 'department':
          pageUrl = '/department';
          break;
      }
      await createPagedata(pageUrl, newData);
      dispatch('getPageListAction', {
        pageName,
        queryInfo: {
          offset: 0,
          size: 10
        }
      });
    },
    //编辑数据
    async editPageDataAction({ dispatch }, payload: any) {
      //发送编辑请求
      const { pageName, editData, id } = payload;
      let pageUrl = '';
      switch (pageName) {
        case 'users':
          pageUrl = `/users/${id}`;
          break;
        case 'role':
          pageUrl = `/role/${id}`;
          break;
        case 'goods':
          pageUrl = `/goods/${id}`;
          break;
        case 'menu':
          pageUrl = `/menu/${id}`;
          break;
        case 'department':
          pageUrl = `/department/${id}`;
          break;
      }
      await editPagedata(pageUrl, editData);
      dispatch('getPageListAction', {
        pageName,
        queryInfo: {
          offset: 0,
          size: 10
        }
      });
    }
  }
};
export default systemModule;
