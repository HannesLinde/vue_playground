<template>
  <div class="header-container">
    <router-link to="/">
      <img alt="Vue logo" src="@/assets/logo.png">
    </router-link>
    <div class="socials">
      <twitter-logo class="social-icon"/>
      <github-logo class="social-icon"/>
      <hamburger-menu class="social-icon hamburger-icon" @toggleMobileMenuDisplay="toggleMobileMenuDisplay" />
    </div>
  </div>
</template>

<script setup lang="ts">
import {defineEmits, ref} from "vue";
import TwitterLogo from '@/components/layout/TwitterLogo';
import GithubLogo from '@/components/layout/GithubLogo';
import HamburgerMenu from "@/components/layout/HamburgerMenu.vue";

const emit = defineEmits<{
  (e: 'toggleMobileMenuDisplay'): void
}>();

const toggleMobileMenuDisplay = () => {
  emit('toggleMobileMenuDisplay');
};
</script>

<style lang="scss" scoped>
.header-container {
  display: flex;
  justify-content: space-between;
  background-color: #1a1a1a;
  padding: 0.5rem 1.5rem;

  img {
    height: 100px;
  }
}

.socials {
  display: flex;
  justify-content: space-evenly;
  width: 12rem;
}

.social-icon {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 3rem;
  width: 3rem;
  border-radius: 100%;
  fill: #888888;
  padding: 2px;

  &:hover {
    fill: #4fc08d;
    background-color: #eeeeee;
  }
}

@media only screen and (min-width: 601px) {
  .hamburger-icon {
    display: none;
  }
}

@media only screen and (max-width: 600px) {
 .socials {
   width: 40vw;
   display: flex;
   justify-content: space-between;
 }

  .header-container {
    img {
      height: 50px;
    }
  }

  .hamburger-icon {
    background-color: #B2FFFF;
  }
}
</style>
