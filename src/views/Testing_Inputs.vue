<template>
  <div id="text-inputs" class="input-combo">
    <h4>Text input</h4>
    <div data-test="text-input-field-container">
      <input
        type="text"
        :value="textInput"
        @input="updateTextInput"
        data-test="text-input-field"
        />
    </div>
    <div data-test="text-output">{{textInput}}</div>
  </div>
  <div id="select-input" class="input-combo">
    <h4>Select input</h4>
    <div data-test="select-inputs-container">
      <select
      :value="selectInput"
      @input="updateSelectInput"
      >
        <option
            v-for="selectOption in inputOptions"
            :key="selectOption.id"
            :data-test="`select-input-${selectOption.id}`"
        >{{selectOption.name}}</option>
      </select>
    </div>
    <div data-test="select-output">
      {{selectInput}}
    </div>
  </div>
  <div id="checkbox-input" class="input-combo" data-test="checkbox-container">
    <h4>Checkboxes</h4>
    <div v-for="checkboxOption in inputOptions" :key="checkboxOption.id+checkboxOption.name">
      <label :for="checkboxOption.name">{{checkboxOption.name}}</label>
      <input
          type="checkbox"
          :id="checkboxOption.name"
          :value="checkboxOption.name"
          @input="updateCheckboxInput"
          :data-test="`checkbox-${checkboxOption.id}`"
      />
    </div>
    <div data-test="checkbox-output">
      <span v-if="checkboxInput.length">{{checkboxInput.join(', ')}}</span>
      <span v-else>None selected</span>
    </div>
  </div>
  <div id="radio-input" class="input-combo">
    <h4>Radio buttons</h4>
    <form>
      <div
          v-for="radioButtonOption in inputOptions"
          :key="radioButtonOption.id+radioButtonOption.name"
          :data-test="`radio-container-${radioButtonOption.id}`">
      <label :for="radioButtonOption.name" :data-test="`radio-label-${radioButtonOption.id}`">{{radioButtonOption.name}}</label>
      <input
          type="radio"
          name="radioNames"
          :id="radioButtonOption.name"
          :value="radioButtonOption.name"
          @input="updateRadioInput"
          :data-test="`radio-input-${radioButtonOption.id}`"
      />
    </div>
    </form>
    <div data-test="radio-output">
      {{radioInput}}
    </div>
  </div>
  <div id="color-input" class="input-combo">
    <h4>Color inputs</h4>
    <div>
      <label for="color-input">Choose a color</label>
      <input
          type="color"
          id="color-input-element"
          :value="colorInput"
          @input="updateColorInput"
          data-test="color-input-element"
      />
    </div>
    <div class="color-input" data-test="color-output">
      {{colorInput}}
    </div>
  </div>
  <div id="range-input">
    <h4>Range input</h4>
    <input
        type="range"
        min="0"
        max="10"
        :value="rangeInput"
        @input="updateRangeInput"
        data-test="range-input"
    />
    <div data-test="range-output">{{rangeInput}}</div>
  </div>
</template>

<script setup lang="ts">
import {ref} from "vue";

const inputOptions = [
  {
    name: 'Lisa',
    id: 1
  },
  {
    name: 'Hannes',
    id: 2
  },
  {
    name: 'Lutz',
    id: 3
  },
  {
    name: '??',
    id: 4
  },
]

const textInput = ref('Initial value');
const selectInput = ref('');
const checkboxInput= ref([]);
const radioInput = ref('');
const colorInput = ref('#00ff00');
const rangeInput= ref(0);

const updateTextInput = (event: any) => {
  return textInput.value = event.target.value;
};

const updateSelectInput = (event: any) => {
  return selectInput.value = event.target.value;
};

const updateRadioInput = (event: any) => {
  return radioInput.value = event.target.value;
};

const updateColorInput = (event: any) => {
  console.log(event.target.value);
  return colorInput.value = event.target.value;
};

const updateRangeInput = (event: any): number => {
  return rangeInput.value = event.target.value;
};

const updateCheckboxInput = (event: any) => {
  if (checkboxInput.value.includes(event.target.value)) {
    const indexOfDeletedItem = checkboxInput.value.indexOf(event.target.value);
    checkboxInput.value.splice(indexOfDeletedItem,1);
  } else {
    return checkboxInput.value.push(event.target.value);
  }
};

</script>

<style lang="scss" scoped>
.input-combo {
  display: flex;
}

.color-input {
  color: v-bind(colorInput)
}
</style>