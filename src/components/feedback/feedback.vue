<template>
  <div class="feedback">
    <el-table :data="feedback" size="medium">
      <el-table-column fixed prop="name" label="需求名称">
      </el-table-column>
      <el-table-column prop="date" label="发布时间">
      </el-table-column>
      <el-table-column label="反馈">
        <template slot-scope="scope">
          <el-badge :value="12" class="item">
            <el-button size="mini" @click="feedbackDetail">反馈</el-button>
          </el-badge>
        </template>
      </el-table-column>
      <el-table-column fixed="right" label="操作">
        <template slot-scope="scope">
          <el-button type="text" size="mini">
            <i class="el-icon-view"></i>查看</el-button>
          <el-button @click="beforeRemove(scope.row.name)" class="delete" type="text" size="mini">
            <i class="el-icon-close"></i>移除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data(){
      return{
          feedback:[
              {
                name:'关于深度学习的论文',
                date:'2018-02-02',
                match:false
              },
               {
                name:'关于心理学的论文',
                date:'2017-11-20',
                match:true
              }
          ]
      }
  },
  methods:{
      feedbackDetail(){
        this.$router.push({
            path:'/message/feedback/feedback1'
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
.item 
  margin-top: 10px;
  margin-right: 40px;
.delete
    color #F56C6C
</style>
