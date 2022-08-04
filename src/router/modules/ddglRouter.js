import Layout from '@/layout' 
export default  {
    path: '/order',
    component: Layout,
    redirect: '/order/order',
    children: [
      {
        path: 'order',
        name: 'order',
        component: () => import('@/views/order/index'),
        meta: { title: '订单管理', icon: 'el-icon-collection' },
      },
    ],
  }