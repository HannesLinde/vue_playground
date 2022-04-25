<template>
  <div id="compo-api-main" data-test="compo-api-main">
    <p id="compo-api-intro">Composition API helps us to encapsulate bits of functionality that we want to reuse. Write reusable functional code in seperate files (e.g. src/composables/...) and import respective functions in your component. THen include the functions/values in the setup directive.</p>
    <router-link :to="{name: 'Composables'}">Composable sample</router-link>
    <h3>Order from: <strong>{{ restaurantName }}</strong></h3>
    <p>Options</p>
    <ul>
      <li v-for="option in options" :key="option">{{ option }}</li>
      <p>Delivery time: {{ deliveryTime }} minutes</p>
      <p v-if="freeDelivery">Free Delivery!</p>
    </ul>
    <button @click="addItems" data-test="add-item-button">Add an item: {{ numItems }}</button>
    <p>By clicking on the button below you can toggle a component that uses <code>reactive()</code> instead of <code>ref()</code>. It looks perfectly the same, just the code is different.</p>
  <div><button @click="testAlternative = !testAlternative">Test alternative</button></div>
  <div><alternative-script v-if="testAlternative" /></div>
  </div>

</template>
<script setup lang="ts">
import {ref} from "vue";
import alternativeScript from '../components/CompoAPIreactive.vue'

    const restaurantName = ref(`Let's taco bout it`),
        options = ref(["Lengua", "Carnitas", "Al Pastor", "Pollo"]),
        numItems = ref(0),
        deliveryTime = ref(25),
        freeDelivery = true;

    const log = () => {
      console.log("$Route: ")
    }

    const addItems = () => {
      log();
      numItems.value++;
    }

    const testAlternative = ref(false);
</script>
<style lang="scss" scoped>
body {
  font-family: 'Bitter', serif;
}

#compo-api-main {
  text-align: center;
  max-width: 720px;
  font-size: 16px;
  margin: 0 auto;
  display: table;
  line-height: 2em;
}

label {
  padding-right: 10px;
}

button {
  border: none;
  background: orangered;
  color: white;
  padding: 0.5em 1em;
  border-radius: 3px;
}

.thumbs {
  font-size: 40px;
  margin-top: 20px;
}

li {
  text-align: left;
}
</style>
