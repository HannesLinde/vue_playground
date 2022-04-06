<template>
<!--  <ul>
    <li><router-link to="/animations/ball-animation">Ball animation with transition component</router-link></li>
    <li><router-link :to="{name:'class animation'}">Animations just using CSS</router-link></li>
    <li><router-link :to="{name:'sweet transition'}">Sweet Transition</router-link></li>
  </ul>-->
  <ul>
    <li @click="active='ball'">Ball animation with transition component</li>
    <li @click="active='css'">Animations just using CSS</li>
    <li @click="active='sweet'">Sweet Transition using vue specific transition tags</li>
    <li @click="active='js'">Javascript</li>
    <li @click="active=''">None</li>
  </ul>
  <sweet-transitions v-if="active==='sweet'"></sweet-transitions>
  <ball-animation v-if="active==='ball'"></ball-animation>
  <class-animation v-if="active==='css'"></class-animation>
  <div v-if="active === 'js'">
    JavaScript animations are best done with libraries like greensock. However, the really cool packages are not available for free and therefore the animation in this repo is not working.
  </div>
  </template>
<script lang="ts">
import {defineComponent} from "vue";
import sweetTransitions from "@/components/animations/sweetTransitions/main.vue";
import ballAnimation from "@/components/animations/ballAnimation/main.vue";
import classAnimation from "@/components/animations/classAnimations/main.vue";

export default defineComponent({
  data() {
    return {
      active: ''
    }
  },
  components: {
    sweetTransitions,
    ballAnimation,
    classAnimation,
  }
})
</script>
<style lang="scss" scoped>
li {
  padding: 1rem;
  background-color: #555555;
  border-bottom: solid 1px black;
}
</style>
