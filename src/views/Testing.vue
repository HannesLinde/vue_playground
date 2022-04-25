<template>
  <router-link :to="{name: 'Testing inputs'}">Input testing</router-link>
<h2>Best practices</h2>
  <blockquote>If you can only have two tests for your application...
  <br />1.Can the user login?
  <br />2.Can the user pay us?
  </blockquote>
  <h3>Unit testing</h3>
  <p>Use Jest or Mocha for a start</p>
  <p>Vue test utils?</p>
  <p>Checkout <a target="blank" href="https://testing-library.com">Testing Library</a></p>
  <p>Writing unit tests</p>
  <ul>
    <li>Don't test that vue works</li>
    <li>Primarily stick with shallow rendering</li>
    <li>Build unit tests into generators --> automatically generate test file when creating component</li>
    <li>Unit tests are loads of work --> anti-pareto-principle</li>
  </ul>
  <h3>End-To-End</h3>
  <ul>
    <li>Often avoided due to "flakiness" and "long time to run"</li>
    <li>Should be prioritized since basic functionalities are key (to business!) </li>
    <li>Cypress!!! and TestCafe</li>
    <li>Don't maintain state between tests --> tests should be independent of each other</li>
    <li>Don't select elements with CSS-classes</li>
    <li>Think from the user's perspective!</li>
  </ul>
</template>

<script>
export default {
  name: "testing"
}
</script>

<style scoped>

</style>