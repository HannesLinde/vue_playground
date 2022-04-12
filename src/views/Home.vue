<template>
  <div :class="$style.intro">
    <h1>Welcome to my personal vue info site</h1>
    <hr>
    <p>Hi, on this website I collected the knowledge on VueJS that I gained from various courses from <strong><a target="_blank" href="https://frontendmasters.com">Frontendmasters</a></strong>. Special thanks to <a target="_blank" href="https://twitter.com/sarah_edo">Sarah Drasner</a> and <a target="_blank" href="https://twitter.com/bencodezen">Ben Hong</a>.</p>
  </div>

<!--Here you can see a component with props passed into it-->
  <!--
  <string-component :little-message="111"></string-component>
  -->
</template>

<script setup lang="ts">
import StringComponent from "@/components/PropsChildComponent.vue";
</script>

<style lang="scss" module>
  .intro {
    padding: 1rem 0.5rem;

    hr {
      margin: 1rem 0rem;
    }
  }
</style>
