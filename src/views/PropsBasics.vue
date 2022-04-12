<template>
  <div class="child-component-container">
    <h3>Without props</h3>
    <props-child-component/>
  </div>
  <div class="child-component-container">
    <h3>With props</h3>
    <props-child-component :little-message="'Hi, here come the props'" :little-list="['item1', 'item2', 'item3']"/>
  </div>
</template>

<script setup lang="ts">
import PropsChildComponent from '../components/PropsChildComponent.vue';

</script>

<style lang="scss" scoped>
.child-component-container {
  padding: 1rem;

  h3 {
    padding: .5rem
  }
}
</style>