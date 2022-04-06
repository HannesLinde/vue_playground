<template>
  <div class="modal">
    <h2>Here I am!</h2>
    <button @click="$emit('toggleShow')">
      Close
    </button>
  </div>
</template>
<style lang="scss" scoped>
.modal {
  background: cyan;
  color: black;
  padding: 20px;
  margin-top: 200px;
  width: 200px;
  position: absolute;
  border: 2px solid black;
}
</style>
