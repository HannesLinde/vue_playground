<template>
  <div id="demo">
    Push this button to do something you shouldn't be doing:<br>

    <div :class="{ shake: noActivated }">
      <button @click="noActivated = true">Click me</button>
      <span v-if="noActivated">Oh no!</span>
    </div>
  </div>
</template>
<script>
import {defineComponent} from "vue";

export default defineComponent({
  data() {
    return {
      noActivated: false
    }
  }
})
</script>
<style lang="scss" scoped>
body {
  margin: 30px;
}

button {
  background: #d93419;
  border-radius: 4px;
  display: inline-block;
  border: none;
  padding: 0.75rem 1rem;
  margin: 20px 10px 0 0;
  text-decoration: none;
  color: #ffffff;
  font-family: sans-serif;
  font-size: 1rem;
  cursor: pointer;
  text-align: center;
  -webkit-appearance: none;
  -moz-appearance: none;
}

button:focus {
  outline: 1px dashed #fff;
  outline-offset: -3px;
}

.shake {
  animation: shake 0.82s cubic-bezier(.36,.07,.19,.97) both;
  transform: translate3d(0, 0, 0);
  backface-visibility: hidden;
  perspective: 1000px;
}

@keyframes shake {
  10%, 90% {
    transform: translate3d(-1px, 0, 0);
  }

  20%, 80% {
    transform: translate3d(2px, 0, 0);
  }

  30%, 50%, 70% {
    transform: translate3d(-4px, 0, 0);
  }

  40%, 60% {
    transform: translate3d(4px, 0, 0);
  }
}
</style>
