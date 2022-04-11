<template>
  <p>Props: {{littleMessage}}</p>
  <ul>
      <li v-for="item in littleList" :key="item">{{item}}</li>
  </ul>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps({
  littleMessage: {
    type: String,
    required: false,
    default: 'I am default props',
  },
  littleList: {
    type: Array,
    required: false,
    default: function () {
      return ["This", "is", "default"]
    }
  }
});
</script>