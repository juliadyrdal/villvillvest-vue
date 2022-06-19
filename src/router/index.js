import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/artists',
    name: 'Artists',
    component: () => import(/* webpackChunkName: "artists" */ '../views/Artists.vue')
  },
  {
    path: '/artists-schedule',
    name: 'ArtistsSchedule',
    component: () => import(/* webpackChunkName: "artists-schedule" */ '../views/ArtistsSchedule.vue')
  },
  {
    path: '/speakers',
    name: 'Speakers',
    component: () => import(/* webpackChunkName: "speakers" */ '../views/Speakers.vue')
  },
  {
    path: '/conference-schedule',
    name: 'ConfSchedule',
    component: () => import(/* webpackChunkName: "conference-schedule" */ '../views/ConfSchedule.vue')
  },
  {
    path: '/artist/:id/:slug',
    name: 'ArtistDetails',
    component: () => import(/* webpackChunkName: "artist-details" */ '../views/ArtistDetails.vue'),
    props: true
  },
  {
    path: '/speaker/:id',
    name: 'SpeakerDetails',
    component: () => import(/* webpackChunkName: "speaker-details" */ '../views/SpeakerDetails.vue'),
    props: true
  },
  {
    path: '/delegate-tickets',
    name: 'DelegateTickets',
    component: () => import(/* webpackChunkName: "delegate-tickets" */ '../views/DelegateTickets.vue')
  },
  {
    path: '/young-delegate',
    name: 'YoungDelegate',
    component: () => import(/* webpackChunkName: "young-delegate" */ '../views/YoungDelegate.vue')
  },
  {
    path: '/om-vill-vill-vest',
    name: 'OmVillVillVest',
    component: () => import(/* webpackChunkName: "om-vill-vill-vest" */ '../views/OmVillVillVest.vue')
  },
  {
    path: '/our-partners',
    name: 'OurPartners',
    component: () => import(/* webpackChunkName: "our-partners" */ '../views/OurPartners.vue')
  },
  {
    path: '/kontakt-oss',
    name: 'KontaktOss',
    component: () => import(/* webpackChunkName: "kontakt-oss" */ '../views/KontaktOss.vue')
  },
  {
    path: '/venues-and-stages',
    name: 'Venues',
    component: () => import(/* webpackChunkName: "venues-and-stages" */ '../views/Venues.vue')
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
