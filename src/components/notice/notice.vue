<template>
  <div class="notice">
    <div class="head">
      <el-tabs>
        <el-tab-pane label="团队请求" name="first"></el-tab-pane>
        <el-tab-pane label="请求回复" name="second"></el-tab-pane>
        <el-tab-pane label="动态通知" name="third"></el-tab-pane>
        <el-tab-pane label="平台通知" name="fourth"></el-tab-pane>
      </el-tabs>
    </div>
    <el-collapse v-for="list in noticeList">
      <el-collapse-item name="1">
        <template slot="title">{{list.date}}</template>
        <ul>
          <li v-for="item in list.disc" class="text">
            <el-badge is-dot class="item">{{item.content}}</el-badge>
            <span class="time">{{item.time}}</span>
          </li>
        </ul>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
export default {
  data(){
      return{
          noticeList:[
            {
              date:'今天',
              disc:[
                  {
                  time:'19:00',
                  content:'团队1请求你加入团队'
                  },
                   {
                  time:'16:00',
                  content:'甲已同意你的团队加入邀请'
                  },
                   {
                  time:'10:00',
                  content:'丙已退出项目1'
                  }]
            },
             {
              date:'昨天',
              disc:[
                  {
                  time:'19:00',
                  content:'团队1请求你加入团队'
                  },
                   {
                  time:'16:00',
                  content:'甲已同意你的团队加入邀请'
                  },
                   {
                  time:'10:00',
                  content:'丙已退出项目1'
                  }]
            },
             {
              date:'02-20',
              disc:[
                  {
                  time:'19:00',
                  content:'团队1请求你加入团队'
                  },
                   {
                  time:'16:00',
                  content:'甲已同意你的团队加入邀请'
                  },
                   {
                  time:'10:00',
                  content:'丙已退出项目1'
                  }]
            }
          ]
      }
  }
}
</script>

<style lang="stylus" scoped>
.notice
    margin 20px
    .item 
        margin-top 10px
        margin-right 40px
    .time
        float right
        font-size 12px
        color #909399
</style>
