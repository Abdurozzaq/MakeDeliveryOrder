
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {name: 'home', path: '', component: () => import('pages/Index.vue') },
      {name: 'settings', path: '/settings', component: () => import('pages/Settings.vue') },
      {name: 'list', path: '/list', component: () => import('pages/DataListSuratJalan.vue') },
      {name: 'edit', path: '/edit', component: () => import('pages/EditSuratJalan.vue') },
      {name: 'parseCsv', path: '/parseCsv', component: () => import('pages/ImportCsv.vue') },
      {name: 'print', path: '/print', component: () => import('pages/PrintPreview.vue') },
      {name: 'trash', path: '/trash', component: () => import('pages/DataListDeletedSuratJalan.vue') },
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
