<template>
  <div>tabs示例</div>
  <Tabs v-model:selected="x">
    <Tab title="导航一">Tab1</Tab>
    <Tab title="导航二">Tab2</Tab>
  </Tabs>
</template>
<script>
import Tabs from "../lib/Tabs.vue";
import Tab from "../lib/Tab.vue";
import { ref } from "vue";
export default {
  components: {
    Tabs,
    Tab,
  },
  setup() {
    const x = ref("导航一");
    return { x };
  },
};
</script>
<style module lang="scss">
</style>