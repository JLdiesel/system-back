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
    component: () => import('@/views/login/login.vue')
  },
  {
    path: '/main',
    component: () => import('@/views/main/main.vue')
  }
];
const router = createRouter({
  routes,
  history: createWebHashHistory()
});

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
