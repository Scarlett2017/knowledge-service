<template>
  <div class="contract">
      <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item>合同详情</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="main">
      <div class="detail"></div>
      <div class="btn">
        <el-button type="primary" size="small" icon="el-icon-download">下载合同</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="stylus" scoped>
.el-breadcrumb
    margin 10px 0 0 10px
.main
    width 90%
    min-height 600px
    margin 10px auto
    .detail
        display block 
        width 500px
        height 700px
        margin 10px auto 
        border solid 1px #cccccc
    .btn
       text-align center
        
</style>
