<template>
  <div class="report">
    <el-table :data="report" size="small">
      <el-table-column fixed prop="name" label="文件名">
      </el-table-column>
      <el-table-column prop="size" label="大小">
      </el-table-column>
      <el-table-column prop="program" label="项目">
      </el-table-column>
      <el-table-column prop="progress" label="阶段">
      </el-table-column>
      <el-table-column prop="date" label="更新时间">
      </el-table-column>
      <el-table-column fixed="right" label="操作">
        <template slot-scope="scope">
          <el-button type="text" size="mini">
            <i class="el-icon-download"></i>下载</el-button>
          <el-button @click="beforeRemove(scope.row.name)" class="delete" type="text" size="mini">
            <i class="el-icon-close"></i>移除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        report: [{
            name: '报告1.pdf',
            size: '1.5M',
            program: 'ProgramA',
            progress:'阶段一',
            date: '2018-02-04'
          },
          {
            name: '深度学习.pdf',
            size: '2.3M',
            program: 'ProgramA',
            progress:'阶段二',
            date: '2018-02-24'
          }
        ]
      }
    },
    methods:{
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
.report
    margin 10px
    .delete
      color #F56C6C
</style>
