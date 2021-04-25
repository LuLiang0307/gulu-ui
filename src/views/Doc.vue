<template>
  <div>
    <Topnav/>
    <div class="content">
      <aside>
        <h2>组件列表</h2>    
        <ol>
          <li><router-li to="/doc/switch">Switch 组件</router-li></li>
          <li><router-li to="/doc/button">Button 组件</router-li></li>
          <li><router-li to="/doc/dialog">Dialog 组件</router-li></li>
          <li><router-li to="/doc/tabs">Tabs 组件</router-li></li>
        </ol>    
      </aside>
      <main>主内容</main>
    </div>
  </div>
</template>
<script lang='ts'>
import Topnav from '../components/Topnav.vue'
export default {
  components:{
    Topnav
  }
}

</script>

<style lang="scss" scoped>
</style>