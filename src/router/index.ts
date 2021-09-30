import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue';
import directives from '../components/directives.vue';
import directivesIntro from '../components/Directives/directivesIntro.vue';
import directivesExercise from '../components/Directives/directivesExercise.vue';
import formSubmission from '../components/formSubmission.vue';
import filterData from '../components/filterData.vue';
import withMethods from '../components/filterData/withMethods.vue';
import withComputed from '../components/filterData/withComputed.vue';
import watchers from '../components/watchers.vue';
import stringComponent from '../components/stringComponent.vue';
import mainComments from '../components/commentSection/mainComments.vue';
import parentComponent from '../components/emitEvents/parentComponent.vue';
import slotMachine from '../components/slotMachine/home.vue';
import defaultSlot from '../components/slotMachine/defaultSlots.vue';
import blog from '../components/blogSample/home.vue'
import componentExercise from '../components/slotMachine/componentsExercise/main.vue';
import hooksExample from '../components/lifeCyCleHooks/main.vue';
import modal from '../components/modal/main.vue';
import animations from '../components/animations/main.vue';
import ballAnimation from '../components/animations/ballAnimation/main.vue';
import classAnimations from '../components/animations/classAnimations/main.vue';
import sweetTransitions from '../components/animations/sweetTransitions/main.vue';

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
    path: '/filtering/with-computed',
    name: 'Filtering data with computed',
    component: withComputed
  },
  {
    path: '/watchers',
    name: 'Watchers',
    component: watchers
  },
  {
    path: '/string-component',
    name: 'string component',
    component: stringComponent
  },
  {
    path: '/comments',
    name: 'comment-section',
    component: mainComments
  },
  {
    path: '/emit-events',
    name: 'Emit event',
    component: parentComponent
  },
  {
    path: '/slot-machine',
    name: 'Slot machine',
    component: slotMachine
  },
  {
    path: '/default-slot',
    name: 'Slot default',
    component: defaultSlot
  },
  {
    path: '/blog',
    name: 'Blog',
    component: blog
  },
  {
    path: '/components-exercise',
    name: 'Components Exercise',
    component: componentExercise
  },
  {
    path: '/hooks',
    name: 'Lifecycle hooks example',
    component: hooksExample
  },
  {
    path: '/modal',
    name: 'Modal and Transition',
    component: modal
  },
  {
    path: '/animations',
    name: 'animations',
    component: animations
  },
  {
    path: '/animations/ball-animation',
    name: 'ball animation',
    component: ballAnimation
  },
  {
    path: '/animations/class-animation',
    name: 'class animation',
    component: classAnimations
  },
  {
    path: '/animations/sweet-transition',
    name: 'sweet transition',
    component: sweetTransitions
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
