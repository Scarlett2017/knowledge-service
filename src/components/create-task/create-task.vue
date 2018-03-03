<template>
  <div class="task">
    <div class="head">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item>阶段一</el-breadcrumb-item>
        <el-breadcrumb-item>创建任务</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="main">
      <el-form ref="form" :model="form" label-width="100px">
        <el-form-item label="任务名称">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="截止时间">
          <el-col :span="11">
            <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
          </el-col>
          <el-col class="line" :span="2">-</el-col>
          <el-col :span="11">
            <el-time-picker type="fixed-time" placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
          </el-col>
        </el-form-item>
        <el-form-item label="任务紧急程度">
        <el-select v-model="form.region" placeholder="任务紧急程度">
            <el-option label="普通" value="普通"></el-option>
            <el-option label="紧急" value="紧急"></el-option>
        </el-select>
        </el-form-item>
        <el-form-item label="负责人">
          <el-checkbox-group v-model="form.type">
            <el-checkbox label="甲" name="type"></el-checkbox>
            <el-checkbox label="乙" name="type"></el-checkbox>
            <el-checkbox label="丙" name="type"></el-checkbox>
            <el-checkbox label="丁" name="type"></el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <el-form-item label="提醒负责人">
          <el-switch v-model="form.delivery"></el-switch>
        </el-form-item>
        <el-form-item label="任务描述">
          <el-input type="textarea" v-model="form.desc"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="success">立即创建</el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>


<script>
export default {
   data() {
      return {
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        }
      }
    },
    methods: {
      success() {
         this.$message({
          message: '创建成功！',
          type: 'success'
        });
      }
    }
}
</script>

<style lang="stylus" scoped>
.task
    .head
        margin 20px 20px 0 20px
        padding-bottom 20px
        border-bottom solid 1px #cccccc
    .main
        width 80%
        margin 20px auto
        .line
            text-align center  
</style>