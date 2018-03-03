<template>
  <div class="team">
    <el-container>
      <el-aside width="200px">
        <el-menu default-active="1">
          <el-menu-item index="1">
            <span slot="title">团队1</span>
          </el-menu-item>
          <el-menu-item index="2">
            <span slot="title">团队2</span>
          </el-menu-item>
          <el-menu-item index="3">
            <span slot="title">团队3</span>
          </el-menu-item>
        </el-menu>
        <el-button type="text" size="small">
          <i class="el-icon-circle-plus-outline"></i>新建团队</el-button>
      </el-aside>
      <el-container>
        <el-header height="40px">
          <span>团队1</span>
          <el-button type="primary" size="small">发送项目合作请求</el-button>
        </el-header>
        <el-main>
          <el-row>
            <el-col v-for="item in feedback" class="card" :span="12">
              <box :data="item"></box>
            </el-col>
            <el-col :span="12">
              <el-card>
                <i class="el-icon-plus avatar-uploader-icon"></i>
              </el-card>
            </el-col>
          </el-row>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>


<script>
import Box from '../../base/people-box/people-box'

  export default {
      data(){
          return{
                feedback:[
            {
                name:'张三',
                company:'华南理工大学',
                profession:'华南理工大学计算机学院副教授',
                director:'深度学习',
                avatar: require('./timg (6).jpeg'),
                type:'删除该成员'
            },
             {
                name:'张三',
                company:'华南理工大学',
                profession:'华南理工大学计算机学院副教授',
                 director:'深度学习',
                 avatar: require('./timg (6).jpeg'),
                type:'删除该成员'
            },
             {
                name:'张三',
                company:'华南理工大学',
                profession:'华南理工大学计算机学院副教授',
                 director:'深度学习',
                avatar: require('./timg (6).jpeg'),
                 type:'删除该成员' 
            }
        ]
          }
      },
      components:{
          Box
      }
  }

</script>

<style lang="stylus" scoped>
.team
    min-height 600px
    background-color #ffffff
    .el-aside
        text-align center 
        border-right solid 1px #cccccc
        min-height 600px
    .el-header
        position relative
        margin-top 20px
        padding-left 20px
        border-bottom solid 1px #cccccc
        .el-button
            position absolute
            right 20px
            top 0
    .el-main
        .el-card
            display inline-block
            position relative
            margin 10px
            width 300px
            min-height 180px
            .avatar-uploader-icon
                font-size: 28px
                color: #8c939d
                width: 260px
                height: 140px
                line-height: 140px
                text-align: center
</style>
