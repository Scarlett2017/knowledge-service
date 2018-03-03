<template>
  <div class="taskDetail">
    <div class="head">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item>阶段一</el-breadcrumb-item>
        <el-breadcrumb-item>任务</el-breadcrumb-item>
      </el-breadcrumb>
      <span class="edit"><i class="el-icon-edit" type="small"></i><el-button type="text" size="small">编辑</el-button></span>
    </div>
    <div class="main">
      <div class="detail">
        <div class="detail-item">
          <div class="item-name">任务名称</div>
          <div class="item-data">{{taskTable.name}}</div>
          <el-tag :type="taskTable.state === '紧急' ? 'danger' : 'success'" close-transition>{{taskTable.state}}</el-tag>
        </div>
        <div class="detail-item">
          <div class="item-name">截止时间</div>
          <div class="item-data">{{taskTable.endDate}}
            <i class="el-icon-time"></i>{{taskTable.endTime}}</div>
        </div>
        <div class="detail-item">
          <div class="item-name">负责人</div>
          <div v-for="preformer in taskTable.performers" class="item-data">{{preformer}}、</div>
        </div>
        <div class="detail-item">
          <div class="item-name">任务描述</div>
          <div class="item-data detail-box">{{taskTable.detail}}</div>
        </div>
      </div>
      <div class="comment">
        <h1>评论</h1>
       <c-box v-for="item in commentData" :data="item"></c-box>
        <el-input type="textarea" :rows="2" placeholder="添加评论" v-model="textarea"></el-input>
         <el-button type="primary" size="mini">评论</el-button>
      </div>
    </div>
  </div>
</template>


<script>
import CBox from '../../base/comment-box/comment-box'

export default {
    data() {
      return {
        taskTable: {
          name:'完成论文1',
          endDate:'2018-03-28',
          endTime:'24:00',
          state:'普通',
          performers:['甲','乙','丙'],
          detail:'完成一篇深度学习的论文，可以参考文献1'
        },
        commentData:[
            {
                name:'甲',
                detail:'文献1在哪里',
                date:'2018-02-02',
                time:'19:09'
            },
            {
                name:'乙',
                detail:'可不可以推迟几天',
                date:'2018-02-02',
                time:'19:18'
            }
        ],
         textarea: ''
      }
    },
     components:{
        CBox
    }
}
</script>

<style lang="stylus" scoped>
.taskDetail
    .head
        margin 20px 20px 0 20px
        padding-bottom 20px
        border-bottom solid 1px #cccccc
        .el-breadcrumb
            display inline-block
        .edit
            float right
            color #409EFF 
     .main
        width 80%
        margin 20px auto
        .detail
            border-bottom 1px solid #cccccc
            .detail-item
                margin-bottom 20px
                .item-name
                    display inline-block
                    width 100px
                    margin-right 30px
                .item-data
                    display inline-block
                    text-align left
                .detail-box
                    width 350px
                    height 80px
                    padding 10px
                    border 1px solid #cccccc                
                .el-tag
                    margin-left 10px
        .comment
            margin-top 20px
            .box-card
                width 90%
                margin 10px auto
                .item-detail
                    margin-bottom 10px
                .item-name
                    font-size 12px
                    color #cccccc
                    .delete
                        color #F56C6C 
            .el-button
                margin-top 10px 
</style>