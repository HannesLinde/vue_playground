<template>
<!--  <ul>
    <li><router-link to="/animations/ball-animation">Ball animation with transition component</router-link></li>
    <li><router-link :to="{name:'class animation'}">Animations just using CSS</router-link></li>
    <li><router-link :to="{name:'sweet transition'}">Sweet Transition</router-link></li>
  </ul>-->
  <ul>
    <li @click="active='ball'">Ball animation with transition component</li>
    <li @click="active='oh-no'">Animations just using CSS</li>
    <li @click="active='sweet'">Sweet Transition</li>
    <li @click="active=''">None</li>
  </ul>
  <sweet-transitions v-if="active=='ball'"></sweet-transitions>
  <ball-animation v-if="active=='oh-no'"></ball-animation>
  <class-animation v-if="active=='sweet'"></class-animation>
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
    classAnimation
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
