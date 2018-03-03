<template>
  <div class="message">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item>项目管理</el-breadcrumb-item>
      <el-breadcrumb-item>消息</el-breadcrumb-item>
    </el-breadcrumb>
    <el-row>
      <el-col :span="4">
        <el-menu default-active="2" class="el-menu-vertical-demo" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
          <router-link to="/message/report">
            <el-menu-item index="1">
              <i class="el-icon-tickets"></i>
              <span slot="title">结果报告</span>
            </el-menu-item>
          </router-link>
          <router-link to="/message/feedback">
            <el-menu-item index="2">
              <i class="el-icon-news"></i>
              <span slot="title">需求反馈</span>
            </el-menu-item>
          </router-link>
          <router-link to="/message/cooperation">
            <el-menu-item index="3">
              <i class="el-icon-message"></i>
              <span slot="title">合作请求</span>
            </el-menu-item>
          </router-link>
          <router-link to="/message/notice">
            <el-menu-item index="4">
              <i class="el-icon-bell"></i>
              <span slot="title">系统通知</span>
            </el-menu-item>
          </router-link>
        </el-menu>
      </el-col>
      <el-col :span="17" class="main">
        <router-view></router-view>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {

  }

</script>

<style lang="stylus" scoped>
.message
  .el-breadcrumb
    display inline-block
    margin 0 0 20px 0
  .main
        min-height 600px 
        margin-left 20px
        background-color #ffffff
</style>
