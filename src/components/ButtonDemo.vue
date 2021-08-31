<template>
  <div>
    <Button>你好</Button>
    <Button theme="button">你好，按钮</Button>
    <Button theme="link">你好，链接</Button>
    <Button theme="text">你好，文本</Button>
  </div>
</template>
<script lang='ts'>
import Button from '../lib/Button.vue';
  export default{
    components:{Button},
    setup(){
      
    }
  }
  
</script>
<style module lang="scss">
     
</style>