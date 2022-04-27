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
            <label :for="selection.name" class="checkbox-input-container">
              <span>{{selection.name}}: </span>
                <input
                type="checkbox"
                :id="selection.name"
                :value="selection.selected"
                :data-test="`checkbox-${selection.name}`"
                @input="toggleCheckbox(selection)"
              />
              <span class="checkmark"></span>
            </label>
            <span>{{selection.selected}}</span>
          </span>
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

input[type=checkbox] {
  -webkit-appearance: none;
  width: 100%;
}
input[type=checkbox]:focus {
  outline: none;
}

input[type=checkbox] {
  position: absolute;
  cursor: pointer;
  height: 1rem;
  width: 1rem;
}

.checkbox-inputs {
  display: flex;
  flex-direction: column;
  p {
    width: 80vw;
  }
}

.checkbox-label {
  width: 100%;
  display: flex;
  justify-content: space-around;

  .checkbox-input-container {
    width: 60%;
    //display: flex;
    //justify-content: space-between;
    display: block;
    text-align: left;
    position: relative;
    padding-left: 1rem;
    margin-bottom: .5rem;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

    span {
      margin: 0rem .1rem;
    }
  }

  .checkmark {
    position: absolute;
    height: 1rem;
    width: 1rem;
    background-color: #ff9000;
    border: solid 1px #888;
  }

  .checkmark:after {
    content: '';
    position: absolute;
    display: none;
  }

  .checkbox-input-container input[type=checkbox]:checked ~ .checkmark {
    background-color: #00f770;
  }

  .checkbox-input-container input[type=checkbox]:checked ~ .checkmark:after {
    display: block;
  }

  .checkbox-input-container .checkmark:after {
    left: .25rem;
    width: .3rem;
    height: .6rem;
    border: solid white;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
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
