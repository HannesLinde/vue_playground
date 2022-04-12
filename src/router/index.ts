import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue';
import directives from '../views/DirectivesMain.vue';
import directivesIntro from '../views/DirectivesIntro.vue';
import directivesExercise from '../views/DirectivesExercise.vue';
import formSubmission from '../views/examples/FormSubmission.vue';
import Methods from '../views/MethodsBasic.vue';
import ComputedProperties from '../views/ComputedProperties.vue';
import watchers from '../components/watchers.vue';
import PropsBasics from '../views/PropsBasics.vue';
import mainComments from '../views/examples/CommentsSectionMain.vue';
import parentComponent from '../views/EmitsParentComponent.vue';
import slots from '../views/SlotsMain.vue';
import defaultSlot from '../views/SlotsDefaultSlots.vue';
import blog from '../views/BlogMain.vue'
import componentExercise from '../views/SlotsExerciseMain.vue';
import hooksExample from '../views/LifecycleHooksMain.vue';
import modal from '../views/examples/ModalMain.vue';
import animations from '../views/AnimationsMain.vue';
import ballAnimation from '../components/AnimationsBallAnimationMain.vue';
import classAnimations from '../components/AnimationsClassAnimation.vue';
import sweetTransitions from '../components/AnimationsSweetTransitionsMain.vue';
import compositionApi from '../views/CompoAPImain.vue';
import storeBasics from '../components/storeBasics.vue';
import composables from '../views/CompoAPIComposables.vue';
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
    component: watchers
  },
  {
    path: '/props',
    name: 'Props basics',
    component: PropsBasics
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
