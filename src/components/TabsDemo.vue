<template>
  <div>tabs示例</div>
  <Tabs>
    <Tab title="导航一">Tab1</Tab>
    <Tab title="导航二">Tab2</Tab>
  </Tabs>
</template>
<script>
import Tabs from "../lib/Tabs.vue";
import Tab from "../lib/Tab.vue";
export default {
  components: {
    Tabs,
    Tab,
  },
};
</script>
<style module lang="scss">
</style>