<template>
      <div>
          <h2>Exercise</h2>
            <button @click="getTaco">
                Click me to order a taco
            </button>
            <h3>{{orderStatus}}</h3>
            <p v-if="orderSubmitted">{{orderSubmitted}}</p>
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
            orderStatus: 'Where is my taco?',
            orderSubmitted: ''
        }
    },
    methods: {
        getTaco() {
            this.orderStatus = 'Here it comes!'
        }
    },
    watch: {
      orderStatus(newValue, oldValue) {
        this.orderSubmitted = 'Your order was submitted';
        setTimeout(() => this.orderSubmitted='', 1000);
      }
    }
})
</script>

<style scoped>
button {
  display: inline-block;
  border: none;
  padding: 0.75rem 1.5rem;
  margin: 0;
  text-decoration: none;
  background: teal;
  border-radius: 4px;
  color: #ffffff;
  font-family: sans-serif;
  font-size: 1rem;
  cursor: pointer;
  text-align: center;
  transition: background 250ms ease-in-out, transform 150ms ease;
  -webkit-appearance: none;
  -moz-appearance: none;
}

</style>