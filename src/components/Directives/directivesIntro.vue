<!-- Use preprocessors via the lang attribute! e.g. <template lang="pug"> -->
<template>
  <div id="app">
    <h1>{{ message }}</h1>
<h2 @mousemove="xCoordinate" :style="{backgroundColor: `hsl(${x}, 50%, 50%)`}">v-model</h2>
    <p>Mouse-X-Coordinate{{x}}</p>
    <textarea v-model.trim="name" rows="5"/>
    <p>Name: {{name}}</p>
    
    <h2>v-for, v-if, v-bin (aka ":")</h2>
      <div v-for="option in options" :key="option">
        <input
             type ="checkbox"
             v-model="checkedNames"
             :id="option.value"
             :value="option.value"
        />
        <label :for = "option.value">{{option.value}}</label><br/>
    </div>
    <h4>Checked names are:</h4>
    <div v-if="!checkedNames.length">
      No boxes ticked!
    </div>
        <div :class="[checkedNames.length ? strikeClass : '']">
      No boxes ticked
    </div>
    <div v-for="name in checkedNames" :key="name">
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
    <h2>the pre tag used with $data</h2>
    <pre>{{$data}}</pre>
            
  </div>
</template>

<script lang>
export default {
  data() {
    return {
      message: "Welcome to Vue!",
      name: '',
      checkedNames: [],
      options: [
        {value: 'Lisa'},
        {value: 'Lutz'},
        {value: 'Christopher'},
        {value: 'Sita'},
        {value: 'Anja'},
        {value: 'Simon'},
        {value: 'Robs'},
        {value: 'Soubhi'},
        {value: 'Mohammed'},
       ],
      strikeClass: 'strike',
      counter: 0,
      htmlString: '<a href="https://developer.mozilla.org/de/docs/Web/HTML" targe="_blank">v-html treats a parsed string as html</a>',
      x: 0
    };
  },
  methods: {
    xCoordinate(e) {
     return this.x = e.clientX;
    }
  }
};
</script>

<!-- Use preprocessors via the lang attribute! e.g. <style lang="scss"> -->
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
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
</style>
