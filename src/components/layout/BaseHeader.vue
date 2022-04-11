<template>
  <div id="header-container"><router-link to="/">
    <img height="100" alt="Vue logo" src="@/assets/logo.png">
  </router-link>
  <div id="socials">
    <twitter-logo class="social-icon"/>
    <github-logo class="social-icon"/>
  </div>
  </div>
</template>

<script setup lang="ts">
import TwitterLogo from './TwitterLogo';
import GithubLogo from './GithubLogo';
</script>

<style lang="scss" scoped>
#header-container {
  display: flex;
  justify-content: space-between;
  background-color: #1a1a1a;
  padding: 0.5rem 1.5rem;
}

#socials {
  display: flex;
  justify-content: space-evenly;
  width: 10vw;
}

.social-icon {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2rem;
  width: 2rem;
  border-radius: 100%;
  fill: #888888;

  &:hover {
    fill: #4fc08d;
    background-color: #eeeeee;
    padding: 2px
  }
}
</style>