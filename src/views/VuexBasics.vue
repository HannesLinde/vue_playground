<template>
  <h2>State objects</h2>
  <h3>State</h3>
  <p>State refers to the state of the <i>entire application</i>. It is similar to what data/ref/reactive is to a component.</p>
  <h3>Getters</h3>
  <p>With getters we can display values statically. Getters <i>read</i> values. They don't <i>mutate</i> values. Getters are to the app like computed properties to ac component.</p>
  <h3>Mutations</h3>
  <p>Synchronous state updates are called <i>mutations</i>. There is no other way but mutations to change data in the store's state.</p>
  <h3>Actions</h3>
  <p>Actions change state asynchronously, using <i>an existing mutation</i>. This is neccessary when performing multiple mutations at once or when reaching out to a server.</p>
  <h3>Typed stores</h3>
  <p>Using typescript with vuex is supported. It requires a few extra steps to really get the typing going, though. For more information, <a href="https://next.vuex.vuejs.org/guide/typescript-support.html">read the docs available</a>!</p>

  <h2>Sample usage</h2>
  <h3>&#123;&#123;this.$store.state.counter&#125;&#125;</h3>
  <p>{{this.$store.state.counter}}</p>
  <p><button @click="this.$store.dispatch('asyncIncrement',{by: 3, duration: 1000})">Increment in a second</button></p>
  <p><button @click="this.$store.dispatch('reset')">Reset</button></p>

  <h3>Enterprise level</h3>
  <p>Here's a nice example for a big store: <a href ="https://github.com/soloschenko-grigoriy/vue-vuex-ts">Vue-vuex-ts by Grigoriy Soloschenko</a></p>

</template>

<style scoped lang="scss">
</style>
