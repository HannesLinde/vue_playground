<template>
  <ul>
    <li @click="active !== 'ball' ? active = 'ball' : active=''">Ball animation with transition component</li>
    <li @click="active !== 'class' ? active = 'class' : active = ''">Animations just using CSS</li>
    <li @click="active !== 'sweet' ? active = 'sweet' : active = ''">Sweet Transition using vue specific transition tags</li>
    <li @click="active !== 'js' ? active = 'js' : active = ''">Javascript</li>
  </ul>
  <Component :is="selectedComponent"></Component>
  <div v-if="active === 'js'">
    JavaScript animations are best done with libraries like greensock. However, the really cool packages are not available for free and therefore the animation in this repo is not working.
  </div>
  </template>

<script setup lang="ts">
import {computed, ref} from "vue";
import SweetTransitions from "@/components/AnimationsSweetTransitionsMain.vue";
import BallAnimation from "@/components/AnimationsBallAnimationMain.vue";
import ClassAnimation from "@/components/AnimationsClassAnimation.vue";

const active = ref('');

const selectedComponent = computed((): any => {
  if (active.value === 'ball') return BallAnimation;
  if (active.value === 'class') return ClassAnimation;
  if (active.value === 'sweet') return SweetTransitions;
  return '';
});
</script>

<style lang="scss" scoped>
ul {
  list-style-type: none;
  margin: 1rem;
}
li {
  padding: 1rem;
  background-color: #555555;
  border-bottom: solid 1px black;
}
</style>
