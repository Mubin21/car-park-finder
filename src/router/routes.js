
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: 'map', component: () => import('src/pages/Map.vue') },
      { path: 'map2', component: () => import('pages/UserDashboardMobile.vue') },

    ]
  },
  {
    path: '/admin',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: 'maps', component: () => import('src/pages/Admin.vue') },
      { path: 'dashboard', component: () => import('pages/Admin.vue') },
    ]
  },
  {
    path: '/auth',
    component: () => import('layouts/BlankLayout.vue'),
    children: [
      { path: 'register', component: () => import('pages/Register.vue') },
      { path: 'confirmPassword', component: () => import('pages/Register2.vue') },
      { path: 'login', component: () => import('pages/Login.vue') }

    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
