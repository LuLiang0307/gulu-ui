<template>
  <div>
    <Button @click="clickButton" @focus="clickButton" @mouseover="clickButton" size="small">你好</Button>
  </div>
</template>
<script lang='ts'>
import Button from '../lib/Button.vue';
  export default{
    components:{Button},
    setup(){
      const clickButton = ()=>{
        console.log("hi")
      }
      return {clickButton}
    }
  }
  
</script>
<style module lang="scss">
     
</style>