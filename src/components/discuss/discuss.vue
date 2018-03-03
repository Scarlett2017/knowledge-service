<template>
 <div class="discuss">
     <div class="head">
         <span>所有讨论</span><span>（{{discussList.length}}）</span>
         <el-button @click="createDiscuss" type="primary" size="mini">创建讨论</el-button>
     </div>
     <div class="main">
        <el-table :data="discussList" stripe style="width: 100%">
        <el-table-column prop="name" label="讨论主题" width="180">
        </el-table-column>
        <el-table-column prop="key" label="关键字" width="180">
        </el-table-column>
        <el-table-column prop="person" label="发布者" width="100">
        </el-table-column>
        <el-table-column prop="updateTime" label="更新时间">
        </el-table-column>
         <el-table-column fixed="right" label="操作" width="100">
        <template slot-scope="scope">
            <el-button @click="discussDetail" type="text" size="small">查看</el-button>
            <el-button class="delete" type="text" size="small" @click="beforeRemove(scope.row.name)">删除</el-button>
        </template>
        </el-table-column>
        </el-table>
        </div>
 </div> 
</template>

<script>
export default {
  data(){
      return{
          discussList:[
              {
                  name:'讨论1',
                  key:['社科','心理'],
                  person:'甲',
                  updateTime:'2018-02-11'
              },
               {
                  name:'讨论2',
                  key:['深度学习'],
                  person:'乙',                  
                  updateTime:'2018-02-22'
              }
          ]
      }
  },
  methods:{
      discussDetail(){
        this.$router.push({
            path:'/discussdetail'
        })
      },
      createDiscuss(){
           this.$router.push({
            path:'/creatediscuss'
        })
      },
         beforeRemove(item) {
         this.$confirm(`确定移除 ${ item }？`, '提示', {
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

<style lang="stylus" scoped>
.discuss
    .head
        margin 20px 20px 0 20px
        padding-bottom 20px
        border-bottom solid 1px #cccccc
        .el-button
            float right
    .main
        .delete
            color #F56C6C 
</style>
