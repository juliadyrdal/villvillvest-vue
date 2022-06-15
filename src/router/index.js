import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

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
    component: () => import(/* webpackChunkName: "artists" */ '../views/Artists.vue')
  },
  {
    path: '/artist/:id',
    name: 'ArtistDetails',
    component: () => import(/* webpackChunkName: "artist-details" */ '../views/ArtistDetails.vue'),
    props: true
  },
  {
    path: '/om-vill-vill-vest',
    name: 'OmVillVillVest',
    component: () => import(/* webpackChunkName: "om-vill-vill-vest" */ '../views/OmVillVillVest.vue')
  },
  {
    path: '/kontakt-oss',
    name: 'KontaktOss',
    component: () => import(/* webpackChunkName: "kontakt-oss" */ '../views/KontaktOss.vue')
  },
  {
    path: '/ung-delegat',
    name: 'UngDelegat',
    component: () => import(/* webpackChunkName: "ung-delegat" */ '../views/UngDelegat.vue')
  },
  {
    path: '/frivillig',
    name: 'Frivillig',
    component: () => import(/* webpackChunkName: "frivillig" */ '../views/Frivillig.vue')
  },
  {
    path: '/billetter',
    name: 'Billetter',
    component: () => import(/* webpackChunkName: "billetter" */ '../views/Billetter.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  },
})

export default router
