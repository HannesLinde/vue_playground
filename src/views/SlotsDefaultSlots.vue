<template>
  <div>
    <router-link to="slots">Back to slot machine main</router-link>
    <slot-child>

    </slot-child>
  </div>
</template>
<script>
import {defineComponent} from "vue";
import slotChild from "../components/SlotsDemo";
export default defineComponent({
  components: {slotChild}
})
</script>
