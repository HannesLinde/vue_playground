<template>
  <div>
    <div id="range-input">
      <h2>Range input</h2>
    <input
      type="range"
      min="0"
      max="10"
      :value="rating"
      @input="changeRating"
      data-test="range-input"
      />
      <div>Multiply <strong>{{rating}}</strong> with 10 = {{rating*10}}</div>
      </div>
      <div class="checkbox-inputs" data-test="checkbox-container">
      <h2>Checkboxes</h2>
        <p v-for="(selection, index) in meal" :key="selection.name+index" :data-test="`checkbox-wrapper-${selection.name}`">
          <span class="checkbox-label">
          <label :for="selection.name">{{selection.name}}</label>
          <input
            type="checkbox"
            :id="selection.name"
            :value="selection.selected"
            :data-test="`checkbox-${selection.name}`"
            @input="toggleCheckbox(selection)"
          />
          </span>
          <span>{{selection.selected}}</span>
        </p>
      </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

interface MealOption {
  name: string,
  selected: boolean | string
}

const meal = ref([
  {
    name: "Pizza",
    selected: false,
  },
  {
    name: "Spaghetti",
    selected: false,
  },
  {
    name: "Caesar's salad",
    selected: false,
  },
]);

const rating=ref(0);

/* const changeRating = (event: Event) => {
  const target = (<HTMLInputElement>event.target);
  rating.value = Number(target.value);
}; */

const changeRating = (event: any): number => {
  return rating.value = event.target.value;
};

const toggleCheckbox = (item: MealOption): boolean | string => {
  if(typeof(item.selected)==='boolean') {
    return item.selected = !item.selected;
  } else {
    return item.selected = item.selected.split("").reverse().join("");
  }
} 
</script>

<style lang="scss" scoped>
.checkbox-inputs {
  display: flex;
  flex-direction: column;

  p {
    width: 20vw;
    padding: .2rem;
    display: flex;
    justify-content: space-between;
  }

  span {
    margin: .5rem;
  }
}
.checkbox-label {
  width: 100%;
  display: flex;
  justify-content: space-between;
}

// RESTYLING RANGE INPUT
// THIS IS TO HIDE ELEMENTS IN BROWSER
input[type=range] {
  -webkit-appearance: none;
  margin: 18px 0;
  width: 100%;
}
input[type=range]:focus {
  outline: none;
}

// ------

input[type=range]::-webkit-slider-runnable-track {
  width: 100%;
  height: 8.4px;
  cursor: pointer;
  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
  background: #3071a9;
  border-radius: 1.3px;
  border: 0.2px solid #010101;
}
input[type=range]::-webkit-slider-thumb {
  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
  border: 1px solid #000000;
  height: 36px;
  width: 16px;
  border-radius: 3px;
  background: #ffffff;
  cursor: pointer;
  -webkit-appearance: none;
  margin-top: -14px;
}
input[type=range]:focus::-webkit-slider-runnable-track {
  background: #367ebd;
}
input[type=range]::-moz-range-track {
  width: 100%;
  height: 8.4px;
  cursor: pointer;
  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
  background: #3071a9;
  border-radius: 1.3px;
  border: 0.2px solid #010101;
}
input[type=range]::-moz-range-thumb {
  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
  border: 1px solid #000000;
  height: 36px;
  width: 16px;
  border-radius: 3px;
  background: #ffffff;
  cursor: pointer;
}
input[type=range]::-ms-track {
  width: 100%;
  height: 8.4px;
  cursor: pointer;
  background: transparent;
  border-color: transparent;
  border-width: 16px 0;
  color: transparent;
}
input[type=range]::-ms-fill-lower {
  background: #2a6495;
  border: 0.2px solid #010101;
  border-radius: 2.6px;
  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
}
input[type=range]::-ms-fill-upper {
  background: #3071a9;
  border: 0.2px solid #010101;
  border-radius: 2.6px;
  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
}
input[type=range]::-ms-thumb {
  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
  border: 1px solid #000000;
  height: 36px;
  width: 16px;
  border-radius: 3px;
  background: #ffffff;
  cursor: pointer;
}
input[type=range]:focus::-ms-fill-lower {
  background: #3071a9;
}
input[type=range]:focus::-ms-fill-upper {
  background: #367ebd;
}
</style>