<template>
  <div id="ball-main">
    <p>
      This animation uses the transition component.
    </p>
  <h3>Bounce the Ball!</h3>

  <button @click="toggleShow">
    <span v-if="isShowing">Get it gone!</span>
    <span v-else>Here we go!</span>
  </button>

  <transition
      name="ballmove"
      enter-active-class="bouncein"
      leave-active-class="rollout">
    <div v-if="isShowing">
      <animation-child class="child"></animation-child>
    </div>
  </transition>
  </div>
</template>

<script ang="ts">
import {defineComponent} from "vue";
import AnimationChild from "./animationChild";

export default defineComponent({
  components: {AnimationChild},
  data() {
    return {
      isShowing: false,
      bkClass: 'bk',
      blurClass: 'blur'
    }
  },
  methods: {
    toggleShow() {
      this.isShowing = !this.isShowing;
    }
  }
})
</script>
<style lang="scss" scoped>
@mixin ballb($xaxis:0, $yaxis: 0) {
  transform: translate3d($xaxis, $yaxis, 0);
}

body {
  font-family: 'Bitter', serif;
  width: 100vw;
  height: 100vh;
  background: #eeeeee;
  background: -moz-linear-gradient(top, #eeeeee 0%, #cccccc 65%, #eeeeee 99%); /* FF3.6-15 */
  background: -webkit-linear-gradient(top, #eeeeee 0%,#cccccc 65%,#eeeeee 99%); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(to bottom, #eeeeee 0%,#cccccc 65%,#eeeeee 99%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#eeeeee', endColorstr='#eeeeee',GradientType=0 ); /* IE6-9 */
}

#ball-main {
  text-align: center;
  margin: 60px;
  max-width: 320px;
  margin: 0 auto;
  display: table;
}

.num {
  color: #AF007E;
}

button {
  font-family: 'Bitter';
  background: #c62735;
  color: white;
  border: 0;
  padding: 5px 15px;
  margin: 0 10px;
  border-radius: 4px;
  outline: 0;
  cursor: pointer;
}

h4 {
  margin: 0 0 15px;
}

hr {
  border-color: #F2FAFF;
  opacity: 0.5;
  margin: 15px 0;
}

.ball {
  width: 60px;
  height: 60px;
  background: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/28963/soccerball.svg") #2c3e50;
  transform-origin: 50% 50%;
  transform: translate3d(0, 300px, 0) rotate(0);
}

@keyframes bouncein {
  1% { @include ballb(100px,-400px); }
  20%, 40%, 60%, 80%, 95%, 99%, 100% { @include ballb() }
  30% { @include ballb(50px,-80px); }
  50% { @include ballb(25px,-40px); }
  70% { @include ballb(15px,-30px); }
  90% { @include ballb(10px,-15px); }
  97% { @include ballb(5px,-10px); }
}

@keyframes rollout {
  0% { transform: translate3d(0, 300px, 0); }
  100% { transform: translate3d(1000px, -300px, 0px); }
}

@keyframes ballroll {
  0% { transform: rotate(0); }
  100% { transform: rotate(10000deg); }
}

.ballmove-enter {
  @include ballb(-400px);
}

.bouncein {
  animation: bouncein 3s cubic-bezier(0.47, 0, 0.745, 0.715) both;
}

.rollout {

  animation: rollout 0.5s cubic-bezier(0.55, 0.085, 0.68, 0.53) both;
  div {
    width: 300px;
    height: 300px;
    animation: ballroll 0.5s cubic-bezier(0.55, 0.085, 0.68, 0.53) both;
  }
}
</style>
