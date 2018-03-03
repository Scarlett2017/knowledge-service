<template>
  <div id="app">
    <tab></tab>
    <div class="container">
      <keep-alive>
      <!-- keepalive把dom缓存到内存中，不会发送请求，不需要重新渲染dom -->
      <router-view></router-view>    
    </keep-alive>
    </div>
  </div>
</template>

<script>
import Tab from './components/tab/tab'

export default {
  components:{
    Tab
  }
}
</script>

<style lang="stylus">
#app
  .container
    width 80%
    margin 20px auto
</style>

