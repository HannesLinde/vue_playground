<template>
  <div class="place">
    <slot name="image"></slot>
    <slot name="city">
    </slot>
    <slot name="description">
    </slot>
  </div>
</template>
<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: 'singleDestination'
})
</script>
<style lang="scss" scoped>
.place {
  display: flex;
  flex-direction: column;
  width: 280px;
  height: 320px;
  justify-content: center;
  background: white;
  border: 1px solid #ddd;
  padding: 20px 20px;
  margin: 10px;
  h2 {
    margin: 0;
    text-align: center;
  }
  img {
    margin: 10px;
    align-self: center;
  }
}
</style>
