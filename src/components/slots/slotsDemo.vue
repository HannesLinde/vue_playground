<template>
  <div>
    <h2>This is slot number1</h2>
    <slot name="slot1">Just some default text here for slot 1</slot>
    <p>So in between the two slots I added some hardcoded text in the child componentthat will remain as it is.</p>
    <slot></slot>
    <h2>This is slot number2</h2>
    <slot name="slot2">And more default text for slot 2. The default text is replaced as soon as some other content is passed into the slot from the parent component</slot>
  </div>
</template>
<script>
import {defineComponent} from "vue";
export default defineComponent({
  name: 'slotsDemo'
})
</script>
