<template>
  <div class="teammate">
    <div class="head">
      <span>项目成员（{{teammate.length}}）</span>
      <el-button @click="addTeammate" type="primary" size="mini">添加成员</el-button>
    </div>
    <div class="main">
      <el-table :data="teammate" border style="width: 100%">
        <el-table-column prop="name" label="姓名">
        </el-table-column>
        <el-table-column prop="role" label="权限">
          <template slot-scope="scope">
            <el-tag :type="scope.row.role === '项目创建者' ? 'danger' : scope.row.role === '管理员' ? 'primary' : 'success'" close-transition>{{scope.row.role}}</el-tag>
          </template>
        </el-table-column>
        <el-table-column fixed="right" label="操作">
          <template slot-scope="scope">
            <el-button type="text" size="small">设为管理员</el-button>
            <el-button @click="beforeRemove(scope.row.name)" class="delete" type="text" size="small">删除</el-button>
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
          teammate:[
              {
                  name:'甲',
                  role:'项目创建者'
              },
                {
                  name:'乙',
                  role:'管理员'
              },
                {
                  name:'丙',
                  role:'成员'
              },
                {
                  name:'丁',
                  role:'成员'
              }
          ]
      }
  },
  methods:{
     beforeRemove(item) {
       if(item.role !== '项目创建者'){
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
      },
      addTeammate(){
        this.$prompt('请账户名', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
        }).then(({ value }) => {
          this.$message({
            type: 'success',
            message: '已发送加入请求，请等待对方确认'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '取消输入'
          });       
        });
      }
  }
}
</script>

<style lang="stylus" scoped>
.teammate
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
