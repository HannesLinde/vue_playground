<template>
        <li>{{comment}}</li>
</template>
<script setup lang='ts'>
import {defineProps} from 'vue';

const props = defineProps({
  comment: {
    type: String,
    required: true,
    default: 'No comments so far'
  }
});
</script>
<style lang="scss" scoped>
  li {
    padding: .2rem 2rem;
    margin: .4rem 0px;
    border: solid 1px black;
    border-radius: 5px;
    min-width: 6rem;
    max-width: 10rem;
  }
</style>
