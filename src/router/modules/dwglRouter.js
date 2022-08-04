import Layout from '@/layout' 
export default{
    path: '/node',
    component: Layout,
    redirect: '/node/region',
    meta: {
      title: '点位管理',
      icon: 'el-icon-map-location',
    },
    children: [
      {
        path: 'region',
        component: () => import('@/views/address/region/index'), // Parent router-view
        name: 'region',
        meta: { title: '区域管理' },
      },
      {
        path: 'node',
        component: () => import('@/views/address/node/index'),
        name: 'node',
        meta: { title: '点位管理' },
      },
      {
        path: 'partner',
        component: () => import('@/views/address/partner/index'),
        name: 'partner',
        meta: { title: '合作商管理' },
      },
    ],
  }