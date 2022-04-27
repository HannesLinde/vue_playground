<template>
  <div id="app">
  <header>
    <base-header @toggleMobileMenuDisplay="toggleMobileMenuDisplay" />
  </header>
  <main>
    <mobile-menu
        v-if="displayMobileMenu"
        @click="toggleMobileMenuDisplay"
    />
    <side-bar class="side-bar"/>
    <div class="main-view-container">
      <h3>{{route.name}}</h3>
      <router-view/>
    </div>
  </main>
  <footer>
    <base-footer/>
  </footer>
  </div>
</template>
<script setup lang="ts">
import SideBar from '@/components/layout/SideBar';
import MobileMenu from '@/components/layout/MobileMenu'
import {useRoute} from "vue-router";
import {ref} from "vue";

const route = useRoute()

const displayMobileMenu = ref(false);

const toggleMobileMenuDisplay = () => {
  displayMobileMenu.value = !displayMobileMenu.value
}
</script>

<style lang="scss">
* {
  margin: 0;
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
  margin-top: 8rem;
  .main-view-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: center
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

@media only screen and (max-width: 600px) {
  main {
    display: flex;
    padding: 1rem;
    margin-top: 4rem;

    .side-bar {
      display:none;
    }
  }
}
</style>
