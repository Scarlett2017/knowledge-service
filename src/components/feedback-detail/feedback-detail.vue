<template>
  <div class="feedback-detail">
    <div class="c_list">
      <div class="title">已完成双方匹配的项目</div>
      <el-table :data="cData" style="width: 100%">
        <el-table-column prop="date" label="日期">
        </el-table-column>
        <el-table-column prop="name" label="项目名称">
        </el-table-column>
        <el-table-column prop="members" label="成员">
          <template slot-scope="scope">
            <el-popover ref="popover4" placement="right" width="200" trigger="click">
              <el-table :data="scope.row.members" height="250">
                <el-table-column width="100" property="name" label="姓名"></el-table-column>
                <el-table-column width="100" property="state" label="状态">
                  <template slot-scope="scope">
                    <div class="wrapper" @click="toggleContract(scope.row.state)">
                      <el-tag size="small" :type="scope.row.state === '未签约' ? 'primary' : scope.row.state === '已签约' ? 'success' : 'info'">
                        {{scope.row.state}}
                      </el-tag>
                    </div>
                  </template>
                </el-table-column>
              </el-table>
            </el-popover>
            <el-button type="text" v-popover:popover4>查看</el-button>
          </template>
        </el-table-column>
      </el-table>
       </div>
      <div class="head">
        您的需求：{{demand.name}}
      </div>
      <div class="main">
        <p>已为你匹配到{{feedback.length}}位符合需求的专家，请查看简历筛选合适的人选</p>
        <el-row>
          <el-col v-for="item in feedback" class="card" :span="12">
            <box :data="item"></box>
          </el-col>
        </el-row>
        <div class="btn">
          <a @click="toggleMatch" style="color:#409EFF">没有匹配到合适人选？</a>
        </div>
        <div v-if="this.noMatch" class="btn">
          您可以：
          <el-button @click="improve" size="small" type="text" plain>完善需求描述，重新匹配</el-button>
          <span> 或</span>
          <el-button @click="service" size="small" type="text" plain>人工客服匹配需求</el-button>
        </div>
      </div>
  </div>
</template>

<script>
  import Box from '../../base/people-box/people-box'

  export default {
    data() {
      return {
        demand: {
          name: '关于深度学习的论文',
          date: '2018-02-02',
          match: false
        },
        feedback: [{
            name: '张三',
            company: '华南理工大学',
            profession: '华南理工大学计算机学院副教授',
            director: '深度学习',
            avatar: require('./timg (6).jpeg'),
            type: '发送邀请'
          },
          {
            name: '张三',
            company: '华南理工大学',
            profession: '华南理工大学计算机学院副教授',
            director: '深度学习',
            avatar: require('./timg (6).jpeg'),
            type: '发送邀请'
          },
          {
            name: '张三',
            company: '华南理工大学',
            profession: '华南理工大学计算机学院副教授',
            director: '深度学习',
            avatar: require('./timg (6).jpeg'),
            type: '发送邀请'
          }
        ],
        cData: [{
              date: '2018-01-01',
              name: '深度学习论文',
              members: [
              {
                name:'甲',
                state:'未签约'
              },
              {
                name:'乙',
                state:'未签约'
              },
              {
                name:'丙',
                state:'已签约'
              },
              {
                name:'丁',
                state:'已签约'
              },
              {
                name:'A',
                state:'已签约'
              },
              {
                name:'B',
                state:'已签约'
              }
            ]
          },
          {
              date: '2018-01-01',
              name: '深度学习论文',
              members: [
              {
                name:'甲',
                state:'未签约'
              },
              {
                name:'乙',
                state:'未签约'
              },
              {
                name:'丙',
                state:'已签约'
              },
              {
                name:'丁',
                state:'已签约'
              },
              {
                name:'A',
                state:'已签约'
              },
              {
                name:'B',
                state:'已签约'
              }
            ]
          },
          {
              date: '2018-01-01',
              name: '深度学习论文',
              members: [
              {
                name:'甲',
                state:'未签约'
              },
              {
                name:'乙',
                state:'未签约'
              },
              {
                name:'丙',
                state:'已签约'
              },
              {
                name:'丁',
                state:'已签约'
              },
              {
                name:'A',
                state:'已签约'
              },
              {
                name:'B',
                state:'已签约'
              }
            ]
          }
        ],
        noMatch: false
      }
    },
    methods: {
      toggleMatch() {
        this.noMatch = true
      },
      improve() {
        this.$router.push({
          path: '/demand'
        })
      },
      service() {
        this.$message({
          type: 'success',
          message: '已提交人工客服请求！请耐心等候'
        })
      },
      toggleContract(state) {
        if (state=== '未签约') {
          this.$router.push({
            path: '/message/contract'
          })
        }
      }
    },
    components: {
      Box
    }
  }

</script>



<style lang="stylus" scoped>
.feedback-detail
  .c_list
    margin 20px
  .head
      margin 20px 20px 0 20px
      padding-bottom 20px
      border-bottom solid 1px #cccccc
  .main
      margin 20px
      font-size 14px        
      .card
          display inline-block
      .btn
        text-align center
        cursor pointer
        font-size 14px
</style>
