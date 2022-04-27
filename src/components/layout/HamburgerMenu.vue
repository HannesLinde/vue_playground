<template>
  <div class="hamburger-icon"
       @click="toggleMobileMenuDisplay"
  >
    <i class="fa-solid fa-bars"/>
<!--    <i
        v-if="!menuSelected"
        class="fa-solid fa-bars"
    />
    <i v-else class="fa-solid fa-xmark" />-->
  </div>
</template>

<script setup lang="ts">
import {defineEmits, ref} from "vue";

const menuSelected = ref(false);

const emit = defineEmits<{
  (e: 'toggleMobileMenuDisplay'): void
}>();

const toggleMobileMenuDisplay = () => {
  menuSelected.value = !menuSelected.value;
  emit('toggleMobileMenuDisplay');
};

</script>
<style lang="scss" scoped>
.hamburger-icon {
  color: #888888;
  font-size: 2.5rem;
}
</style>
