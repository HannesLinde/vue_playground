<template>
<p :class="$style.explosive">
  An explosive text using css modules. {{$style.color}}. With :export css values are accessible via $style....
</p>
  <p :class="$style.boring">Modules are compiled at compile time. No browser issues!</p>
  <button @click="changeClass">Toggle style</button>
  <h2 :class="toggleThisHeadline">Headline</h2>
</template>

<script>
export default {
  name: "moduleStyle",
  data () {
    return {
      showHeadline: false
    }
  },
  methods: {
    changeClass() {
      this.showHeadline = !this.showHeadline;
      console.log(this.showHeadline);
  }
  },
  computed: {
    toggleThisHeadline() {
      return this.showHeadline ? this.$style.explosive : this.$style.boring //????????????
    }
  }
}
</script>

<style module>
body {
  --main-color: #ff0000;
  --sub-color: #000000
}

:export {
  color: var(--main-color);
}

.boring {
  background-color: #4fc08d;
  color: var(--sub-color);
}

.explosive {
  background-color: blue;
  color: var(--main-color);
}

.display {
  display: block;
}

.no-display {
  display: none;
}
</style>