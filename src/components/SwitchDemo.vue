<template>
  <h1>Switch示例</h1>
  <Demo :component="Switch1Demo" />
  <Demo :component="Switch2Demo" />
</template>
<script>
import Switch1Demo from "../components/Switch1.demo.vue";
import Switch2Demo from "../components/Switch2.demo.vue";
import Demo from "../components/Demo.vue";
const Prism = window.Prism;
export default {
  components: {
    Demo,
  },
  setup() {
    return { Switch1Demo, Switch2Demo };
  },
};
</script>
<style scoped lang="scss">
$border-color: #d9d9d9;
.demo {
  border: 1px solid $border-color;
  margin: 16px 0 32px;
  > h2 {
    font-size: 20px;
    padding: 8px 16px;
    border-bottom: 1px solid $border-color;
  }
  &-component {
    padding: 16px;
  }
  &-actions {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;
  }
  &-code {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;
    > pre {
      line-height: 1.1;
      font-family: Consolas, "Courier New", Courier, monospace;
      margin: 0;
    }
  }
}
</style>