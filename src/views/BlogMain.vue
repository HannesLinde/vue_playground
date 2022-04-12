<template>
  <div id="dynamic-component-demo" class="demo">
    <button
        @click="currentTab=tab"
        v-for="tab in tabs"
        :key="tab"
        :class="['tab-button', { active: currentTab === tab }]"
    >
      {{ tab }}
    </button>
<keep-alive>
      <component :is="currentTabComponent"></component>
    </keep-alive>
<!--          <keep-alive>-->
<!--            <component :is="currentTabComponent != 'tabHome' ? tabPosts : tabHome"></component>-->
<!--          </keep-alive>-->
  </div>
</template>
<script setup lang="ts">
import {computed, defineComponent, ref} from "vue";
import TabPosts from "@/components/BlogTabPosts.vue";
import TabHome from "@/components/BlogTabHome.vue";

// register components --> with script setup they wouldn't be found otherwise
// alternative pattern see out-commented script-tag below
const components = {
  TabPosts,
  TabHome
}

const currentTab = ref('Home');
const tabs = ref(['Home', 'Posts']);
const currentTabComponent = computed((): any => {
  const tabName = 'Tab' + currentTab.value;
  return components[tabName];
});
</script>
<!--<script lang="ts">
import {computed, defineComponent, ref} from "vue";
import tabPosts from "@/components/blogSample/BlogTabPosts.vue";
import tabHome from "@/components/blogSample/BlogMain.vue";

export default defineComponent({
  setup() {
    const currentTab = ref('Home');
    const tabs = ['Home', 'Posts'];
    const currentTabComponent = computed((): string => {
      const tabName = 'tab' + currentTab.value;
      return tabName
    });

    return {
      currentTab,
      tabs,
      currentTabComponent
    }

  },
  components: {
    tabHome,
    tabPosts
  }
})
</script>-->
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
  background: #ffffff;
  margin-bottom: -1px;
  margin-right: -1px;
}

.tab-button:hover {
  background: #e0e0e0;
}

.tab-button.active {
  background: #009922;
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
