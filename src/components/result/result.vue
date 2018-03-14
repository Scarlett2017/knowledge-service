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
    </div>
    <el-form v-model="form">
      <el-form-item label="审核要求">
        <prov-city></prov-city>
      </el-form-item>
      <el-form-item label="具体描述">
        <el-input size="small" v-model="form.disc" type="textarea" placeholder="请输入审核要求" style="width:400px"></el-input>
      </el-form-item>
    </el-form>
    <div class="submit">
      <el-button type="primary" size="small" @click="success">提交成果审核</el-button>
    </div>
    <div class="foot">
      <a @click="open">已联系了审核专家？</a>
    </div>
  </div>
</template>



<script>
import ProvCity from '../../base/prov-city/prov-city'

export default {
  data(){
    return{
        form:{
      disc:''
    }
    }
  },
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
    },
     open() {
        this.$prompt('请输入对方帐号', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
        }).then(({ value }) => {
          this.$message({
            type: 'success',
            message: '已发送邀请！请等待对方确认'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '取消输入'
          });       
        });
      }
  },
  components:{
    ProvCity
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
        text-align center
    .el-form
      width 80%
      margin 20px auto
    .submit
      text-align center 
    .foot
      text-align center 
      margin-top 30px
      font-size 12px
      a:hover
        color #409EFF
</style>
