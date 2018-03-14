<template>
  <div class="cooperation">
    <div class="c_list">
      <div class="title">已完成双方匹配的项目</div>
      <el-table :data="cData" style="width: 100%">
        <el-table-column prop="date" label="日期" width="180">
        </el-table-column>
        <el-table-column prop="name" label="项目名称" width="180">
        </el-table-column>
        <el-table-column prop="company" label="单位" width="180">
          <template slot-scope="scope">
            <el-popover trigger="hover" placement="top">
              <p>联系邮箱: {{ scope.row.email }}</p>
              <p>联系电话: {{ scope.row.phone }}</p>
              <div slot="reference">
                {{ scope.row.company }}
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column prop="state" label="状态">
          <template slot-scope="scope">
              <div class="wrapper" @click="toggleContract(scope.row.state)">
                    <el-tag size="small" 
            :type="scope.row.state === '未签约' ? 'primary' : scope.row.state === '已签约' ? 'success' : 'info'">
              {{scope.row.state}}
            </el-tag>
              </div>
          </template>
        </el-table-column>
         <el-table-column label="操作">
          <template slot-scope="scope">
             <el-button @click="examineDetail" type="text">去审核</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="recommend">
      <div class="title">根据您的信息，为您推荐以下项目：</div>
      <div class="main">
        <el-card v-for="item in program">
          <div>
            <h1>{{item.name}}</h1>
            <span class="pay">¥{{item.pay}}</span>
          </div>
          <div class="left">
            <p class="text">需求： {{item.disc}}</p>
            <p class="text">开始时间： {{item.startDate}} -- 截止时间： {{item.endDate}}</p>
            <p class="text">发布单位： {{item.company}}</p>
          </div>
          <div class="right">
            <el-button @click="success" type="primary" size="mini">同意请求</el-button>
            <el-button @click="ignore" type="info" size="mini">忽略</el-button>
          </div>
        </el-card>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        program: [{
            name: '深度学习论文',
            pay: 1000,
            startDate: '2018-01-01',
            endDate: '2018-03-10',
            disc: '需要深度学习在心理学领域的应用论文',
            company: 'D&G公司'
          },
          {
            name: '深度学习论文',
            pay: 1000,
            startDate: '2018-01-01',
            endDate: '2018-03-10',
            disc: '需要深度学习在心理学领域的应用论文',
            company: 'D&G公司'
          },
          {
            name: '深度学习论文',
            pay: 1000,
            startDate: '2018-01-01',
            endDate: '2018-03-10',
            disc: '需要深度学习在心理学领域的应用论文',
            company: 'D&G公司'
          }
        ],
        cData: [{
            date: '2018-01-01',
            name: '深度学习论文',
            company: 'D&G公司',
            email: '12345678@163.com',
            phone: '12345678',
            state: '未签约'
          },
          {
            date: '2018-01-01',
            name: '深度学习论文',
            company: 'D&G公司',
            email: '12345678@163.com',
            phone: '12345678',
            state: '已签约'
          },
          {
            date: '2018-01-01',
            name: '深度学习论文',
            company: 'D&G公司',
            email: '12345678@163.com',
            phone: '12345678',
            state: '已完成'
          }
        ]
      }
    },
    methods: {
      success() {
        this.$message({
          type: 'success',
          message: '已同意加入对方项目！请等待需求方确定，若最终确定可在合作请求列表中查看到'
        })
      },
      ignore() {
        this.$message('已忽略')
      },
      toggleContract(state) {
        if (state=== '未签约') {
          this.$router.push({
            path: '/message/contract'
          })
        }
      },
      examineDetail(){
          this.$router.push({
            path: '/message/examinedetail'
          })
      }
    }
  }

</script>



<style lang="stylus" scoped>
.cooperation
    margin 10px
    .title
        margin 20px 20px 0 20px
        padding-bottom 20px
        border-bottom solid 1px #cccccc
    .main
        position relative
        margin 20px
        h1
            display inline-block
            color #409EFF
        .pay 
            position absolute
            right 10px
            color #F56C6C
        .el-card
            position relative
            .left
                display inline-block
                .text
                    margin 10px 0
                    font-size 12px
            .right
                display inline-block
                position absolute
                right 10px
                bottom 10px
</style>
