<template>
  <h4>Code block!</h4>
  <p class="code-blocks">
    <span id="description">{{props.description}}</span>
  <slot name="my-code" id="my-code" style="text-decoration: underline"></slot>
</p>
</template>

<script setup lang="ts">
import {defineProps} from "vue";
const props = defineProps({
  description: {
    type: String,
    required: true,
    default: ''
  }
})
</script>

<style lang="scss" scoped>
.code-blocks{
  position: relative;
  font-family: Monaco, Consolas, "Andale Mono", "DejaVu Sans Mono", monospace;
  font-size: 95%;
  line-height: 140%;
  white-space: pre;
  white-space: pre-wrap;
  white-space: -moz-pre-wrap;
  white-space: -o-pre-wrap;

  width: 60%;
  display: block;
  background-color: #292d3e;
  color: #C3E88D;
  margin: 1rem;
  padding: 1.5rem 1rem .5rem 1rem;
  border: 1px solid #bebab0;
  border-radius: 8px;
}

#description {
  position: absolute;
  top: 2px;
  right: 2px;
  color: #888888;
  font-size: 75%;
}
</style>