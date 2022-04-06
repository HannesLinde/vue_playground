<script>
export default {
  name: "playground.vue",
  props: {
    msg: {
      type: String,
      required: false,
      default: 'Default prop!',
      validator: (value) => {
        console.log(value);
      }
    }
  }
}
</script>

<template>
<h2>
  Notes
</h2>
  <ul>
    <li>
      use v-bind in a component
    </li>
    <li>{{$attrs}}, {{msg}}</li>
    <li></li>
    <li></li>
  </ul>
</template>

<style scoped>

</style>