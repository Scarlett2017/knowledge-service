<template>
  <div class="progress">
    <div class="main">
      <el-collapse v-for="item in progressList">
        <el-collapse-item name="1">
          <template slot="title">
            <span>{{item.name}}</span>
            <el-tag type="mini" class="text">目标</el-tag>
            <span class="target">{{item.progressTarget}}</span>
            <span class="time">
              <i class="el-icon-time"></i>{{item.startTime}}--{{item.endTime}}</span>
          </template>
          <div class="head">
            <el-button @click="createProgress" type="text" plain size="mini" icon="el-icon-edit-outline">编辑</el-button>
              <el-button @click="beforeRemove(item.name)" type="text" plain size="mini" icon="el-icon-error" style=" color:#F56C6C">删除</el-button>
            <el-button class="taskBtn" @click="result" type="success" size="mini">阶段性成果</el-button>
            <el-button class="taskBtn" @click="createTask" type="primary" size="mini">添加任务</el-button>
          </div>
          <el-table size="small" ref="multipleTable" :data="tableData3" tooltip-effect="dark" @selection-change="handleSelectionChange">
            <el-table-column type="selection" width="55">
            </el-table-column>
            <el-table-column label="任务" width="200">
              <template slot-scope="scope"><span :class="{'task':scope.row.completed}">{{scope.row.task}}</span></template>
            </el-table-column>
            <el-table-column prop="name" label="负责人" width="120">
            </el-table-column>
            <el-table-column prop="endTime" label="截止时间">
            </el-table-column>
            <el-table-column prop="state" label="状态" width="100" :filters="[{ text: '紧急', value: '紧急' }, { text: '普通', value: '普通' }]"
              :filter-method="filterState" filter-placement="bottom-end">
              <template slot-scope="scope">
                <el-tag :type="scope.row.state === '紧急' ? 'danger' : 'success'" close-transition>{{scope.row.state}}</el-tag>
              </template>
            </el-table-column>
            <el-table-column fixed="right" label="操作" width="100">
              <template slot-scope="scope">
                <el-button @click="taskDetail" type="text" size="small">查看</el-button>
                <el-button @click="beforeRemove(scope.row.task)" type="text" size="small" style=" color:#F56C6C">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-collapse-item>
      </el-collapse>
      <div class="footer">
        <el-button class="create-progress" @click="createProgress" type="text" plain size="mini" icon="el-icon-circle-plus-outline">创建阶段</el-button>
      </div>
    </div>
  </div>
</template>


<script>
  export default {
    data() {
      return {
        progressList: [{
            index: 1,
            name: '阶段一',
            startTime: '2018-01-01',
            endTime: '2018-03-01',
            progressTarget: '完成心理学论文一篇'
          },
          {
            index: 2,
            name: '阶段二',
            startTime: '2018-03-01',
            endTime: '2018-05-01',
            progressTarget: '完成深度学习论文一篇'
          },
          {
            index: 1,
            name: '阶段三',
            startTime: '2018-05-01',
            endTime: '2018-06-01',
            progressTarget: '完成社科论文一篇'
          }
        ],
        tableData3: [{
          index: 0,
          task: '完成论文1',
          name: '甲',
          endTime: '2018-03-28',
          state: '普通',
          completed:false
        }, {
          index: 1,
          task: '完成论文2',
          name: '乙',
          endTime: '2018-02-28',
          state: '紧急',
          completed:false
        }, {
          index: 2,
          task: '完成论文3',
          name: '丙',
          endTime: '2018-03-28',
          state: '普通',
          completed:false
        }, {
          index: 3,
          task: '完成论文4',
          name: '丁',
          endTime: '2018-02-28',
          state: '紧急',
          completed:false
        }],
        multipleSelection: [],
      }
    },
    methods: {
      handleSelectionChange(val) {
          this.multipleSelection = val
          this.tableData3.forEach(item => {
            item.completed = false
          });
          this.multipleSelection.forEach(item => {
            item.completed = true
          });
      },
      filterState(value, row) {
        return row.state === value;
      },
      createProgress() {
        this.$router.push({
          path: '/createprogress'
        })
      },
      createTask() {
        this.$router.push({
          path: '/createtask'
        })
      },
      taskDetail() {
        this.$router.push({
          path: '/taskdetail'
        })
      },
      result() {
        this.$router.push({
          path: '/result'
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
.progress
    .main
        .text
            font-size 8px
        .target
            font-size 10px
            color #909399 
        .time
            float right 
            font-size 10px            
            color #909399 
        .head
            margin 20px 20px 0 20px
            padding-bottom 20px
            border-bottom solid 1px #cccccc
            .taskBtn
                float right
        .el-table
          .task
            text-decoration line-through
      .footer 
        text-align center
</style>
