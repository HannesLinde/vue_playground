<template>
  <div class="demo-tab">Welcome to the Blog!</div>
  <p>
    Have a fun time reading here. <br/>
    And be aware of the fact how you can switch between components without route changes. <br/>
    And check out the keep-alive functionality that ensures that the selected blogpost will remain selected even if you leave the component (within the blog).
  </p>
</template>
<style lang="scss" scoped>

body {
  font-family: 'Noto Serif JP', serif;
}

.demo-tab {
  border: 1px solid #ccc;
  padding: 10px;
}

li {
  cursor: pointer;
}

img {
  border-radius: 4px;
  border: 1px solid #555;
}
</style>
