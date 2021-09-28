<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>Intro to vue</h1>
    <ul>
      <li v-for="route in routes" :key="route.path"><router-link :to="route.path">{{route.route}}</router-link></li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Home',
  data () {
    return {
    routes: [
      {path: '/directives', route: 'Directives'},
      {path: '/simple-form', route: 'Simple Form'},
      {path: '/filtering', route: 'Filter Data'},
      { path: '/watchers', route: 'Watchers'},
    ]
    }
},
  components: {
    
  },
});
</script>
<style lang="scss">
ul {
  list-style-type: none;
  li {
    padding-top: .5rem
  }
  a:hover {
    color: dimgrey;
  }
}
</style>
