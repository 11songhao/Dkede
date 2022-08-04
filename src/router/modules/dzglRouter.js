import Layout from '@/layout' 
export default{
    path: '/report',
    component: Layout,
    children: [
      {
        path: 'report',
        name: 'report',
        component: () => import('@/views/report/index'),
        meta: { title: '对账管理', icon: 'el-icon-data-analysis' },
      },
    ],
  }