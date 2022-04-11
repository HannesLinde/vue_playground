<!-- Use preprocessors via the lang attribute! e.g. <template lang="pug"> -->
<template>
  <div id="directives-container">
    <h1>{{ message }}</h1>
    <div @mousemove="xCoordinate" :style="{width: '80vw', backgroundColor: `hsl(${x}, 50%, 50%)`}">
      <h2>v-model</h2>
      <p>Mouse-X-Coordinate: <span style="font-weight: bold">{{x}}</span></p>
    </div>
    <textarea v-model.trim="name" rows="5"/>
    <div>
      <select
    v-model="color">
      <option value="red">Red</option>
      <option value="blue">Blue</option>
      <option value="yellow">Yellow</option>
      <option value="green">Green</option>
    </select>
      <p>{{color}}</p>
    </div>
    <p class="testX">Name: {{name}}</p>
    
    <h2>v-for, v-if, v-bind (aka <span style="font-family: monospace; background-color: #cccccc; padding: 0px 4px; border-radius: 3px;">:</span>)</h2>
      <div v-for="option in options" :key="option">
        <input
             type ="checkbox"
             v-model="checkedNames"
             :id="option.value"
             :value="option.value"
        />
        <label
            :for="option.value"
            :class="[checkedNames.includes(option.value) ? strikeClass : '']"
        >
          {{option.value}}
        </label><br/>
    </div>
    <h4>Checked names are:</h4>
    <div v-if="!checkedNames.length">
      No boxes ticked!
    </div>

    <div v-else v-for="name in checkedNames" :key="name">
        {{name}}
  </div>
    <h2>v-on (aka "@")</h2>
    <div>
      <button @click="counter > 0 ? counter -=1 : 0">-</button>
      <button @click="counter+=1">+</button>
      <span>{{counter}}</span>
    </div>
    <h2>v-html</h2>
    <p v-html="htmlString"></p>
            
  </div>
</template>

<script setup lang="ts">
import {ref} from 'vue';

const color = ref('red');
const message = "Welcome to Vue!";
const name = ref('');
const checkedNames = ref([]);
const options = [
        {
          value: 'Lisa',
          clicked: false
        },
        {
          value: 'Lutz',
          clicked: false
        },
        {
          value: 'Christopher',
          clicked: false
        },
        {
          value: 'Sita',
          clicked: false
        },
        {
          value: 'Anja',
          clicked: false
        },
        {
          value: 'Simon',
          clicked: false
        },
        {
          value: 'Robs',
          clicked: false
        },
        {
          value: 'Soubhi',
          clicked: false
        },
        {
          value: 'Mohammed',
          clicked: false
        },
      ];
const strikeClass = ref('strike');
const counter = ref(0);
const htmlString = '<a target="_blank" href="https://developer.mozilla.org/de/docs/Web/HTML" targe="_blank">v-html treats a parsed string as html</a>';
const x = ref(0);
const xCoordinate = (e: MouseEvent) => {
      return x.value = e.clientX;
    }
</script>
<!-- Use preprocessors via the lang attribute! e.g. <style lang="scss"> -->
<style lang="scss" scoped>

#directives-container {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: #2c3e50;

  div,h1,h2,h3,h4,p {
    margin: 0.5rem
  }
}

a,
button {
  color: #4fc08d;
}

button {
  background: none;
  border: solid 1px;
  border-radius: 2em;
  font: inherit;
  padding: 0.75em 2em;
}
  .strike {
    text-decoration: line-through
  }

  .testX {
    background-color: v-bind(color);
  }
</style>
