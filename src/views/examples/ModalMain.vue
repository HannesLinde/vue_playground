<template>
  <div id="modal-main">
    <div :class="[childIsShowing ? blurClass : '', bkClass]">
      <h3>Let's trigger this here modal!</h3>
      <button @click="toggleShow">
        <span v-if="childIsShowing">Hide child</span>
        <span v-else>Show child</span>
      </button>
    </div>
    <transition name="fade">
      <modal-child v-if="childIsShowing" @toggleShow="toggleShow">
      </modal-child>
    </transition>
  </div>
</template>
<script setup lang="ts">
import modalChild from "../../components/ModalChild.vue"
import {ref} from "vue";

const childIsShowing = ref(false);
const bkClass = ref('bk');
const blurClass = ref('blur');

const toggleShow = () => {
  childIsShowing.value = !childIsShowing.value;
};
</script>
<style lang="scss" scoped>

@keyframes slide-right {
  100% {right: 10000px }
}

.fade-enter-active {
  transition: opacity 2.5s ease-out;
}

.fade-leave-active {
  transition: opacity 0.50s ease-in;
}

.fade-enter-from, .fade-leave-to {
  animation: slide-right 3s;
  opacity: 0;
}

#modal-main {
  display: flex;
  flex-direction: column;
  align-items: center;

  button {
    font-family: 'Roboto Mono';
    border: 2px solid black;
    background-color: white;
    padding: 10px 15px;
    margin: 0 10px;
    outline: 0;
    width: 60%;
    cursor: pointer;

    &:hover {
      background-color: #009922;
    }
  }
}

h4 {
  margin: 0 0 15px;
}

.modal {
  background: cyan;
  color: black;
  padding: 20px;
  margin-top: 200px;
  width: 200px;
  position: absolute;
  border: 2px solid black;
}

.bk {
  transition: all 0.05s ease-out;
}

.blur {
  filter: blur(1px);
  opacity: 0.4;
}
</style>
