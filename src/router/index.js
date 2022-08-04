import Vue from 'vue'
import Router from 'vue-router'

import clglRouter from './modules/clglRouter'
import ddglRouter from './modules/ddglRouter'
import dwglRouter from './modules/dwglRouter'
import dzglRouter from './modules/dzglRouter'
import gdglRouter from './modules/gdglRouter'
import ryglRouter from './modules/ryglRouter'
import sbglRouter from './modules/sbglRouter'
import spglRouter from './modules/spglRouter'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true,
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true,
  },

  {
    path: '/',
    component: Layout,
    redirect: '/home',
    children: [
      {
        path: 'home',
        name: 'home',
        component: () => import('@/views/home/index'),
        meta: { title: '帝可得', icon: 'el-icon-s-home' },
      },
    ],
  },
  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true },
]

export const asyncRoutes = [
  gdglRouter,
  dwglRouter,
  sbglRouter,
  ryglRouter,
  spglRouter,
  clglRouter,
  ddglRouter,
  dzglRouter,
]

const createRouter = () =>
  new Router({
    // mode: 'history', // require service support
    scrollBehavior: () => ({ y: 0 }),
    routes: [...constantRoutes, ...asyncRoutes],
  })

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
