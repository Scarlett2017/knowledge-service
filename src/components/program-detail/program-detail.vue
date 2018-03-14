<template>
  <div class="programDetail">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item>项目管理</el-breadcrumb-item>
      <el-breadcrumb-item>我的项目</el-breadcrumb-item>
      <el-breadcrumb-item>ProgramA</el-breadcrumb-item>
    </el-breadcrumb>
    <el-row>
      <el-col :span="4">
        <el-menu default-active="1" class="el-menu-vertical-demo" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
          <router-link to="/dynamic">
            <el-menu-item index="1">
              <i class="el-icon-news"></i>
              <span slot="title">动态</span>
            </el-menu-item>
          </router-link>
          <router-link to="/progress">
            <el-menu-item index="2">
              <i class="el-icon-date"></i>
              <span slot="title">阶段</span>
            </el-menu-item>
          </router-link>
          <router-link to="/discuss">
            <el-menu-item index="3">
              <i class="el-icon-edit"></i>
              <span slot="title">讨论</span>
            </el-menu-item>
          </router-link>
          <router-link to="/file">
            <el-menu-item index="4">
              <i class="el-icon-document"></i>
              <span slot="title">文件</span>
            </el-menu-item>
          </router-link>
          <router-link to="/teammate">
            <el-menu-item index="5">
              <i class="el-icon-view"></i>
              <span slot="title">成员</span>
            </el-menu-item>
          </router-link>
          <router-link to="/collect">
            <el-menu-item index="6">
              <i class="el-icon-star-off"></i>
              <span slot="title">收藏</span>
            </el-menu-item>
          </router-link>
           <router-link to="/contract">
            <el-menu-item index="7">
              <i class="el-icon-tickets"></i>
              <span slot="title">合约</span>
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
.programDetail
    .el-breadcrumb
        margin 0 0 20px 0
    .main
        min-height 600px 
        margin-left 20px
        background-color #ffffff
</style>
