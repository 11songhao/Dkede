import Layout from '@/layout' 
export default{
    path: '/sku',
    component: Layout,
    redirect: '/sku/sku-class',
    meta: {
      title: '商品管理',
      icon: 'el-icon-goods',
    },
    children: [
      {
        path: 'sku-class',
        component: () => import('@/views/sku/class/index'), // Parent router-view
        name: 'sku-class',
        meta: { title: '商品类型' },
      },
      {
        path: 'sku',
        component: () => import('@/views/sku/sku/index'),
        name: 'sku',
        meta: { title: '商品管理' },
      },
    ],
  }