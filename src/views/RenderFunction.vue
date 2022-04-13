<template>
  <render />
</template><script setup lang="ts">
import { h, ref } from 'vue'

const count = ref(0)

function increment() {
  count.value++
}

// return the render function
const render = () => {
  return [
      h('div',
          {class: 'container-render-function'},
          [
    h(
        'h2',
        'Working with the render function'
    ),
    h(
        'div',
        {
          id: 'test-div',
          onClick: increment,
          innerHTML: 'Does this work? Click the button!'
        }
    ),
    h(
        'button',
        {
          style: {
            color: 'pink',
            backgroundColor: 'green',
            borderRadius: '5px',
          },
          onClick: increment
        },
        'Click me'
    ),
    h('p',
        ` ${count.value}`
    )]
      )
  ]
}

</script>
<style>
.container-render-function {
  background-color: #888888;
}

#test-div {
  background-color: #4fc08d;
}
</style>
