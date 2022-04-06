<template>
  <div>
    <h4>Here I am!</h4>
    <h4>And here's a joke for you</h4>
    <p>{{joke}}</p>
    <pre>{{joke}}</pre>
  </div>
</template>
<script>
import {defineComponent} from "vue";
import axios from "axios";

export default defineComponent({
  data() {
    return {
      joke: ''
    }
  },
  beforeCreate() {
    console.log("[CHILD COMPONENT] beforeCreate!");
  },
  created() {
    axios
        .get('https://api.chucknorris.io/jokes/random')
        .then(response => this.joke=response.data.value);
    console.log("[CHILD COMPONENT] created!");
  },
  beforeMount() {
    console.log("[CHILD COMPONENT] beforeMount!"
    );
  },
  mounted() {
    console.log("[CHILD COMPONENT] mounted!");
  },
  beforeUnmount() {
    console.log("[CHILD COMPONENT] beforeUnmounted!");
  },
  unmounted() {
    console.log("[CHILD COMPONENT] unmounted!");
  }
})
</script>
