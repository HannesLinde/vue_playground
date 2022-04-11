<template>
  <div class="modal-container">
    <div class="modal">
      <h2>Here I am!</h2>
      <button @click="$emit('toggleShow')">
        Close
      </button>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.modal {
  background: cyan;
  color: black;
  padding: 20px;
  min-width: 90vw;
  min-height: 90vh;
  position: absolute;
  top: 1rem;
  bottom: 1rem;
  left: 1rem;
  right: 1rem;
  border: 2px solid black;
}
.modal-container {
  display: flex;
  justify-items: center;
}
</style>
