<template>
<router-link :to="route.path" v-for="route in exampleRoutes" :key="route.path">{{route.name}}</router-link>
</template>

<script setup lang="ts">

import {useRouter} from "vue-router";

const exampleRoutes = useRouter().getRoutes().filter(route => route.path.includes('examples/'))

</script>

<style scoped>

</style>