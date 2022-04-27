<template>
    <ul class="base-menu">
      <li v-for="route in sortedRoutes" :key="route.path" @click="redirect(route.name)">
          {{route.name}}
      </li>
    </ul>
</template>

<script setup lang="ts">
import router from "@/router";
const routes = [
  {path: '/directives', name: 'Directives'},
  {path: '/methods', name: 'Methods'},
  {path: '/computed-properties', name: 'Computed properties'},
  {path: '/watchers', name: 'Watchers'},
  {path: '/props', name: 'Props basics'},
  {path: '/emit-events', name: 'Emit events'},
  {path: '/slots', name: 'Slots'},
  {path: '/hooks', name: 'Lifecycle hooks'},
  {path: '/animations', name: 'Animations'},
  {path: '/composition-api', name: 'Composition API'},
  {path: '/render-function', name: 'Render function'},
  {path: '/routing',name: 'Routing'},
  {path: '/vuex-basics', name: 'Vuex basics'},
  {path: '/testing',name: 'Testing'},
  {path: '/css-styles',name: 'Styles'},
  {path: '/examples',name: 'Examples'}
];

const sortedRoutes = routes.sort((a,b) => a.name.localeCompare(b.name));

const redirect = (routeName: string) => {
  router.push({name: routeName});
}
</script>
<style lang="scss" scoped>
ul {
  list-style-type: none;
  padding: 1rem;
  margin: 0;
}

li {
  border-bottom: 0.5px solid #eeeeee;
  padding: 0.2rem .2rem;
  display: flex;
  justify-content: flex-start;
  text-align: left;
  color: #42b983;
  text-decoration: none;
  &:hover {
    color: #2c3e50;
  };

  cursor: pointer;
}
</style>
