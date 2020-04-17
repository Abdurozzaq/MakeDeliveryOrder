
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: '/settings', component: () => import('pages/Settings.vue') },
      { path: '/list', component: () => import('pages/DataListSuratJalan.vue') },
      { path: '/edit', component: () => import('pages/EditSuratJalan.vue') },
      { path: '/parseCsv', component: () => import('pages/ImportCsv.vue') },
      { path: '/print', component: () => import('pages/PrintPreview.vue') },
      { path: '/trash', component: () => import('pages/DataListDeletedSuratJalan.vue') },
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
