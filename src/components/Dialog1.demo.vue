<demo>
常规使用
</demo>

<template>
  <h1>示例1</h1>
  <Button @click="toggle">toggle</Button>
  <Dialog
    v-model:visible="x"
    :closeOnClickOverlay="false"
    :ok="f1"
    :cancel="f2"
  >
    <template v-slot:content>
      <strong>Hi</strong>
      <div>Hi2</div>
    </template>
    <template v-slot:title>
      <strong>加粗的标题</strong>
    </template>
  </Dialog>
</template>
<script lang='ts'>
import Dialog from "../lib/Dialog.vue";
import Button from "../lib/Button.vue";
import { ref } from "vue";
import { openDialog } from "../lib/openDialog";
export default {
  components: { Dialog, Button },
  setup() {
    const x = ref(false);
    const toggle = () => {
      x.value = !x.value;
    };
    const f1 = () => {
      return false;
    };
    const f2 = () => {};
    const showDialog = () => {
      openDialog({
        title: "标题",
        content: "你好",
        ok() {
          console.log(1);
        },
        cancel() {
          console.log(2);
        },
      });
    };
    return { x, toggle, f1, f2, showDialog };
  },
};
</script>
<style lang="scss">
</style>