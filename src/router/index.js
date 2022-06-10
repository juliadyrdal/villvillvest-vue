import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Artists from '../views/Artists.vue'
import ArtistDetails from '../views/ArtistDetails.vue'
import OmVillVillVest from '../views/OmVillVillVest.vue'
import KontaktOss from '../views/KontaktOss.vue'
import UngDelegat from '../views/UngDelegat.vue'
import Frivillig from '../views/Frivillig.vue'
import Billetter from '../views/Billetter.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/artists',
    name: 'Artists',
    component: Artists
  },
  {
    path: '/artist/:id',
    name: 'ArtistDetails',
    component: ArtistDetails,
    props: true
  },
  {
    path: '/om-vill-vill-vest',
    name: 'OmVillVillVest',
    component: OmVillVillVest
  },
  {
    path: '/kontakt-oss',
    name: 'KontaktOss',
    component: KontaktOss
  },
  {
    path: '/ung-delegat',
    name: 'UngDelegat',
    component: UngDelegat
  },
  {
    path: '/frivillig',
    name: 'Frivillig',
    component: Frivillig
  },
  {
    path: '/billetter',
    name: 'Billetter',
    component: Billetter
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
