<template>
  <div :class="$style.intro">
    <h1 data-test="home-heading">Welcome to my personal vue info site</h1>
    <hr>
    <p>Minimum Rating: {{minimumRating}}</p>
    <input
      type="range"
      name="rating"
      min="0"
      max="10"
      :value="minimumRating"
      @input="changeRating"
       />
       <pre>{{minimumRating}}</pre>
    <p data-test="welcome-text">Hi, on this website I collected the knowledge on VueJS that I gained from various courses from <strong><a target="_blank" href="https://frontendmasters.com">Frontendmasters</a></strong>. Special thanks to <a target="_blank" href="https://twitter.com/sarah_edo">Sarah Drasner</a> and <a target="_blank" href="https://twitter.com/bencodezen">Ben Hong</a>.</p>
  </div>
</template>
<script setup lang="ts">
  import { ref } from 'vue'
  
  const minimumRating=ref(3);
  const changeRating = (event) => {
    minimumRating.value = event.target.value
  }


</script>

<style lang="scss" module>
  .intro {
    padding: 1rem 0.5rem;

    hr {
      margin: 1rem 0rem;
    }
  }
</style>
