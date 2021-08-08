import { createRouter, createWebHashHistory } from 'vue-router';
import { RouteRecordRaw } from 'vue-router';
import cache from '@/utils/cache';
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/main'
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/login.vue')
  },
  {
    path: '/main',
    name: 'main',
    component: () => import('@/views/main/main.vue')
    //根据userMenus决定子路由
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'nofFound',

    component: () => import('@/views/notFound.vue')
  }
];
const router = createRouter({
  routes,
  history: createWebHashHistory()
});
//导航守卫
router.beforeEach((to) => {
  //如果用户想进登录页就不验证token
  if (to.path !== '/login') {
    const result = cache.getCache('token');
    if (!result) {
      return '/login';
    }
  }
});
export default router;
