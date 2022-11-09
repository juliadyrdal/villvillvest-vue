import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'

const metaTemplate = ' | Vill Vill Vest'
const editionYear = '2022'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      publicRoute: true,
      title: `Vill Vill Vest Festival ${editionYear}`,
      metaTags: [
        {
          name: 'description',
          content: 'Home page'
        },
        {
          property: 'og:description',
          content: 'Home page'
        }
      ]
    }
  },
  {
    path: '/artister',
    name: 'Artists',
    component: () => import(/* webpackChunkName: "artists" */ '../views/Artists.vue'),
    meta: {
      publicRoute: true,
      title: `Artister ${metaTemplate}`,
    }
  },
  {
    path: '/artistprogram',
    name: 'ArtistsSchedule',
    component: () => import(/* webpackChunkName: "artists-schedule" */ '../views/ArtistsSchedule.vue'),
    meta: {
      publicRoute: true,
      title: `Artistprogram ${metaTemplate}`,
    }
  },
  {
    path: '/speakers',
    name: 'Speakers',
    component: () => import(/* webpackChunkName: "speakers" */ '../views/Speakers.vue'),
    meta: {
      publicRoute: true,
      title: `Konferanse ${metaTemplate}`,
    }
  },
  {
    path: '/konferanseprogram',
    name: 'ConfSchedule',
    component: () => import(/* webpackChunkName: "conference-schedule" */ '../views/ConfSchedule.vue'),
    meta: {
      publicRoute: true,
      title: `Konferanseprogram ${metaTemplate}`,
      metaTags: [
        {
          name: 'description',
          content: 'This is the schedule for the 2022 conference'
        },
        {
          property: 'og:description',
          content: 'This is an open graph description of the 2022 conference schedule'
        }
      ]
    }
  },
  {
    path: '/artist/:id/:slug',
    name: 'ArtistDetails',
    component: () => import(/* webpackChunkName: "artist-details" */ '../views/ArtistDetails.vue'),
    props: true,
    meta: {
      publicRoute: true,
      title: `slug ${metaTemplate}`,
      metaTags: [
        {
          name: 'description',
          content: `slug ${metaTemplate}`
        },
        {
          property: 'og:description',
          content: `slug ${metaTemplate}`
        }
      ]
    }
  },
  {
    path: '/speaker/:id/:slug',
    name: 'SpeakerDetails',
    component: () => import(/* webpackChunkName: "speaker-details" */ '../views/SpeakerDetails.vue'),
    props: true,
    meta: {
      publicRoute: true,
      title: `slug ${metaTemplate}`,
      metaTags: [
        {
          name: 'description',
          content: `slug ${metaTemplate}`
        },
        {
          property: 'og:description',
          content: `slug ${metaTemplate}`
        }
      ]
    }
  },
  {
    path: '/delegate-tickets',
    name: 'DelegateTickets',
    component: () => import(/* webpackChunkName: "delegate-tickets" */ '../views/DelegateTickets.vue'),
    meta: {
      publicRoute: true,
      title: `Delegate tickets ${metaTemplate}`,
    }
  },
  {
    path: '/ung-delegat',
    name: 'YoungDelegate',
    component: () => import(/* webpackChunkName: "young-delegate" */ '../views/YoungDelegate.vue'),
    meta: {
      publicRoute: true,
      title: `Ung delegat ${metaTemplate}`,
    }
  },
  {
    path: '/om-vill-vill-vest',
    name: 'OmVillVillVest',
    component: () => import(/* webpackChunkName: "om-vill-vill-vest" */ '../views/OmVillVillVest.vue'),
    meta: {
      publicRoute: true,
      title: `Om Vill Vill Vest ${metaTemplate}`,
    }
  },
  {
    path: '/partnere',
    name: 'OurPartners',
    component: () => import(/* webpackChunkName: "our-partners" */ '../views/OurPartners.vue'),
    meta: {
      publicRoute: true,
      title: `Våre partnere ${metaTemplate}`,
    }
  },
  {
    path: '/kontakt-oss',
    name: 'KontaktOss',
    component: () => import(/* webpackChunkName: "kontakt-oss" */ '../views/KontaktOss.vue'),
    meta: {
      publicRoute: true,
      title: `Kontakt oss ${metaTemplate}`,
    }
  },
  {
    path: '/frivillig',
    name: 'Frivillig',
    component: () => import(/* webpackChunkName: "frivillig" */ '../views/Frivillig.vue'),
    meta: {
      publicRoute: true,
      title: `Frivillig ${metaTemplate}`,
    }
  },
  {
    path: '/billetter',
    name: 'Billetter',
    component: () => import(/* webpackChunkName: "billetter" */ '../views/Billetter.vue'),
    meta: {
      publicRoute: true,
      title: `Billetter ${metaTemplate}`,
    }
  },
  {
    path: '/ledig-stilling',
    name: 'LedigStilling',
    component: () => import(/* webpackChunkName: "ledig-stilling" */ '../views/LedigStilling.vue'),
    meta: {
      publicRoute: true,
      title: `Ledig stilling ${metaTemplate}`,
    }
  },
  {
    path: '/venues-og-scener',
    name: 'VenuesOgScener',
    component: () => import(/* webpackChunkName: "ledig-stilling" */ '../views/VenuesOgScener.vue'),
    meta: {
      publicRoute: true,
      title: `Venues og scener ${metaTemplate}`,
    }
  },
  {
    path: '/konferanse-venues',
    name: 'Venues',
    component: () => import(/* webpackChunkName: "ledig-stilling" */ '../views/Venues.vue'),
    meta: {
      publicRoute: true,
      title: `Konferansevenues ${metaTemplate}`,
    }
  },
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

// This callback runs before every route change, including on page load.
router.beforeEach((to, from, next) => {
  // This goes through the matched routes from last to first, finding the closest route with a title.
  // e.g., if we have `/some/deep/nested/route` and `/some`, `/deep`, and `/nested` have titles,
  // `/nested`'s will be chosen.
  const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title);

  // Find the nearest route element with meta tags.
  const nearestWithMeta = to.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);

  const previousNearestWithMeta = from.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);

  // If a route with a title was found, set the document (page) title to that value.
  if(nearestWithTitle) {
    document.title = nearestWithTitle.meta.title;
  } else if(previousNearestWithMeta) {
    document.title = previousNearestWithMeta.meta.title;
  }

  // Remove any stale meta tags from the document using the key attribute we set below.
  Array.from(document.querySelectorAll('[data-vue-router-controlled]')).map(el => el.parentNode.removeChild(el));

  // Skip rendering meta tags if there are none.
  if(!nearestWithMeta) return next();

  // Turn the meta tag definitions into actual elements in the head.
  nearestWithMeta.meta.metaTags.map(tagDef => {
    const tag = document.createElement('meta');

    Object.keys(tagDef).forEach(key => {
      tag.setAttribute(key, tagDef[key]);
    });

    // We use this to track which meta tags we create so we don't interfere with other ones.
    tag.setAttribute('data-vue-router-controlled', '');

    return tag;
  })
  // Add the meta tags to the document head.
  .forEach(tag => document.head.appendChild(tag));

  next();
});

export default router
