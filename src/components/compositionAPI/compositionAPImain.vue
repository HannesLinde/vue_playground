<template>
  <div id="app">
    <p>Composition API helps us to encapsulate bits of functionality that we want to reuse. Write reusable functional code in seperate files (e.g. src/composables/...) and import respective functions in your component. THen include the functions/values in the setup directive.</p>
    <router-link :to="{name: 'Composables'}">Composable sample</router-link>
    <h3>Order from: <strong>{{ restaurantName }}</strong></h3>
    <p>Options</p>
    <ul>
      <li v-for="option in options" :key="option">{{ option }}</li>
      <p>Delivery time: {{ deliveryTime }} minutes</p>
      <p v-if="freeDelivery">Free Delivery!</p>
    </ul>
    <button @click="addItems">Add an item - {{ numItems }}</button>
  <div><button @click="testAlternative = !testAlternative">Test alternative</button></div>
  <div><alternative-script v-if="testAlternative" /></div>
  </div>

</template>
<script>
import {defineComponent} from "vue";
import {ref} from "vue";
import alternativeScript from './compositionAPIreactive.vue'

export default defineComponent({
  setup() {
    const restaurantName = ref(`Let's taco bout it`),
        options = ref(["Lengua", "Carnitas", "Al Pastor", "Pollo"]),
        numItems = ref(0),
        deliveryTime = ref(25),
        freeDelivery = true;

    function log(){
      console.log("$Route: ")
    }

    function addItems() {
      log();
      numItems.value++;
    }

    return {
      restaurantName,
      options,
      numItems,
      deliveryTime,
      freeDelivery,
      addItems,

    };
  },
  data() {
    return {
      testAlternative: false
    }
  },
  components: {
    alternativeScript
  }
})
</script>
<style lang="scss" scoped>
body {
  font-family: 'Bitter', serif;
}

#app {
  text-align: center;
  padding: 70px;
  max-width: 360px;
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
