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
import slots from '../components/slots/home.vue';
import defaultSlot from '../components/slots/defaultSlots.vue';
import blog from '../components/blogSample/home.vue'
import componentExercise from '../components/slots/componentsExercise/main.vue';
import hooksExample from '../components/lifeCyCleHooks/main.vue';
import modal from '../components/modal/main.vue';
import animations from '../components/animations/main.vue';
import ballAnimation from '../components/animations/ballAnimation/main.vue';
import classAnimations from '../components/animations/classAnimations/main.vue';
import sweetTransitions from '../components/animations/sweetTransitions/main.vue';
import compositionApi from '../components/compositionAPI/compositionAPImain.vue';
import storeBasics from '../components/storeBasics.vue';
import composables from '../components/compositionAPI/composables.vue';
import renderFunction from '../components/renderFunction.vue';
import routingFun from '../components/routingFun.vue';
import moduleStyle from '../components/moduleStyle.vue';
import playground from '../components/playground.vue';
import About from '../views/About.vue'
import LearningResources from '../views/LearningResources.vue'

const routes: Array<RouteRecordRaw> = [
  {path: '/', redirect: '/home'},
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/resources',
    name: 'Learning Resources',
    component: LearningResources
  },
  {
    path: '/testing',
    name: 'Testing',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "testing" */ '../components/testing.vue')
  },
  {
    path: '/directives',
    name: 'Directives',
    component: directives,
    children: [
      /*{
        path: 'intro',
        name: 'Directives Intro',
        component: directivesIntro
      },
      {
        path: 'exercise',
        name: 'Directives Exercise',
        component: directivesExercise
      }*/
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
    path: '/slots',
    name: 'Slots',
    component: slots
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
    path: '/slots/exercise',
    name: 'Slots Exercise',
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
  },
  {
    path: '/composition-api',
    name: 'Composition API',
    component: compositionApi
  },
  {
    path: '/store',
    name: 'Store basics',
    component: storeBasics
  },
  {
    path: '/composition-api/composables',
    name: 'Composables',
    component: composables
  },
  {
    path: '/render-function',
    name: 'Render function',
    component: renderFunction
  },
  {
    path: '/routing-fun',
    name: 'Routing',
    component: routingFun
  },
  {
    path: '/css-modules',
    name: 'Style Modules',
    component: moduleStyle
  },
  {
    path: '/playground',
    name: 'Playground',
    component: playground
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
