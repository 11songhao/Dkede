import Layout from '@/layout' 
export default{
    path: '/policy',
    component: Layout,
    redirect: '/policy/index',
    children: [
      {
        path: 'index',
        name: 'indexPO',
        component: () => import('@/views/policy/index'),
        meta: { title: '策略管理', icon: 'el-icon-table-lamp' },
      },
    ],
  }