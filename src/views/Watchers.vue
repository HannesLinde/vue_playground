<template>
      <div>
          <h2>Exercise</h2>
          <p>A watcher watches whether a value gets changed and enables us to trigger actions depending on the value's changes. In this case the button click triggers a change of the orderStatus. And the watcher runs a setTimeout function, whenever orderStatus is changed. Resetting <code>orderStatus</code> leads to the bug that the message from <code>orderSubmitted</code> shows up again. This happens because the watcher only checks whether the value changes and not what the value actually is.</p>
          <p><code>
            orderStatus = {{orderStatus}}
          </code></p>
            <button @click="getTaco">
                Click me to order a taco
            </button>
            <h3>{{orderStatus}}</h3>
            <p v-if="orderSubmitted">{{orderSubmitted}}</p>
            <p>You have ordered {{count}} tacos.</p>
          <button @click="reset">
            <p>Reset button is pretty useless because reset function is triggered by watcher anyways</p>
reset            </button>
      </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'

const orderStatus = ref('Where is my taco?');
const orderSubmitted = ref('');
const count = ref(0);

const getTaco = () => {
      orderStatus.value = 'Here it comes!'
      count.value++;
    };

const reset = () => {
      orderStatus.value = 'Order another one'
    };

watch(orderStatus, async (newValue, oldValue) => {
  if(orderStatus.value === 'Order another one') {return}

  orderSubmitted.value = 'Your order was submitted';
  setTimeout(() => {
    orderSubmitted.value = '';
    reset()
  }, 1000);
  }
);
</script>
<!--
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    setup () {


        return {}
    },
    data() {
        return {
            orderStatus: 'Where is my taco?',
            orderSubmitted: '',
            count: 0
        }
    },
    methods: {
        getTaco() {
            this.orderStatus = 'Here it comes!'
            this.count++;
        },
        reset()  {
            this.orderStatus = 'Order another one'
        }
    },
    watch: {
      orderStatus(newValue, oldValue) {
        this.orderSubmitted = 'Your order was submitted';
        setTimeout(() => this.orderSubmitted='', 1000);
      }
    }
})
</script>-->

<style lang="scss" scoped>

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
