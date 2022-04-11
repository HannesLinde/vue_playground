<template>
  <div>
    <h1>Slot machine!</h1>
    Slots seem to mainly make sense when you want to pass on HTML into existing logic and design. A classic example might be a blog/news site.
    <p><router-link to="/default-slot">Default Slot</router-link></p>
    <p><router-link to="/slots/exercise">Exercise on named slots</router-link></p>
    <h2>Slot demo</h2>
    <label for="slot1Input">Text for slot 1</label>
    <div>
      <input id="slot1Input" v-model="slot1" type="text" placeholder="Type for slot 1" />
    </div>
    <label for="slot2Input">Text for slot 2</label>
    <div>
      <input id="slot2Input" v-model="slot2" type="text" placeholder="Type for slot 2" />
    </div>
    <slots-demo>
      <template v-slot:slot1>
       <p v-if="slot1">{{slot1}}</p>
      </template>
      <p style="font-style: italic">So this is some italic text that I hardcoded into the slot machine's parent component. It's right between the two slots. I had to add (an unnamed) slot for this though. If there is no slot in the child component it will not display text outside of slot-templates</p>
      <template v-slot:slot2>
        <p v-if="slot2">{{slot2}}</p>
      </template>
    </slots-demo>

  </div>
</template>
<script setup lang="ts">
import slotsDemo from './slotsDemo.vue'
import {ref} from "vue";

const slot1 = ref('');
const slot2 = ref('');
</script>
