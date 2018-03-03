<template>
  <div class="progress">
    <div class="head">
      <span>阶段设置</span>
    </div>
    <div class="main">
      <el-form ref="form" :model="form" label-width="100px">
        <el-form-item label="阶段" size="mini">
          <el-select v-model="form.index" placeholder="阶段">
            <el-option label="一" value="1"></el-option>
            <el-option label="二" value="2"></el-option>
            <el-option label="三" value="3"></el-option>
            <el-option label="四" value="4"></el-option>
            <el-option label="五" value="5"></el-option>
            <el-option label="六" value="6"></el-option>
            <el-option label="七" value="7"></el-option>
            <el-option label="八" value="8"></el-option>
            <el-option label="九" value="9"></el-option>
            <el-option label="十" value="10"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="阶段目标" size="mini" style="width:85%">
          <el-input v-model="form.target"></el-input>
        </el-form-item>
        <el-form-item label="时间">
    <el-col :span="9">
      <el-form-item prop="startTime">
        <el-date-picker type="date" placeholder="开始时间" v-model="form.startTime" style="width: 100%;"></el-date-picker>
      </el-form-item>
    </el-col>
    <el-col class="line" :span="1" :offset="1">-</el-col>
    <el-col :span="9">
      <el-form-item prop="endTime">
        <el-date-picker type="date" placeholder="截止时间" v-model="form.endTime" style="width: 100%;"></el-date-picker>
      </el-form-item>
    </el-col>
  </el-form-item>
   <el-form-item>
    <!-- <el-button type="primary" @click="submitForm('form')">立即创建</el-button> -->
    <el-button @click="success" type="primary">立即创建</el-button>    
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
            index:'',
            target:''
        }
      }
    },
    methods:{
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
.progress
    .head
        margin 20px 20px 0 20px
        padding-bottom 20px
        border-bottom solid 1px #cccccc
    .main
        margin-top 20px
</style>
