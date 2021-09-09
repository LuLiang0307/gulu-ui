<demo>
支持显示加载中
</demo>
<template>
  <h1>示例5</h1>
  <div>
    <Button loading>加载中</Button>
    <Button>加载完毕</Button>
  </div>
</template>
<script lang='ts'>
import Button from "../lib/Button.vue";

export default {
  components: { Button },
  setup() {
    const onClick = () => {
      console.log("hi");
    };
    return { onClick };
  },
};
</script>
<style scoped lang="scss">
</style>
