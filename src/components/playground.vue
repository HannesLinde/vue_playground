<script setup lang="ts">
import {defineProps} from "vue";
const props = defineProps({
  msg: {
    type: String,
    required: false,
    default: 'Default prop!',
    // validator: (value) => {
    //   console.log(value);
    // }
  }}
);
</script>

<template>
<h4>
  Next steps
</h4>
  <div id="content-container">
  <ul>
    <li>
      implement unit tests with jest
    </li>
    <li>
      implement e2e tests with cypress
    </li>
    <li></li>
    <li></li>
  </ul>
  </div>
</template>

<style lang="scss" scoped>
ul {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  //text-align: left;
}

#content-container{
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>