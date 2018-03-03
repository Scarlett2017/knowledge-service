<template>
  <div>
     <el-menu class="menu" :default-active="activeIndex" mode="horizontal" background-color="#545c64"
      text-color="#fff" active-text-color="#ffd04b">
      <el-submenu index="1" class="sub-menu">
        <template slot="title">项目管理</template>
        <router-link to="/">
           <el-menu-item index="1-1">我的项目</el-menu-item>
        </router-link>
        <router-link to="/message/report">
          <el-menu-item index="1-2">消息</el-menu-item>
        </router-link>
        <router-link to="/team">
          <el-menu-item index="1-3">我的团队</el-menu-item>
        </router-link>
      </el-submenu> 
      <el-submenu index="2">
        <template slot="title">帐号管理</template>
        <router-link to="/basicInfo">
          <el-menu-item index="2-1">基本信息</el-menu-item>
        </router-link>
        <router-link to="/majorInfo">
          <el-menu-item index="2-2">专业信息</el-menu-item>
        </router-link>
      </el-submenu>               
      <el-menu-item index="3">
        <router-link to="/demand">发布需求</router-link>
      </el-menu-item>    
    </el-menu>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        activeIndex: '1'
      };
    },
    methods: {
    }
  }
</script>

<style lang="stylus" scoped>
.menu
  .sub-menu
    margin-left 100px
</style>
