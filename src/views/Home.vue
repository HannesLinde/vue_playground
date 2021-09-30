<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>Intro to vue</h1>
    <ul>
      <li v-for="route in routes" :key="route.path"><router-link :to="route.path">{{route.name}}</router-link></li>
    </ul>
    <hr>
    <string-component :little-message="message" :littleList="list"></string-component>
    <string-component little-message="Hallöchen"></string-component>
  </div>
</template>

<script lang="ts">
import StringComponent from '@/components/stringComponent.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Home',
  data () {
    return {
      message: 'Hi there, string component',
      list: ["a","b","c"],
    routes: [
      {path: '/directives', name: 'Directives'},
      {path: '/simple-form', name: 'Simple Form'},
      {path: '/filtering', name: 'Filter Data'},
      {path: '/watchers', name: 'Watchers'},
      {path: '/string-component', name: 'String component'},
      {path: '/comments', name: 'comment-section'},
      {path: '/emit-events', name: 'Emit events'},
      {path: '/slot-machine', name: 'Slot machine'},
      {path: '/blog', name: 'Blog'},
      {path: 'components-exercise', name: 'Components Exercise'},
      {path: '/hooks', name: 'Lifecycle hooks example'},
      {path: '/modal', name: 'Modal and Transition'},
      {path: '/animations', name: 'Animations'},
    ]
    }
},
  components: {
    StringComponent
    
  },
});
</script>
<style lang="scss">
ul {
  list-style-type: none;
  li {
    padding-top: .5rem
  }
  a {
    color: #42B983;

    &.router-link-exact-active {
      color: #42b983;
    }
  }

  a:hover {
    color: dimgrey;
  }
}
</style>
