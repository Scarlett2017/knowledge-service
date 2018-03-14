<template>
  <div class="examine-detail">
       <div class="head">
        <h1>审核成果</h1>
      </div>
      <div class="program">
        <div class="wrapper">
            <span class="title">项目名称</span>
            <div class="content">{{examine.name}}</div>
          </div>
          <div class="wrapper">
            <span class="title">目标</span>
            <div class="content">{{examine.target}}</div>
          </div>
          <div class="wrapper">
            <span class="title">需求详情</span>
            <div class="content disc">{{examine.disc}}</div>
          </div>
           <div class="wrapper">
            <span class="title">下载成果附件</span>
            <i class="content el-icon-download">成果文件</i>
          </div>
          <div class="wrapper">
            <span class="title">上传结果报告</span>
            <i class="content el-icon-upload2">上传</i>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      examine:{
        name:'深度学习',
        target:'深度论文一篇',
        disc:'1、熟悉HTML/JavaScript/CSS等Web开发技术2、熟悉常用JavaScript语言，AngularJS、Recact、Vuejs框架的设计思想和实现方式 3、熟悉Sass, Bootstrap等CSS框架4、熟练使用Git等版本控制工具 5、了解Java后端技术和框架的实现方式 6、具有良好的沟通协调能力，团队合作精神和执行力，能够承受工作压力和挑战 7、有Web前端实际项目开发经验者优先 8、有了解Java后端技术和框架的实现方式者为佳'
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.examine-detail
  width 95%
  margin 20px auto
  .head
    padding 10px
    border-bottom solid 1px #cccccc
  .wrapper
      position relative
      margin 15px 0
      .title
          position absolute
          right 88%
          vertical-align top
          font-size $font-size-small
          color #909399
      .content
          display inline-block
          position relative
          left 14%
      .disc
        width 80%
      .el-icon-download,.el-icon-upload2
        color #409EFF
</style>
