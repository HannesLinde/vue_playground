import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue';
import directives from '../components/directives.vue';
import directivesIntro from '../components/Directives/directivesIntro.vue';
import directivesExercise from '../components/Directives/directivesExercise.vue';
import formSubmission from '../components/formSubmission.vue';
import filterData from '../components/filterData.vue';
import withMethods from '../components/filterData/withMethods.vue';
import watchers from '../components/watchers.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
 /* {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/!* webpackChunkName: "about" *!/ '../views/About.vue')
  },*/
  {
    path: '/directives',
    name: 'Directives',
    component: directives,
    children: [
      
     
    ]
  },
  {
    path: '/directives/intro',
    name: 'Directives Intro',
    component: directivesIntro
  },
  {
    path: '/directives/exercise',
    name: 'Directives Exercise',
    component: directivesExercise
  },
  {
    path: '/simple-form',
    name: 'Simple Form Submission',
    component: formSubmission
  },
  {
    path: '/filtering',
    name: 'Filtering data',
    component: filterData
  },
  {
    path: '/filtering/with-methods',
    name: 'Filtering data with methods',
    component: withMethods
  },
  {
    path: '/watchers',
    name: 'Watchers',
    component: watchers
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
