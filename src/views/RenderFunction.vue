<template>
  <render />
</template>

<script setup lang="ts">
import { h, ref } from 'vue'

const count = ref(0)

function increment() {
  count.value++
}

// return the render function
const render = () => {
  return [
    h('div',
        {
          class: 'render-function-container'
        },
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
            class: 'fancy-button',
            style: {
              color: 'pink',
              backgroundColor: 'green',
              borderRadius: '5px',
              },
              onClick: increment
            },
          'Click me'
          ),
        h(
      'p',
          h(
              'span',
              {
                class: 'show-number'
              },
              `${count.value}`
          )
        ),
        h(
            'p',
            `<span style="background-color: blue">${count.value}</span>`
        )
      ]
    )
  ];
}
</script>
<!-- scoped styles not possible with render function!!! -->
<style lang="scss">
.render-function-container {
  color: blue;
  p {
    background-color: #bebab0;
    padding: .3rem;
    margin: .2rem
  }

  .show-number {
    background-color: #00ff00;
  }
}
</style>