<template>
  <div class="dynamic">
    <el-select v-model="value" placeholder="筛选" size="small">
        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
        </el-option>
    </el-select>
    <div class="main">
        <el-collapse v-for="data in datelist">
        <el-collapse-item name="1">
        <template slot="title">{{data.date}}</template>
         <ul>
            <li v-for="item in data.list"><b></b><span class="time">{{item.time}}</span><span class="detail">{{item.name}}{{item.done}}
                <span :class="thingColor(item)">{{item.thing}}</span></span></li>
            <!--b标签不输入内容，span标签内输入时间不限制格式，p标签内输入介绍内容。注意，标签内不能使用div分割-->          
        </ul>
        </el-collapse-item>
     </el-collapse>
    </div>
    </div>
</template>

<script>
  export default {
       data() {
      return {
        options: [{
          value: '选项1',
          label: '全部'
        }, {
          value: '选项2',
          label: '任务'
        }, {
          value: '选项3',
          label: '讨论'
        }, {
          value: '选项4',
          label: '文件'
        }],
        value: '',
        datelist:[
            {
                date:'今天',
                list:[
                    {
                        name:'甲',
                        time:'21:00',
                        done:'完成了',
                        tag:'任务',
                        thing:'任务1'
                    },
                     {
                        name:'乙',
                        time:'20:00',
                        done:'发布了',
                        tag:'讨论',
                        thing:'讨论1'
                    },
                     {
                        name:'丙',
                        time:'19:20',
                        done:'上传了',
                        tag:'文件',
                        thing:'文件“ppt1.ppt”'
                    },
                     {
                        name:'甲',
                        time:'19:00',
                        done:'完成了',
                        tag:'任务',
                        thing:'任务3'
                    }
                ]
            },
                 {
                date:'昨天',
                list:[
                 {
                        name:'甲',
                        time:'21:00',
                        done:'完成了',
                        tag:'任务',
                        thing:'任务1'
                    },
                     {
                        name:'乙',
                        time:'20:00',
                        done:'发布了',
                        tag:'讨论',
                        thing:'讨论1'
                    },
                     {
                        name:'丙',
                        time:'19:20',
                        done:'上传了',
                        tag:'文件',
                        thing:'文件“ppt1.ppt”'
                    },
                     {
                        name:'甲',
                        time:'19:00',
                        done:'完成了',
                        tag:'任务',
                        thing:'任务3'
                    }
                ]
            },
                 {
                date:'2-23',
                list:[
                      {
                        name:'甲',
                        time:'21:00',
                        done:'完成了',
                        tag:'任务',
                        thing:'任务1'
                    },
                     {
                        name:'乙',
                        time:'20:00',
                        done:'发布了',
                        tag:'讨论',
                        thing:'讨论1'
                    },
                     {
                        name:'丙',
                        time:'19:20',
                        done:'上传了',
                        tag:'文件',
                        thing:'文件“ppt1.ppt”'
                    },
                     {
                        name:'甲',
                        time:'19:00',
                        done:'完成了',
                        tag:'任务',
                        thing:'任务3'
                    }
                ]
            }
        ]
      }
    },
    methods:{
        thingColor(item){
            return item.tag === '任务' ? 'task' : item.tag === '讨论' ? 'discuss' : 'file'
        }
    }
  }

</script>

<style lang="stylus" scoped>
.el-select
    margin 20px 25px
.main
    margin 10px
    .el-collapse
        display:block
        h1
            margin 0 0 10px 25px
            color #545c64
        ul
            margin-left:25px
            border-left:2px solid #ddd
            list-style-type:none
            li
                width:100%
                margin-left:-12px
                margin-bottom 20px
                line-height:20px
                font-weight:narmal
                b 
                    width:8px
                    height:8px
                    background:#fff
                    border:2px solid #555
                    margin:5px;border-radius:6px
                    -webkit-border-radius:6px
                    -moz-border-radius:6px
                    overflow:hidden
                    display:inline-block
                    float:left
                .time
                    padding-left:7px
                    line-height:20px
                .detail
                    margin-left 20px
                    font-size:12px
                    .task
                        color #F56C6C
                    .discuss
                        color #67C23A
                    .file
                        color #409EFF
</style>
