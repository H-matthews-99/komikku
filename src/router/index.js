import { createRouter, createWebHistory } from 'vue-router'

import Beranda from '../views/Beranda.vue'
import Aksi from '../views/Aksi.vue'
import Petualangan from '../views/Petualangan.vue'
import Komedi from '../views/Komedi.vue'
import Drama from '../views/Drama.vue'
import Fantasi from '../views/Fantasi.vue'
import Horor from '../views/Horor.vue'
import Romantis from '../views/Romantis.vue'
import SciFi from '../views/SciFi.vue'
import Tentang from '../views/Tentang.vue'

const routes = [
  { path: '/', component: Beranda },
  { path: '/aksi', component: Aksi },
  { path: '/petualangan', component: Petualangan },
  { path: '/komedi', component: Komedi },
  { path: '/drama', component: Drama },
  { path: '/fantasi', component: Fantasi },
  { path: '/horor', component: Horor },
  { path: '/romantis', component: Romantis },
  { path: '/scifi', component: SciFi },
  { path: '/tentang', component: Tentang },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
