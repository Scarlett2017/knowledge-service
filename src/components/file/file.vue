<template>
  <div class="file">
    <el-container>
      <el-aside width="200px">
        <el-tree :data="data" :props="defaultProps" accordion>
        </el-tree>
        <el-button type="text" size="small">
          <i class="el-icon-circle-plus-outline"></i>新建文件夹</el-button>
      </el-aside>
      <el-main>
        <div class="head">
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item>文件夹1</el-breadcrumb-item>
            <el-breadcrumb-item>文件夹1-1</el-breadcrumb-item>
            <el-breadcrumb-item>文件夹1-1－1</el-breadcrumb-item>            
          </el-breadcrumb>
           <span class="add"><i class="el-icon-circle-plus-outline" type="small"></i><el-button type="text" size="small">新建文件夹</el-button></span>
           <span class="delete"><i class="el-icon-circle-close" type="small"></i><el-button type="text" size="small">删除文件夹</el-button></span>           
        </div>
        <el-table :data="file" size="small">
          <el-table-column fixed prop="name" label="文件名">
          </el-table-column>
          <el-table-column prop="size" label="大小">
          </el-table-column>
          <el-table-column prop="person" label="创建者">
          </el-table-column>
          <el-table-column prop="date" label="更新时间">
          </el-table-column>
          <el-table-column fixed="right" label="操作">
            <template slot-scope="scope">
              <el-button type="text" size="mini">
                <i class="el-icon-download"></i>下载</el-button>
              <el-button class="delete" type="text" size="mini">
                <i class="el-icon-close"></i>移除</el-button>
            </template>
          </el-table-column>
        </el-table>
        <el-button size="small" type="primary" class="upload">
          <i class="el-icon-upload2"></i>上传文件</el-button>
      </el-main>
    </el-container>
  </div>
</template>




<script>
export default {
    data() {
      return {
        data: [{
          label: '文件夹1',
          children: [{
            label: '文件夹1-1',
            children: [{
              label: '文件夹1-1-1'
            }]
          }]
        }, {
          label: '文件夹2',
          children: [{
            label: '文件夹2-1',
            children: [{
              label: '文件夹2-1-1'
            }]
          }, {
            label: '文件夹2-2',
            children: [{
              label: '文件夹2-2-1'
            }]
          }]
        }, {
          label: '文件夹3',
          children: [{
            label: '文件夹3-1',
            children: [{
              label: '文件夹3-1-1'
            }]
          }, {
            label: '文件夹3-2',
            children: [{
              label: '文件夹3-2-1'
            }]
          }]
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
        },
        file:[
            {
                name:'项目1.pdf',
                size:'1.5M',
                person:'甲',
                date:'2018-02-04'
            },
            {
                name:'深度学习.pdf',
                size:'2.3M',
                person:'乙',
                date:'2018-02-24'
            }
        ]
      }
    },
    methods: {
    }
}
</script>

<style lang="stylus" scoped>
.file
    .el-aside
        text-align center 
        border-right solid 1px #cccccc
        min-height 600px
    .el-main
        text-align center
        .head
          position relative
          padding-bottom 20px
          border-bottom solid 1px #cccccc
          .el-breadcrumb
            display inline
          .add
            position absolute
            right 10px
            bottom 10px
            color #409EFF
          .delete
            position absolute
            right 100px
            bottom 10px            
            color #F56C6C
        .el-table
            text-align left
            margin-top 10px
            .delete
                color #F56C6C
        .upload
            margin-top 20px
</style>