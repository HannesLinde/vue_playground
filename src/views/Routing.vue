<template>
  <h1>Vue Router</h1>
  <p>Add the vue-router to your project: <code>yarn add vue-router@4</code></p>
  <p><a target="_blank" href="https://router.vuejs.org/">See docs</a></p>
  <h2>Generally speaking on routing</h2>
  <p>
    Add a dynamic key to all router-view components using <code>$route.fullPath</code>. Ben Hong mentions three categories of routing:
  </p>
  <h3>Lazy loading</h3>
  <p>
    Beyond landing page: import components dynamically!
  </p>
  <button @click="displayRouterObject = !displayRouterObject">Display router object</button>
  <button @click="displayRouteObject = !displayRouteObject">Display route object</button>
  <div id="keys-block">
    <pre><h4>Router keys</h4>{{routerKeys}}</pre>
    <pre><h4>Route keys</h4>{{routeKeys}}</pre>
  </div>
  <div id="container-route-object" v-if="displayRouteObject">
    <h3>Full object of useRoute()</h3>
    <pre>{{route}}</pre>
  </div>
  <div id="container-router-object" v-if="displayRouterObject">
    <h3>Full object of useRouter()</h3>
    <pre>
      {{router}}
    </pre>
  </div>
</template>
<script setup lang="ts">
import {ref} from "vue";
import {useRoute, useRouter} from "vue-router";

const router = useRouter();
const route = useRoute();

// eslint-disable-next-line no-undef
const displayRouterObject = ref(false);
const displayRouteObject = ref(false);

const routerKeys = Object.keys(router);
const routeKeys = Object.keys(route);


</script>
<style lang="scss" scoped>
ul {
  list-style-type: decimal;
  padding: 1rem;
  display:flex;
  flex-direction: column;
  align-items: center;
}

pre {
  background-color: lightgreen;
  border-radius: .5rem;
  padding: 1rem;
}

#keys-block {
  margin: 1rem;
  display: grid;
  grid-template-columns: auto auto;
  gap: 1rem;
}
</style>