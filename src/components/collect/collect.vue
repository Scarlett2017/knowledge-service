<template>
  <div class="collect">
    <el-collapse v-for="datelist in collectedList">
      <el-collapse-item name="1">
        <template slot="title">{{datelist.date}}</template>
        <div v-for="(item,index) in datelist.list" class="detail">
          <el-tooltip content="收藏" placement="top">
            <i class="star-icon" @click.stop="toggleCollected(item)" :class="collectIcon(item)"></i>
          </el-tooltip>
          <a href="#">{{item.name}}</a>
          <el-tooltip content="标记" placement="top">
            <i class="el-icon-edit" v-if="!item.edit" @click="editTip(item)"></i>
          </el-tooltip>
          <span class="text" v-if="!item.edit">{{item.tag}}</span>
          <el-form v-if="item.edit" ref="tag" :model="tag">
            <el-form-item size="mini">
              <el-input v-model="tag.name"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button @click="submit(item)" size="mini" type="primary">确定</el-button>
            </el-form-item>
          </el-form>
        </div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>


<script>
export default {
  data(){
      return{
          collectedList:[
              {
                  date:'今天',
                  list:[
                      {
                        name:'www.baidu.com',
                        tag:'必看',
                        collected:true,
                        edit:false
                      },
                      {
                        name:'www.gduiasdgiuewgfuiweui.com',
                        tag:'',
                        collected:true,
                         edit:false                       
                      },
                  ]
              },
              {
                  date:'昨天',
                  list:[
                      {
                        name:'www.374294892.com',
                        tag:'深度学习相关',
                        collected:true,
                         edit:false                        
                      }
                  ]
              },
                {
                  date:'2-23',
                  list:[
                      {
                        name:'www.28fhsdfi932.com',
                        tag:'',
                        collected:true,
                         edit:false                        
                      }
                  ]
              },
          ],
          tag:{
            name:''
          }
      }
  },
  methods:{
       toggleCollected(item){
          item.collected = !item.collected
      },
      collectIcon(item){
          return item.collected ? 'el-icon-star-on' : 'el-icon-star-off'    
      },
      editTip(item){
        item.edit = true
      },
      submit(item){
         item.edit = false
      }
  }
}
</script>

<style lang="stylus" scoped>
.collect
    margin 10px
    .el-collapse
        .star-icon
            color #E6A23C
            margin-right 5px
        .text,.el-icon-edit
            font-size 8px
            color #409EFF
        .el-form
          display inline-block
          .el-form-item
            display inline-block
</style>
