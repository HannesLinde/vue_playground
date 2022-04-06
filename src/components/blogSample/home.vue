<template>
  <div id="dynamic-component-demo" class="demo">
    <button
        @click="currentTab = tab"
        v-for="tab in tabs"
        :key="tab"
        :class="['tab-button', { active: currentTab === tab }]"
    >
      {{ tab }}
    </button>
    <keep-alive>
      <component :is="currentTabComponent"></component>
    </keep-alive>
  </div>
</template>
<script lang="ts">
import {defineComponent} from "vue";
import tabPosts from "@/components/blogSample/tabPosts.vue";
import tabHome from "@/components/blogSample/tabHome.vue";

export default defineComponent({
  data() {
    return {
      currentTab: 'Home',
      tabs: ['Home', 'Posts']
    }
  },
  computed: {
    currentTabComponent(): string {
      return 'tab' + this.currentTab
    }
  },
  components: {
    tabHome,
    tabPosts
  }
})
</script>

<style lang="scss" scoped>
body {
  font-family: 'Noto Serif JP', serif;
}

.demo {
  padding: 20px 30px;
  margin-top: 1em;
  margin-bottom: 40px;
  user-select: none;
  overflow-x: auto;
}

.tab-button {
  font-family: 'Noto Serif JP', serif;
  border: 1px solid #ccc;
  cursor: pointer;
  background: #f0f0f0;
  margin-bottom: -1px;
  margin-right: -1px;
}

.tab-button:hover {
  background: #e0e0e0;
}

.tab-button.active {
  background: #ffffff;
  text-decoration: underline ;
}

li {
  cursor: pointer;
}

img {
  border-radius: 4px;
  border: 1px solid #555;
}
</style>
