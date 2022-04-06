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
<script>
import {defineComponent} from "vue";
import modalChild from "./modalChild.vue"

export default defineComponent({
  data() {
    return {
      childIsShowing: false,
      bkClass:'bk',
      blurClass: 'blur'
    }
  },
  methods: {
    toggleShow() {
      this.childIsShowing = !this.childIsShowing;
    }
  },
  components: {
    modalChild
  }
})
</script>
<style lang="scss" scoped>

.fade-enter-active {
  transition: opacity 2.5s ease-out;
}

.fade-leave-active {
  transition: opacity 0.50s ease-in;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

body {
  font-family: 'Roboto Mono', serif;
  display: flex;
  justify-content: center;
}

#modal-main {
  text-align: center;
  margin: 60px;
  max-width: 370px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

button {
  font-family: 'Roboto Mono';
  border: 2px solid black;
  background: white;
  padding: 10px 15px;
  margin: 0 10px;
  outline: 0;
  width: 60%;
  cursor: pointer;
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
