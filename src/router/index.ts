import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue';
import Directives from '../views/DirectivesMain.vue';
import DirectivesIntro from '../views/DirectivesIntro.vue';
import DirectivesExercise from '../views/DirectivesExercise.vue';
import Methods from '../views/MethodsBasic.vue';
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
    path: '/directives',
    name: 'Directives',
    component: Directives,
      },
  {
    path: '/directives/intro',
    name: 'Directives Intro',
    component: DirectivesIntro
  },
  {
    path: '/directives/exercise',
    name: 'Directives Exercise',
    component: DirectivesExercise
  },
  {
    path: '/examples/form',
    name: 'Form Submission',
    component: () => import(/* webpackChunkName: 'formSubmission' */ '../views/examples/FormSubmission.vue')
  },
  {
    path: '/methods',
    name: 'Methods',
    component: Methods
  },
  {
    path: '/computed-properties',
    name: 'Computed properties',
    component: ComputedProperties
  },
  {
    path: '/watchers',
    name: 'Watchers',
    component: Watchers
  },
  {
    path: '/props',
    name: 'Props basics',
    component: PropsBasics
  },
  {
    path: '/examples/comments',
    name: 'Comment Section',
    component: () => import(/* webpackChunkName: 'commentsSection' */ '../views/examples/CommentsSectionMain.vue')
  },
  {
    path: '/emit-events',
    name: 'Emit event',
    component: EmitsParentComponent
  },
  {
    path: '/slots',
    name: 'Slots',
    component: Slots
  },
  {
    path: '/default-slot',
    name: 'Slot default',
    component: DefaultSlot
  },
  {
    path: '/examples/blog',
    name: 'Blog',
    component: () => import(/* webpackChunkName: 'blog' */ '../views/examples/BlogMain.vue')
  },
  {
    path: '/slots/exercise',
    name: 'Slots Exercise',
    component: SlotsExercise
  },
  {
    path: '/hooks',
    name: 'Lifecycle hooks',
    component: hooksExample
  },
  {
    path: '/examples/modal',
    name: 'Modal and Transition',
    component: Modal
  },
  {
    path: '/animations',
    name: 'animations',
    component: Animations
  },
  {
    path: '/composition-api',
    name: 'Composition API',
    component: CompositionApi
  },
  {
    path: '/vuex-basics',
    name: 'Store basics',
    component: VuexBasics
  },
  {
    path: '/composition-api/composables',
    name: 'Composables',
    component: Composables
  },
  {
    path: '/render-function',
    name: 'Render function',
    component: RenderFunction
  },
  {
    path: '/routing',
    name: 'Routing',
    component: Routing
  },
  {
    path: '/css-styles',
    name: 'CSS Styles',
    component: Styles
  },
  {
    path: '/examples',
    name: 'Examples',
    component: Examples
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
