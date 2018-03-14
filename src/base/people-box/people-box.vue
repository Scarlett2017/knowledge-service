<template>
  <el-card :data="data">
    <div class="left">
      <img :src="data.avatar" width="70px" height="105px">
      <div>
        <el-button size="mini" :class="typeChange(data.type)" @click="confirm(data)">{{data.type}}</el-button>
      </div>
    </div>
    <div class="disc">
      <h1>{{data.name}}</h1>
      <div class="textwrapper">
        <span>单位：</span>
        <div class="text">{{data.company}}</div>
      </div>
      <div class="textwrapper">
        <span>职位：</span>
        <div class="text">{{data.profession}}</div>
      </div>
      <div class="textwrapper">
        <span>方向：</span>
        <div class="text">{{data.director}}</div>
      </div>
    </div>
  </el-card>
</template>

<script>
  export default {
    props: {
      data: {
        type: Object,
        default: null
      }
    },
    methods: {
      typeChange(type) {
        return type === '发送邀请' ? 'primary' : 'danger'
      },
      confirm(item) {
        if (item.type === '发送邀请') {
          this.$message({
              message:'已发送请求！请等待对方确认',
              type:'success'
          })
        } else {
          this.$confirm(`确定移除 ${ item.name }？`, '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            this.$message({
              type: 'success',
              message: '删除成功!'
            });
          }).catch(() => {
            this.$message({
              type: 'info',
              message: '已取消删除'
            });
          });
        }
      }
    }
  }

</script>



<style lang="stylus" scoped>
.el-card
    display inline-block
    position relative
    margin 10px
    width 300px
    min-height 150px
    .left
        display inline-block
        .el-button
            margin 10px 0 0 5px
            padding 5px
            font-size 10px
        .primary
            color #409EFF
        .danger
            color #F56C6C
    .disc
        display inline-block
        position absolute
        top 10px
        right 10px
        width 65%
        margin-left 5px
        h1
            font-size 16px
            margin 10px
        .textwrapper
            margin 5px
            span,.text
                margin 5px
                font-size 14px
            .text
                display inline-block
                margin 0
                width 65%
                vertical-align top
</style>
