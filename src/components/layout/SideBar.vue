<template>
  <div class="sidebar-container">
    <ul>
      <li v-for="route in routes" :key="route.path"><router-link :to="route.path">{{route.name}}</router-link></li>
  </ul>
  </div>
</template>

<script setup lang="ts">
const routes = [
  {path: '/directives', name: 'Directives'},
  {path: '/methods', name: 'Methods'},
  {path: '/computed-properties', name: 'Computed properties'},
  {path: '/watchers', name: 'Watchers'},
  {path: '/props', name: 'Props basics'},
  {path: '/emit-events', name: 'Emit events'},
  {path: '/hooks', name: 'Lifecycle hooks example'},
  {path: '/slots', name: 'Slots'},
  {path: '/animations', name: 'Animations'},
  {path: '/css-styles',name: 'Styles'},
  {path: '/render-function', name: 'Render function'},
  {path: '/composition-api', name: 'Composition API'},
  {path: '/routing',name: 'Routing'},
  {path: '/vuex-basics', name: 'Vuex basics'},
  {path: '/examples', name: 'Examples'},

];
</script>

<style lang="scss" scoped>
a {
  font-weight: bold;
  color: #42b983;
  text-decoration: none;


  &.router-link-exact-active {
    color: #2c3e50;
  }
}

li {
  border-bottom: 0.5px solid #eeeeee;
  padding: 0.2rem 1rem;
  display: flex;
  justify-content: flex-start;
  text-align: left;
}



.sidebar-container {
  padding: 1rem;
  border-right: solid 3px #eeeeee;
}

</style>