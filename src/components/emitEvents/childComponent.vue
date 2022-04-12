<template>
    <div class="child-container">
      <h4>Child component is orange</h4>
        <button @click="$emit('deleteText', message, divisor)">Delete all text</button>
    </div>
</template>
<script setup lang="ts">
import {defineEmits} from "vue";

const message = "The child component lets you know that... "
const divisor = 3;

const emit = defineEmits<{
  (e: 'deleteText', message: string, divisor: number): void
}>()
</script>
<style lang="scss" scoped>
.child-container {
  margin: 1rem;
  background-color: orange;

  button {
    padding: .5rem 1rem;
    border-radius: .5rem;
    border: 1px solid lightgrey;
    background-color: #aaaaaa;
    font-weight: bold;

    &:hover {
      background-color: #4fc08d;
    }
  }
}
</style>