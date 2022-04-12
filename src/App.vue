<template>
  <div id="app">
  <header>
    <base-header />
  </header>
  <main>
    <Side-Bar />
    <div id="main-view-container">
      <h3 v-if="this.$route.path !== '/home'">{{this.$route.name}}</h3>
      <router-view/>
    </div>
  </main>
  <footer>
    <base-footer/>
  </footer>
  </div>
</template>
<script setup lang="ts">
import SideBar from './components/layout/SideBar';
import BaseHeader from './components/layout/BaseHeader';

import BaseFooter from './components/layout/BaseFooter';
</script>

<style lang="scss">
* {
  margin: 0;
}

a {
  color: #42b983;
  text-decoration: none;
  &:hover {
    color: #2c3e50;
  }
  &.router-link-exact-active {
    color: #2c3e50;
  }
}

footer {
  width: 100vw;
  position: fixed;
  bottom: 0px;
  opacity: 1;
  background-color: white;
}

header {
  width: 100vw;
  position: fixed;
  top: 0px
}

main {
  display: grid;
  grid-template-columns: 1fr 5fr;
  margin-top: 8rem
}

#main-view-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: center
}
</style>
