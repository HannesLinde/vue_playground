<template>
  <p><strong>Props:</strong> {{props.littleMessage}}</p>
  <ul>
      <li v-for="item in props.littleList" :key="item">{{item}}</li>
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
<style lang="scss" scoped>
li{
  text-align: left;
}
</style>