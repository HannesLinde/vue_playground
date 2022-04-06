<template>
  <div>
    <h1>Slot machine!</h1>
    Slots seem to mainly make sense when you want to pass on HTML into existing logic and design. A classic example might be a blog/news site.
    <p><router-link to="/default-slot">Default Slot</router-link></p>
    <p><router-link to="/slot-machine/exercise">Default Slot</router-link></p>
    <h2>Slot demo</h2>
    <label for="slot1Input">Text for slot 1</label>
    <div>
      <input id="slot1Input" v-model="slot1" type="text" placeholder="Type for slot 1" />
    </div>
    <label for="slot2Input">Text for slot 2</label>
    <div>
      <input id="slot2Input" v-model="slot2" type="text" placeholder="Type for slot 2" />
    </div>
    <slot-child>
      <template v-slot:slot1>
       <p v-if="slot1">{{slot1}}</p>
      </template>
      <p style="font-style: italic">So this is some italic text that I hardcoded into the slot machine home component. It's right between the two slots. I had to add (an unnamed) slot for this though. If there is no slot in the child component it will not display text outside of slot-templates</p>
      <template v-slot:slot2>
        <p v-if="slot2">{{slot2}}</p>
      </template>
    </slot-child>

  </div>
</template>
<script lang="ts">
import {defineComponent} from "vue";
import slotChild from './slots.vue'

export default defineComponent({
  name: 'slot-home',
  data() {
    return {
      slot1: '',
      slot2: ''
    }
  },
  components: {
    slotChild
  }
})
</script>
