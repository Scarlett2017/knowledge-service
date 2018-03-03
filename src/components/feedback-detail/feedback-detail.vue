<template>
  <div class="feedback-detail">
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
        feedback:[
            {
                name:'张三',
                company:'华南理工大学',
                profession:'华南理工大学计算机学院副教授',
                director:'深度学习',
                avatar: require('./timg (6).jpeg'),
                type:'加入项目'
            },
             {
                name:'张三',
                company:'华南理工大学',
                profession:'华南理工大学计算机学院副教授',
                 director:'深度学习',
                 avatar: require('./timg (6).jpeg'),
                type:'加入项目'                
            },
             {
                name:'张三',
                company:'华南理工大学',
                profession:'华南理工大学计算机学院副教授',
                 director:'深度学习',
                avatar: require('./timg (6).jpeg'),
                type:'加入项目'                
            }
        ],
         noMatch:false
      }
    },
    methods:{
      toggleMatch(){
       this.noMatch = true
      },
      improve(){
        this.$router.push({
          path:'/demand'
        })
      },
      service(){
        this.$message({
          type:'success',
          message:'已提交人工客服请求！请耐心等候'
        })
      }
    },
    components:{
        Box
    }
  }

</script>


<style lang="stylus" scoped>
.feedback-detail
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
