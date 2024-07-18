export const constantRoutes = [
  {
    path: '/',
    component: () => import('@/layout/basic-layout/index.vue'),
    children: [
      {
        path: '/',
        component: () => import('@/views/home/index.vue'),
        meta: { title: '首页' },
      },
    ],
  },
];
