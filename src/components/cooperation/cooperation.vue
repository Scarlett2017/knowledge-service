<template>
  <div class="cooperation">
    <p>根据您的信息，为您推荐以下项目：</p>
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
</template>


<script>
export default {
  data(){
      return{
          program:[
              {
                  name:'深度学习论文',
                  pay:1000,
                  startDate:'2018-01-01',
                  endDate:'2018-03-10',
                  disc:'需要深度学习在心理学领域的应用论文',
                  company:'D&G公司'
              },
              {
                  name:'深度学习论文',
                  pay:1000,
                  startDate:'2018-01-01',
                  endDate:'2018-03-10',
                  disc:'需要深度学习在心理学领域的应用论文',
                  company:'D&G公司'
              },
              {
                  name:'深度学习论文',
                  pay:1000,
                  startDate:'2018-01-01',
                  endDate:'2018-03-10',
                  disc:'需要深度学习在心理学领域的应用论文',
                  company:'D&G公司'
              }
          ]
      }
  },
  methods:{
      success(){
        this.$message({
          type:'success',
          message:'已加入项目！请在项目管理中查看'
        })
      },
      ignore(){
        this.$message('已忽略')
      }
  }
}
</script>

<style lang="stylus" scoped>
.cooperation
    margin 10px
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
