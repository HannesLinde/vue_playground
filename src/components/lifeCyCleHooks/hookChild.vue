<template>
  <div>
    <h4>Here I am!</h4>
    <h4>And here's a joke for you</h4>
    <p>{{joke}}</p>
    <pre>{{joke}}</pre>
  </div>
</template>
<script setup lang="ts">
import {onActivated, onBeforeMount, onBeforeUnmount, onMounted, onServerPrefetch, onUnmounted, ref} from "vue";
import axios from "axios";

const joke = ref('joke');
const getData = async() => {
  axios
    .get('https://api.chucknorris.io/jokes/random')
    .then(response => {
      console.log("[CHILD COMPONENT] response from server called by [getData()]",response);
      joke.value = response.data.value
    });
  console.log("[CHILD COMPONENT] onActivated!");
};

onBeforeMount(() => {
  console.log("[CHILD COMPONENT] onBeforeMount call [getData()]")
  getData();
});

onMounted(() => {
    console.log("[CHILD COMPONENT] mounted!");
});

onBeforeUnmount (() => {
  console.log("[CHILD COMPONENT] beforeUnmounted!");
});

onUnmounted(() => {
  console.log("[CHILD COMPONENT] unmounted!");
});
</script>
