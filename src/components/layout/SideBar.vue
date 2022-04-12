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
  {path: '/simple-form', name: 'Simple Form'},
  {path: '/methods', name: 'Basic methods'},
  {path: '/computed-properties', name: 'Computed properties'},
  {path: '/watchers', name: 'Watchers'},
  {path: '/props', name: 'Props basics'},
  {path: '/comments', name: 'comment-section'},
  {path: '/emit-events', name: 'Emit events'},
  {path: '/slots', name: 'Slots'},
  {path: '/blog', name: 'Blog'},
  {path: '/hooks', name: 'Lifecycle hooks example'},
  {path: '/modal', name: 'Modal and Transition'},
  {path: '/animations', name: 'Animations'},
  {path: '/composition-api', name: 'Composition API'},
  {path: '/store', name: 'Store basics'},
  {path: '/render-function', name: 'Render function'},
  {path: '/routing-fun',name: 'Routing'},
  {path: '/css-styles',name: 'Styles'},
  {path: '/playground',name: 'Playground'},
  {path: '/testing',name: 'testing'}
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