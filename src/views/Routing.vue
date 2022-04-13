<template>
  <div id="routing-page">
  <p>Add the vue-router to your project: <code>yarn add vue-router@4</code></p>
  <p><a target="_blank" href="https://router.vuejs.org/">See docs</a></p>
  <h3>Generally speaking on routing</h3>
  <p>
    Add a dynamic key to all router-view components using <code>$route.fullPath</code>. Ben Hong mentions three categories of routing:
  </p>
    <h3>Lazy loading</h3>
  <p>
    Beyond landing page: import components dynamically!
  </p>
  <button @click="displayRouterObject = !displayRouterObject">
    <span v-if="!displayRouterObject">Click to see full router object</span>
    <span v-if="displayRouterObject">Click to hide router object</span>
  </button>
  <button @click="displayRouteObject = !displayRouteObject">
    <span v-if="!displayRouteObject">Click to see full route object</span>
    <span v-if="displayRouteObject">Click to hide route object</span>
  </button>
  <div class="keys" v-if="!displayRouterObject && !displayRouteObject">
    <pre>
      <h4>Route keys</h4>
      {{routeKeys}}
    </pre>
    <pre>
      <h4>Router keys</h4>
      {{routerKeys}}
    </pre>
  </div>
  <div v-if="displayRouteObject" class="container-for-pre">
    <h3>The route object aka this.$route</h3>
    <pre>
    {{route}}
    </pre>
  </div>
  <div v-if="displayRouterObject" class="container-for-pre">
    <h3>The router object aka this.$router</h3>
    <pre>
    {{router}}
    </pre>
  </div>
  </div>
</template>
<script setup lang="ts">
import {ref} from "vue";
import {useRoute, useRouter} from "vue-router";

const router = ref(useRouter());
const route = ref(useRoute());

const routeKeys = Object.keys(route.value);
const routerKeys = Object.keys(router.value);

console.log(routerKeys);
console.log(router);

const displayRouteObject = ref(false);
const displayRouterObject = ref(false);

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
  background-color: #bebab0;
  margin: 1rem;
  border-radius: 5px;
  border: solid .5px #1a1a1a;
  text-align: left;
}

.container-for-pre{
  display: flex;
  flex-direction: column;
  align-items: center;
  pre {
      width: 30rem;
    }
}
.keys {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
</style>