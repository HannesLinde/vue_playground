<template>
  <p>
    The <code>style</code> tag of single-file-components should get the <code>scoped</code> attribute by default. Sometimes (e.g. on #app-level) it might make sense to not use it. There is another way to keep CSS-classes local, using class bindings and <code>&#60;style module&#62;</code> For the paragraph below, the code looks like this
  </p>
  <base-code-block :description="'Test description'">
    <template v-slot:my-code>
      Test Code
    </template>
  </base-code-block>
  <p :class="$style.explosive">
  An explosive text using css modules. {{$style.color}}. With :export css values are accessible via $style....
</p>
  <p :class="$style.boring">Modules are compiled at compile time. No browser issues!</p>
  <button @click="changeClass">Toggle style</button>
  <h2 :class="toggleThisHeadline">Headline</h2>
  <pre>{{$style}}</pre>
</template>
<script setup lang="ts">
import {ref, getCurrentInstance, computed} from "vue";
import BaseCodeBlock from '@/components/BaseCodeBlock';

const headlineStyle = ref(false);
const thisCompo = getCurrentInstance();
const styles = thisCompo?.ctx.$options.__cssModules.$style;
const changeClass = () => {
  console.log("Styles", styles);
  console.log(typeof(thisCompo))
  headlineStyle.value = !headlineStyle.value
}
const toggleThisHeadline = computed(() => {
  // return headlineStyle.value ? getCurrentInstance()?.ctx.$options.__cssModules.$style.explosive : getCurrentInstance()?.ctx.$options.__cssModules.$style.boring;
  return headlineStyle.value ? styles.explosive : styles.boring;
})
</script>

<!--
<script>
import {defineComponent, getCurrentInstance} from "vue";

export default defineComponent({
  data() {
    return {
      headlineStyle: false,
    }
  },
  methods: {
    changeClass() {
      this.headlineStyle = !this.headlineStyle;
      console.log(this);
      console.log(this.$style);
    }
  },
  computed: {
    toggleThisHeadline() {
      return this.headlineStyle ? this.$style.explosive : this.$style.boring
    }
  },
})
</script>-->

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

.test {
  text-decoration: underline;
}
.display {
  display: block;
}

.no-display {
  display: none;
}
</style>