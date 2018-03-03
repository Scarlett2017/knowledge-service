<template>
  <div class="message">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item>账号管理</el-breadcrumb-item>
      <el-breadcrumb-item>基本信息</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="main">
      <div class="head">
        <h1>基本信息</h1>
      </div>
      <div class="form">
        <el-form ref="form" label-width="100px" size="small">
          <el-form-item label="头像">
            <el-upload class="avatar-uploader" action="https://jsonplaceholder.typicode.com/posts/" :show-file-list="false" :on-success="handleAvatarSuccess"
              :before-upload="beforeAvatarUpload">
              <img v-if="imageUrl" :src="imageUrl" class="avatar">
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </el-form-item>
          <el-form-item label="真实姓名" prop="name" required>
            <el-input v-model="ruleForm.name"></el-input>
          </el-form-item>
          <el-form-item label="单位" prop="company" size="small" required>
            <el-input v-model="ruleForm.company"></el-input>
          </el-form-item>
          <el-form-item label="联系电话" prop="phone" size="small" required>
            <el-input v-model="ruleForm.phone"></el-input>
          </el-form-item>
          <el-form-item label="联系邮箱" prop="email" size="small" required>
            <el-input v-model="ruleForm.email"></el-input>
          </el-form-item>
        </el-form>
        <el-button size="small" type="primary">保存</el-button>
      </div>
    </div>
  </div>
</template>


<script>
  export default {
    data() {
      return {
        ruleForm: {
          name: '',
          company: '',
          phone: '',
          email: ''
        },
        imageUrl: ''
      }
    },
     methods: {
      handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      }
    }
  }

</script>


<style lang="stylus" scoped>
.message
  .main
    width 70%
    min-height 600px
    margin 20px auto
    padding 20px
    background-color #ffffff
    .head
      padding 10px
      border-bottom solid 1px #cccccc
    .form
      position relative
      width 80%
      margin 10px auto
      .el-upload 
        border-radius: 6px
        cursor: pointer
        overflow: hidden
        .avatar-uploader-icon
          border: 1px dashed #d9d9d9
          font-size: 28px
          color: #8c939d
          width: 178px
          height: 178px
          line-height: 178px
          text-align: center
        .avatar 
          width: 178px
          height: 178px
          display: block
      .el-button
        position absolute
        left 250px
</style>
