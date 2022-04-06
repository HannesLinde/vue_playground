<template>
  <div>
    <router-link to="slot-machine">Back to slot machine main</router-link>
    <slot-child>

    </slot-child>
  </div>
</template>
<script>
import {defineComponent} from "vue";
import slotChild from "./slots";
export default defineComponent({
  components: {slotChild}
})
</script>
