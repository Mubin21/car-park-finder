
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
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
