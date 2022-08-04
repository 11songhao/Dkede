import Layout from '@/layout' 
export default{
    path: '/user',
    component: Layout,
    redirect: '/user/index',
    name: 'user',
    meta: {
      title: '人员管理',
      icon: 'el-icon-user',
    },
    children: [
      {
        path: 'index',
        component: () => import('@/views/user/index/index'), // Parent router-view
        name: 'index-a',
        meta: { title: '人员列表' },
      },
      {
        path: 'user-task-stats',
        component: () => import('@/views/user/taskStats/index'),
        name: 'user-task-stats',
        meta: { title: '人效统计' },
      },
      {
        path: 'user-work',
        component: () => import('@/views/user/work/index'),
        name: 'user-work',
        meta: { title: '工作量列表' },
      },
    ],
  }