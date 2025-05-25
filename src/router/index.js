import { createRouter, createWebHistory } from 'vue-router'

import beranda from '../views/beranda.vue'
import aksi from '../views/aksi.vue'
import petualangan from '../views/petualangan.vue'
import komedi from '../views/komedi.vue'
import drama from '../views/drama.vue'
import fantasi from '../views/fantasi.vue'
import horor from '../views/horor.vue'
import romantis from '../views/romantis.vue'
import sciFi from '../views/scifi.vue'
import tentang from '../views/tentang.vue'

const routes = [
  { path: '/', component: beranda },
  { path: '/aksi', component: aksi },
  { path: '/petualangan', component: petualangan },
  { path: '/komedi', component: komedi },
  { path: '/drama', component: drama },
  { path: '/fantasi', component: fantasi },
  { path: '/horor', component: horor },
  { path: '/romantis', component: romantis },
  { path: '/scifi', component: scifi },
  { path: '/tentang', component: tentang },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
