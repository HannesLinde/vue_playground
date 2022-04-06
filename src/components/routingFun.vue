<template>
  <h1>Vue Router</h1>
  <h2>Generally speaking on routing</h2>
  <p>
    Add a dynamic key to all router-view components using <code>$route.fullPath</code>. Ben Hong mentions three categories of routing:
  </p>
  <ul>
    <li>View components</li>
    <li>Layout components</li>
    <li>Routes</li>
  </ul>
  <h3>Lazy loading</h3>
  <p>
    Beyond landing page: import components dynamically!
  </p>
  <h3>this.$router</h3>
  <h4>Router keys</h4>
  <p v-for="objectKey in routerKeys" :key="objectKey">{{objectKey}}</p>
  <pre>
    {{router}}
  </pre>
  <h3>this.$route</h3>
  <div>
    <pre>{{route}}</pre>
    <h4>Route keys</h4>
    <p v-for="objectKey in routeKeys" :key="objectKey">{{objectKey}}</p>
  </div>
</template>
<script lang="ts">
import {defineComponent, reactive, toRefs} from "vue";
import {useRoute, useRouter} from "vue-router";

export default defineComponent({
  setup() {
    const router = useRouter();
    const route = useRoute();

    const state = reactive({
      routeKeys: Object.keys(route),
      routerKeys: Object.keys((router))
    })

    return {
      ...toRefs(
          state
      ),
      route,
      router,
    }
  }
})
</script>
<style lang="scss" scoped>
ul {
  list-style-type: decimal;
  padding: 1rem;
  display:flex;
  flex-direction: column;
  align-items: center;
}
</style>