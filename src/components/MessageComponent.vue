<template>
  <p>{{ msg }}</p>'
</template>
<script lang="ts">
import {defineComponent} from "vue"
export default defineComponent({
  props: {
    'msg': String
  }
})
</script>
