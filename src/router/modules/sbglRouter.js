import Layout from '@/layout' 
export default{
    path: '/vm',
    component: Layout,
    redirect: '/vm/index',
    name: 'vm',
    meta: {
      title: '设备管理',
      icon: 'el-icon-lollipop',
    },
    children: [
      {
        path: 'index',
        component: () => import('@/views/vm/index/index'), // Parent router-view
        name: 'index',
        meta: { title: '设备管理' },
      },
      {
        path: 'status',
        component: () => import('@/views/vm/status/index'),
        name: 'status',
        meta: { title: '设备状态' },
      },
      {
        path: 'type',
        component: () => import('@/views/vm/type/index'),
        name: 'type',
        meta: { title: '设置类型管理' },
      },
    ],
  }