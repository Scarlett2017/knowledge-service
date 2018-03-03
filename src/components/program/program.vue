<template>
  <div class="program">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item>项目管理</el-breadcrumb-item>
      <el-breadcrumb-item>我的项目</el-breadcrumb-item>
    </el-breadcrumb>
    <el-button type="primary" size="small">新建项目</el-button>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="name" label="项目名称" width="180">
        <template scope="scope">
          <router-link to="/dynamic">
            <span>{{scope.row.name}}</span>
          </router-link>
        </template>
      </el-table-column>
      <el-table-column prop="StartTime" label="开始时间" width="180">
      </el-table-column>
      <el-table-column prop="EndTime" label="完成时间">
      </el-table-column>
      <el-table-column prop="state" label="状态" width="100" :filters="[{ text: '完成中', value: '完成中' }, { text: '未开始', value: '未开始' },{text:'已完成',value:'已完成'}]"
        :filter-method="filterState" filter-placement="bottom-end">
        <template slot-scope="scope">
          <el-tag :type="scope.row.state === '完成中' ? 'success' : scope.row.state === '未开始' ? 'primary' : 'info'" close-transition>{{scope.row.state}}</el-tag>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>


<script>
  export default {
    data() {
      return {
        activeName: 'second',
        tableData: [{
          name: 'ProgramA',
          StartTime: '2018-01-01',
          EndTime: '2018-02-01',
          state:'完成中'
        }, {
          name: 'ProgramB',
          StartTime: '2018-02-01',
          EndTime: '2018-03-01',
          state:'完成中'
        }, {
          name: 'ProgramC',
          StartTime: '2018-01-11',
          EndTime: '2018-05-01',
          state:'未开始'
        }, {
          name: 'ProgramD',
          StartTime: '2018-03-20',
          EndTime: '2018-04-20',
          state:'已完成'
        }]
      };
    },
    methods: {
      filterState(value, row) {
        return row.state === value;
      },
      filterHandler(value, row, column) {
        const property = column['property'];
        return row[property] === value;
      },
      selectItem(name){
         this.$router.push({
          path:'/program1'
        })
      }
    }
  }

</script>

<style lang="stylus" scoped>
.program
  .el-breadcrumb
    display inline-block
    margin 0 0 20px 0
  .el-button
    float right
    margin 0 0 15px 0     
</style>
