<template>
<div class="footer-container">
  <ul>
    <li v-for="route in routes" :key="route.route">
      <router-link :to="route.route">{{route.text}}</router-link>
    </li>
  </ul></div>
</template>

<script setup lang="ts">
const routes = [
  {route: 'about', text: 'About me'},
  {route: 'resources', text: 'Learning ressources'},
  {route: 'home', text: 'Home'}
]
</script>

<style lang="scss" scoped>
ul {
  list-style-type: none;
  display: flex;
  justify-content: space-evenly;
}

.footer-container{
    padding: 1rem;
    border-top: solid 3px #eeeeee;
}
</style>