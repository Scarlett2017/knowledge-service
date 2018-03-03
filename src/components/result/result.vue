<template>
  <div class="result">
    <div class="head">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item>阶段一</el-breadcrumb-item>
        <el-breadcrumb-item>阶段成果</el-breadcrumb-item>
      </el-breadcrumb>
      <el-button @click="resultDetail" type="primary" size="mini">查看结果报告</el-button>
    </div>
    <div class="main">
      <el-upload drag action="https://jsonplaceholder.typicode.com/posts/" multiple>
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">将成果文件拖到此处，或
          <em>点击上传</em>
        </div>
        <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
      </el-upload>
      <el-button type="primary" size="small" @click="success">提交成果审核</el-button>
    </div>
  </div>
</template>


<script>
export default {
  methods:{
    resultDetail(){
      this.$router.push({
        path:'/message/report'
      })
    },
    success(){
         this.$message({
          message: '提交成功！请等待审核',
          type: 'success'
        });
    }
  }
}
</script>

<style lang="stylus" scoped>
.result
    .head
        margin 20px 20px 0 20px
        padding-bottom 20px
        border-bottom solid 1px #cccccc
        .el-breadcrumb
            display inline-block
        .el-button
            float right 
    .main
        margin-top 20px
        height 300px
        text-align center
        .el-button
          margin 20px 0
</style>
