<template>
  <div id="sweet-main">
    <h2>Nice ones</h2>
    <p>The nice ones use the following code:</p>
    <code>
      &lt;transition name="flip" <b>mode="out-in"</b>&gt;<br/>
          &lt;slot v-if="!isShowing"&gt;&lt;/slot&gt;<br/>
        &lt;img v-else src='...'&gt;<br/>
      &lt;/transition&gt;<br/>
    </code>
    <main>
      <sweet-child>
        <img src='https://images.unsplash.com/photo-1520182205149-1e5e4e7329b4?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ' alt='image of a woman on a train'>
      </sweet-child>
      <sweet-child>
        <img src='https://images.unsplash.com/photo-1501421018470-faf26f6b1bef?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ' alt='drawing of a woman sharing soda with a zombie'>
      </sweet-child>
    </main>

    <h2>Ugly ones</h2>
    <p>The ugly ones use the following code:</p>
    <code>
      &lt;transition name="flip"<br/>
      &lt;slot v-if="!isShowing"&gt;&lt;/slot&gt;<br/>
      &lt;img v-else src='...'&gt;<br/>
      &lt;/transition&gt;<br/>
    </code>
    <main>
      <ugly-child>
        <img src='https://images.unsplash.com/photo-1520182205149-1e5e4e7329b4?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ' alt='image of a woman on a train'>
      </ugly-child>
      <ugly-child>
        <img src='https://images.unsplash.com/photo-1501421018470-faf26f6b1bef?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ' alt='drawing of a woman sharing soda with a zombie'>
      </ugly-child>
    </main>
  </div>
</template>
<script>
import {defineComponent} from "vue";
import sweetChild from "@/components/AnimationsSweetTransitionsSweetChild";
import uglyChild from "@/components/AnimationsSweetTransitionsUglyChild";

export default defineComponent({
  components: {
    sweetChild,
    uglyChild
  }
})
</script>

<style lang="scss" scoped>
body {
  font-family: "Bitter", serif;
  background: #333;
  color: white;
}

#sweet-main {
  text-align: center;
  margin: 60px;
  margin: 0 auto;
  display: table;
}

button {
  font-family: "Bitter";
  background: #c62735;
  color: white;
  border: 0;
  padding: 5px 15px;
  margin: 0 10px;
  border-radius: 4px;
  outline: 0;
  cursor: pointer;
}

.img-contain {
  width: 250px;
  height: 160px;
  overflow: hidden;
  transform-origin: 50% 50%;
}

img {
  width: 100%;
  transform-origin: 50% 50%;
  cursor: pointer;
  transform: scaleY(1) translateZ(0);
  margin: 5px;
}

main {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.img-contain:hover .overlay {
  opacity: 1;
  background: hsla(50, 0%, 0%, 0.6);
  transition: 0.3s all ease-out;
}

.img-contain .overlay {
  position: absolute;
  z-index: 1000;
  display: block;
  width: 245px;
  height: 155px;
  margin: 5px;
  opacity: 0;
  overflow: hidden;
  transition: 0.3s all ease-in;
}

.overlay-text {
  margin-top: 40px;
}

h4 {
  margin: 0 0 15px;
}

.flip-enter-active {
  transition: all 0.2s cubic-bezier(0.55, 0.085, 0.68, 0.53); //ease-in-quad
  transform-origin: 50% 50%;
}

.flip-leave-active {
  transform-origin: 50% 50%;
  transition: all 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94); //ease-out-quad
}

.flip-enter-from,
.flip-leave-to {
  transform-origin: 50% 50%;
  transform: scaleY(0) translateZ(0);
  opacity: 0;
}
</style>
