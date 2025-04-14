import { Router, RouteRecordRaw } from 'vue-router';
import { useUserStore } from '../stores/auth';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    meta: { requiresAuth: true },
    children: [{ path: '', component: () => import('pages/TasksPage.vue') }],
  },
  {
    path: '/auth',
    component: () => import('layouts/MainLayout.vue'),
    meta: { requiresGuest: true },
    children: [{ path: '', component: () => import('pages/AuthPage.vue') }],
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;

export function createRouterGuards(router: Router) {
  router.beforeEach((to) => {
    const userStore = useUserStore();

    if (to.meta.requiresAuth && !userStore.isAuthenticated()) {
      return '/auth';
    }

    if (to.meta.requiresGuest && userStore.isAuthenticated()) {
      return '/';
    }
  });
}
