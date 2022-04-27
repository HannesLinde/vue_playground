import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue';
import Directives from '../views/DirectivesMain.vue';
import DirectivesIntro from '../views/DirectivesIntro.vue';
import DirectivesExercise from '../views/DirectivesExercise.vue';
import ComputedProperties from '../views/ComputedProperties.vue';
import Watchers from '../views/Watchers.vue';
import PropsBasics from '../views/PropsBasics.vue';
import EmitsParentComponent from '../views/EmitsParentComponent.vue';
import Slots from '../views/SlotsMain.vue';
import DefaultSlot from '../views/SlotsDefaultSlots.vue';
import hooksExample from '../views/LifecycleHooksMain.vue';
import Modal from '../views/examples/ModalMain.vue';
import Animations from '../views/AnimationsMain.vue';
import CompositionApi from '../views/CompoAPImain.vue';
import VuexBasics from '../views/VuexBasics.vue';
import Composables from '../views/CompoAPIComposables.vue';
import RenderFunction from '../views/RenderFunction.vue';
import Routing from '../views/Routing.vue';
import Styles from '../views/Styles.vue';
import About from '../views/About.vue'
import LearningResources from '../views/LearningResources.vue'
import SlotsExercise from '../views/SlotsExerciseMain.vue'
import Examples from '../views/Examples.vue'

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
    component: () => import(/* webpackChunkName: "testing" */ '../views/Testing.vue')
  },
  {
    path: '/testing/inputs',
    name: 'Testing inputs',
    component: () => import(/* webpackChunkName: "testingInputs" */ '@/views/Testing_Inputs.vue')
  },
  {
    path: '/directives',
    name: 'Directives',
    component: () => import(/* webpackChunkName: "directives" */ '@/views/DirectivesMain.vue')
      },
  {
    path: '/directives/intro',
    name: 'Directives Intro',
    component: () => import(/* webpackChunkName: "directivesIntro" */ '@/views/DirectivesIntro.vue')
  },
  {
    path: '/directives/exercise',
    name: 'Directives Exercise',
    component: () => import(/* webpackChunkName: "directivesExercise" */ '@/views/DirectivesExercise.vue')
  },
  {
    path: '/examples/form',
    name: 'Form Submission',
    component: () => import(/* webpackChunkName: 'formSubmission' */ '../views/examples/FormSubmission.vue')
  },
  {
    path: '/methods',
    name: 'Methods',
    component: () => import(/* webpackChunkName: "methods" */ '@/views/MethodsBasic.vue')
  },
  {
    path: '/computed-properties',
    name: 'Computed properties',
    component: () => import(/* webpackChunkName: "computedProperties" */ '@/views/ComputedProperties.vue')
  },
  {
    path: '/watchers',
    name: 'Watchers',
    component: () => import(/* webpackChunkName: "watchers" */ '@/views/Watchers.vue')
  },
  {
    path: '/props',
    name: 'Props basics',
    component: () => import(/* webpackChunkName: "propsBasics" */ '@/views/PropsBasics.vue')
  },
  {
    path: '/examples/comments',
    name: 'Comment Section',
    component: () => import(/* webpackChunkName: 'commentsSection' */ '../views/examples/CommentsSectionMain.vue')
  },
  {
    path: '/emit-events',
    name: 'Emit events',
    component: () => import(/* webpackChunkName: "emitsParent" */ '@/views/EmitsParentComponent.vue')
  },
  {
    path: '/slots',
    name: 'Slots',
    component: () => import(/* webpackChunkName: "slots" */ '@/views/SlotsMain.vue')
  },
  {
    path: '/default-slot',
    name: 'Slot default',
    component: () => import(/* webpackChunkName: "slotDefault" */ '@/views/SlotsDefaultSlots.vue')
  },
  {
    path: '/slots/exercise',
    name: 'Slots Exercise',
    component: () => import(/* webpackChunkName: "slotExercise" */ '@/views/SlotsExerciseMain.vue')
  },
  {
    path: '/examples/blog',
    name: 'Blog',
    component: () => import(/* webpackChunkName: 'blog' */ '../views/examples/BlogMain.vue')
  },
  {
    path: '/hooks',
    name: 'Lifecycle hooks',
    component: () => import(/* webpackChunkName: "lifecycleHooks" */ '@/views/LifecycleHooksMain.vue')
  },
  {
    path: '/examples/modal',
    name: 'Modal and Transition',
    component: () => import(/* webpackChunkName: "modal" */ '@/views/examples/ModalMain.vue')
  },
  {
    path: '/animations',
    name: 'Animations',
    component: () => import(/* webpackChunkName: "animations" */ '@/views/AnimationsMain.vue')
  },
  {
    path: '/composition-api',
    name: 'Composition API',
    component: () => import(/* webpackChunkName: "compositionAPI" */ '@/views/CompoAPImain.vue')
  },
  {
    path: '/vuex-basics',
    name: 'Vuex basics',
    component: () => import(/* webpackChunkName: "vuexBasics" */ '@/views/VuexBasics.vue')
  },
  {
    path: '/composition-api/composables',
    name: 'Composables',
    component: () => import(/* webpackChunkName: "composables" */ '@/views/CompoAPIComposables.vue')
  },
  {
    path: '/render-function',
    name: 'Render function',
    component: () => import(/* webpackChunkName: "renderFunction" */ '@/views/RenderFunction.vue')
  },
  {
    path: '/routing',
    name: 'Routing',
    component: () => import(/* webpackChunkName: "routing" */ '@/views/Routing.vue')
  },
  {
    path: '/styles',
    name: 'Styles',
    component: () => import(/* webpackChunkName: "cssStyles" */ '@/views/Styles.vue')
  },
  {
    path: '/css-styles/inputs',
    name: 'Input styles',
    component: () => import(/*webpackChunkName: "inputStyles" */ '@/views/StyleInputs.vue')
  },
  {
    path: '/examples',
    name: 'Examples',
    component: () => import(/* webpackChunkName: "examples" */ '@/views/Examples.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
