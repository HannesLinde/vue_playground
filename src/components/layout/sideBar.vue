<template>
  <div class="sidebar-container">
    <ul>
      <li v-for="route in sortedRoutes" :key="route.path"><router-link :to="route.path">{{route.name}}</router-link></li>
  </ul>
  </div>
</template>

<script setup lang="ts">
const routes = [
  {path: '/directives', name: 'Directives'},
  {path: '/methods', name: 'Basic methods'},
  {path: '/computed-properties', name: 'Computed properties'},
  {path: '/watchers', name: 'Watchers'},
  {path: '/props', name: 'Props basics'},
  {path: '/emit-events', name: 'Emit events'},
  {path: '/slots', name: 'Slots'},
  {path: '/hooks', name: 'Lifecycle hooks example'},
  {path: '/animations', name: 'Animations'},
  {path: '/composition-api', name: 'Composition API'},
  {path: '/render-function', name: 'Render function'},
  {path: '/routing',name: 'Routing'},
  {path: '/vuex-basics', name: 'Store basics'},
  {path: '/testing',name: 'Testing'},
  {path: '/css-styles',name: 'Styles'},
  {path: '/examples',name: 'Examples'}
];

const sortedRoutes = routes.sort((a,b) => a.name.localeCompare(b.name));
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