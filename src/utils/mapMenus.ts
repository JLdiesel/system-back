import { BreadCrumb } from '@/common/breadcrumb';

import { RouteRecordRaw } from 'vue-router';
let firstMenu: any;
//遍历动态路由
export function mapMenusToRoutes(userMenus: any[]): RouteRecordRaw[] {
  const routes: RouteRecordRaw[] = [];
  //先去加载默认的routers
  const allRoutes: RouteRecordRaw[] = [];
  //查找文件  找到路径下所有.ts的文件
  const routeFiles = require.context('../router/main', true, /\.ts/);
  routeFiles.keys().forEach((key) => {
    const route = require('../router/main' + key.split('.')[1]);
    allRoutes.push(route.default);
  });
  // console.log(allRoutes);

  //根据菜单获取需要添加的routes
  const recurseGetRoute = (menus: any[]) => {
    for (const menu of menus) {
      if (menu.type === 2) {
        if (!firstMenu) {
          firstMenu = menu;
        }
        const route = allRoutes.find((route) => route.path === menu.url);
        // console.log(route);
        if (route) routes.push(route);
      } else {
        recurseGetRoute(menu.children);
      }
    }
  };

  recurseGetRoute(userMenus);
  return routes;
}
//遍历面包屑
export function pathMapBreadcrumbs(userMenus: any[], currentPath: string) {
  const breadcrumbs: BreadCrumb[] = [];
  pathMapToMenu(userMenus, currentPath, breadcrumbs);
  return breadcrumbs;
}

//通过地址获取menu
export function pathMapToMenu(
  userMenus: any[],
  currentPath: string,
  breadcrumbs?: BreadCrumb[]
): any {
  for (const menu of userMenus) {
    if (menu.type === 1) {
      const findMenu = pathMapToMenu(menu.children ?? [], currentPath);
      if (findMenu) {
        breadcrumbs?.push({ name: menu.name });
        breadcrumbs?.push({ name: findMenu.name });
        return findMenu;
      }
    } else if (menu.type === 2 && menu.url === currentPath) {
      return menu;
    }
  }
}
//权限菜单
export function mapMenusToPermissions(userMenus: any[]) {
  const premissions: string[] = [];
  const _recurseGetPermission = (menus: any[]) => {
    for (const menu of menus) {
      if (menu.type === 1 || menu.type === 2) {
        _recurseGetPermission(menu.children ?? []);
      } else if (menu.type === 3) {
        premissions.push(menu.permission);
      }
    }
  };
  _recurseGetPermission(userMenus);
  return premissions;
}
export function getMenuLeafKeys(menus: any[]) {
  const leafKeys: any[] = [];
  const _recurseGetLeafKey = (menus: any[]) => {
    for (const menu of menus) {
      if (menu.children) {
        _recurseGetLeafKey(menu.children);
      } else {
        leafKeys.push(menu.id);
      }
    }
  };
  _recurseGetLeafKey(menus);
  return leafKeys;
}
export { firstMenu };
