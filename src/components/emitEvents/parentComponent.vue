<template>
    <div style="background-color: lightblue">
      <p>Parent component is lightblue</p>
        <p v-if="text">{{text}}</p>
        <p v-else>No text so far</p>
        <input
            type="text"
            v-model="text"
            placeholder="enter some text"
            class="fancy-input"
        />
        <child-component @deleteText="deleteNow"></child-component>
        <p>{{deletionNotification}}</p>
    </div>
</template>
<script setup lang="ts">
import {defineComponent, ref} from 'vue';
import childComponent from './childComponent.vue'
const text = ref('');
const deletionNotification = ref('');
const deleteNow = (message: string, divisor: number) => {
        const characters = text.value.length
        text.value='';
        deletionNotification.value=`${message}You just deleted all the text with ${divisor} times less characters than ${characters * divisor}`;
        setTimeout(()=> deletionNotification.value = '', 3000)
}
</script>
<style lang="scss" scoped>
.fancy-input {
  text-align: center;
  padding: .5rem 1rem;
  margin: .5rem;
  border: solid 2px lightgrey;
  border-radius: 0.3rem
}
</style>