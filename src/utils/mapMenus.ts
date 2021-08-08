import { RouteRecordRaw } from 'vue-router';
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
