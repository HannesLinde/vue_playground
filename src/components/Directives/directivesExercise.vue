<template>
  <h2>Sample 1</h2>
  <div class="row">
    <input v-model.number="num1" type="number" />
    <span>+</span>
    <input v-model.number="num2" type="number" />
    <span>=</span>
    <span>{{num1 + num2}}</span>
  </div>
  <hr/>
  <h2>Sample 2</h2>
  <div class="row second">
    <select name="meals" id="meals" v-model="selectedMeal">
    <option v-for="meal in meals" :id="meal" :value="meal.value" :key="meal.value">{{meal.value}}</option>
  </select>
    <p v-if="selectedMeal">My favorite meal is {{selectedMeal}}</p>
  </div>
  <pre>{{}}</pre>
</template>

<script setup lang="ts">
import {ref} from 'vue';

interface Meal {
  value: string,
  taste: number
}

// interface Meals extends Array<Meal>

interface ReactiveMeals {
  value: Meal[]
}

const num1 = ref(0);
const num2 = ref(0);
const meals: ReactiveMeals = ref([ // typing?!??????
  {
    value: "Burger and fries",
    taste: 1
  },
  {
    value: "Salad with Chicken",
    taste: 2
  },
  {
    value: "Pasta with Tomato Sauce",
    taste: 5
  },
  {
    value: "Tacos",
    taste: 8
  },
]);
const selectedMeal = ref('');

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
  flex-direction: column;
  align-items: center;
  font-size: 18px;
  p {
    margin-left: 20px;
  }
}
</style>
