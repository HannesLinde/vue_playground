<template>
<div>
  <h2>Some examples</h2>
  <p v-for="(route,index) in exampleRoutes" :key="index">
    <router-link :to="route.path">{{route.name}}</router-link>
  </p>
</div>
</template>

<script setup lang="ts">
import {ref} from "vue";
import {useRouter} from "vue-router";

const exampleRoutes = useRouter().getRoutes().filter(route => route.path.includes('examples/'));

</script>

<style scoped>
p {
  margin: 1rem;
}

</style>