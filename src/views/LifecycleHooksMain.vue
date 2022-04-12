<template>
  <div id="main-hook">
    <h3>Let's check out the lifecycle of this hur' child.</h3>
    <h4>Check the console!</h4>
    <button @click="toggleDisplayChild">
      <span v-if="isShowing">Hide child</span>
      <span v-else>Show child</span>
    </button>
    <hr>
    <div v-if="isShowing">
      <hook-child></hook-child>
    </div>
  </div>
</template>
<script setup lang="ts">
import HookChild from "@/components/LifecycleHooksChild.vue";
import {onRenderTracked, onRenderTriggered, ref} from "vue";

const isShowing = ref(false)

const toggleDisplayChild = () => {
  isShowing.value = !isShowing.value;
}

onRenderTracked( ({ key, target, type }) => {
  console.log('[MAIN COMPONENT] renderTracked: ' + JSON.stringify({ key, target, type }))
});

onRenderTriggered(({ key, target, type }) => {
  console.log('[MAIN COMPONENT] renderTriggered: ' + JSON.stringify({ key, target, type }))
});
</script>
<style lang="scss" scoped>
body {
  font-family: 'Bitter', serif;
}

#main-hook {
  text-align: center;
  margin: 60px;
  max-width: 320px;
  margin: 0 auto;
  display: table;
}

.num {
  color: #AF007E;
}

button {
  font-family: 'Bitter';
  background: #c62735;
  color: white;
  border: 0;
  padding: 5px 15px;
  margin: 0 10px;
  border-radius: 4px;
  outline: 0;
  cursor: pointer;
}

h4 {
  margin: 0 0 15px;
}

hr {
  border-color: #F2FAFF;
  opacity: 0.5;
  margin: 15px 0;
}
</style>
