<template>
  <div class="comment">
    <el-card :data="data" class="box-card">
      <div class="item-detail">{{data.detail}}</div>
      <div class="item-name">
        <span>{{data.name}} </span>
        <span>{{data.date}}
          <i class="el-icon-time"></i>{{data.time}}</span>
        <el-button type="text" size="mini">回复</el-button>
        <el-button @click="beforeRemove" class="delete" type="text" size="mini">删除</el-button>
      </div>
    </el-card>
  </div>
</template>

<script>
  export default {
    props:{
        data:{
            type:Object,
            default:null
        }
    },
    methods:{
         beforeRemove() {
         this.$confirm('确定删除回复?', '提示', {
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

</script>

<style lang="stylus">
.comment
    margin-top 20px
    .box-card
        width 90%
        margin 10px auto
        .item-detail
            margin-bottom 20px
            font-size 14px
        .item-name
            font-size 12px
            color #cccccc
            .delete
                color #F56C6C 

</style>
