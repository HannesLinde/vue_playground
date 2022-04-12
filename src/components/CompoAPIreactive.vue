<template>
  <!-- In this vue component I only use a little different script syntax, using reactive instead of ref -->
  <div id="app">
    <h3>Order from: <strong>{{ restaurantName }}</strong></h3>
    <p>Options</p>
    <ul>
      <li v-for="option in options" :key="option">{{ option }}</li>
      <p>Delivery time: {{ deliveryTime }} minutes</p>
      <p v-if="freeDelivery">Free Delivery!</p>
    </ul>
    <button @click="addItems">Add an item - {{ numItems }}</button>
  </div>
</template>
<script>
import {defineComponent} from "vue";
import {reactive, toRefs} from "vue";

export default defineComponent({
  setup() {
    const state = reactive({
      restaurantName: `Let's taco bout it`,
        options: ["Lengua", "Carnitas", "Al Pastor", "Pollo"],
        numItems: 0,
        deliveryTime: 25,
        freeDelivery: true
    });

    function addItems() {
      state.numItems++;
    }

    return {
     ...toRefs(state),
      addItems
    };
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
