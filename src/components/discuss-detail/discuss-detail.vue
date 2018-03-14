<template>
  <div class="discuss-detail">
    <div class="head">
      <span>{{discuss1.name}}</span>
      <div class="key">
        <el-tag size="mini">关键字</el-tag>
        <span v-for="item in discuss1.key">{{item}} </span>
      </div>
      <div class="topic">
        <el-tag size="mini">摘要</el-tag>{{discuss1.topic}}</div>
    </div>
    <el-container>
      <el-main>
        <c-box v-for="item in commentData" :data="item"></c-box>
        <div class="textInput">
          <el-input type="textarea" :rows="2" placeholder="请输入讨论内容" v-model="textarea"></el-input>
          <el-button type="primary" size="mini">发送</el-button>
        </div>
      </el-main>
      <el-aside width="40%">
        <el-card>
          <el-button @click="showLoading" type="primary" size="small">查看与讨论相关文献</el-button>
          <div class="search">
            <div class="loading" @click="showEssay">
              <i class="el-icon-loading" v-if="this.loading"></i>
            </div>
            <div class="essay" v-if="this.essayShowing">
              <div class="essay-item" v-for="item in essay">
                <el-tooltip content="收藏" placement="top">
                  <i class="star-icon" @click.stop="toggleCollected(item)" :class="collectIcon(item)"></i>
                </el-tooltip>
                <el-tooltip content="标记" placement="top">
                  <i class="el-icon-edit" @click="addTip"></i>
                </el-tooltip>
                <a href="#">{{item.name}}</a>
              </div>
            </div>
          </div>
          <div v-if="this.collectPassage.length" class="collect">
            <h1>收藏文章</h1>
            <div class="essay">
              <div class="essay-item" v-for="item in this.collectPassage">
                <el-tooltip content="收藏" placement="top">
                  <i class="star-icon" @click.stop="toggleCollected(item)" :class="collectIcon(item)"></i>
                </el-tooltip>
                <el-tooltip content="标记" placement="top">
                  <i class="el-icon-edit" @click="addTip"></i>
                </el-tooltip>
                <a href="#">{{item.name}}</a>
              </div>
            </div>
          </div>
        </el-card>
      </el-aside>
    </el-container>
  </div>
</template>



<script>
import CBox from '../../base/comment-box/comment-box'

export default {
  data(){
      return{
          discuss1:{
              name:'讨论1',
              key:['社科','心理'],
              updateTime:'2018-02-11',
              topic:'深度学习在社科心理学的前景',
              disc:[
                  {
                      name:'甲',
                      say:'文献1很好，你们觉得呢',
                      date:'2018-02-22',
                      time:'19:00'
                  },
                  {
                      name:'乙',
                      say:'okokokokok',
                      date:'2018-02-22',
                      time:'22:00'
                  }
              ]
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
            },
            {
                 name:'丙',
                detail:'深度学习在心理学的应用',
                date:'2018-02-02',
                time:'21:18'
            }
        ],
        essay:[
            {
                name:'关于心理学在深度学习的研究',
                address:'www.baidu.com',
                collected:false
            },
            {
                name:'关于深度学习的研究',
                address:'www.123.com',
                collected:false
            }
        ],
        loading:false,
        essayShowing:false,
        textarea: '',
        collectPassage:[]
      }
  },
  methods:{
      showLoading(){
          this.loading = true
          this.essayShowing = false
      },
      showEssay(){
          this.essayShowing = true
          this.loading = false
      },
      toggleCollected(item){
          let index
          for(let i = 0;i<this.collectPassage.length;i++){
            if(this.collectPassage[i] == item){
              index = i
              break
            }
          }
          item.collected = !item.collected
          if(item.collected){
              this.collectPassage.push(item)
          }else{
              this.collectPassage.splice(index,1)
          }
      },
      collectIcon(item){
          return item.collected ? 'el-icon-star-on' : 'el-icon-star-off'    
      },
      addTip(){
           this.$prompt('请输入标记', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '取消输入'
          });       
        });
      }
  },
  components:{
      CBox
  }
}
</script>

<style lang="stylus" scoped>
.discuss-detail
    .head
        margin 20px 20px 0 20px
        padding-bottom 20px
        border-bottom solid 1px #cccccc
        .key,.topic
            display inline-block
            margin-left 20px 
            font-size 14px
            color #606266
    .el-main
        .el-card
            font-size 14px
            .item-detail
                margin-bottom 10px
            .item-name
                font-size 12px
                color #cccccc
                .delete
                    color #F56C6C
        .textInput
            margin-top 10px
            .el-button
                margin-top 10px
    .el-aside
        min-height 600px
        padding 20px 20px 20px 0
        text-align center
        .el-card
            min-height 600px
            .loading
                margin 20px
            .essay
                text-align left
                .essay-item
                    margin 10px 0
                    .star-icon
                        color #E6A23C
                        margin-right 5px
                    .el-icon-edit
                        color #409EFF
                        margin-right 5px 
            .collect
                margin 10px 0
                padding 10px 0
                border-top solid 1px #cccccc
</style>
