<template>
   <div id="app">
  <div class="row">
    <input v-model.number="num1" type="number" />
    <span>+</span>
    <input v-model.number="num2" type="number" />
    <span>=</span>
    <span>{{num1 + num2}}</span>
  </div>
  <div class="row second">
    <select name="meals" id="meals" v-model="selectedMeal">
    <option v-for="meal in meals" :id="meal" :value="meal.value" :key="meal.value">{{meal.value}}</option>
  </select>
    <p v-if="selectedMeal">My favorite meal is {{selectedMeal}}</p>
  </div>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    setup () {
        

        return {}
    },
    data() {
    return {
      num1: 0,
      num2: 0,
      meals: [
        {value: "Burger and fries"},
        {value: "Salad with Chicken"},
        {value: "Pasta with Tomato Sauce"},
        {value: "Tacos"},
      ],
      selectedMeal: '',
    }
  }
})
</script>

<style lang="scss" scoped>

$primary: #5968d7;

.row {
  margin: 50px;
  display: flex;
  justify-content: center;
  font-family: 'Work Sans', sans-serif;
}

input, span {
  padding: 10px;
  font-size: 30px;
  font-family: 'Work Sans', sans-serif;
}

input {
  width: 50px;
}

span {
  width: 20px;
}

.second {
  font-size: 18px;
  p {
    margin-left: 20px;
  }
}
</style>
