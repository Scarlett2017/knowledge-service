<template>
  <div class="discuss">
    <div class="head">
      <span>创建讨论</span>
    </div>
    <div class="main">
      <el-form ref="form" :model="form" label-width="100px">
        <el-form-item label="主题" size="mini">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="摘要">
          <el-input type="textarea" v-model="form.desc"></el-input>
        </el-form-item>
        <el-form-item label="关键词">
          <el-tag :key="tag" v-for="tag in dynamicTags" closable :disable-transitions="false" @close="handleClose(tag)">
            {{tag}}
          </el-tag>
          <el-input class="input-new-tag" v-if="inputVisible" v-model="inputValue" ref="saveTagInput" size="small" @keyup.enter.native="handleInputConfirm"
            @blur="handleInputConfirm">
          </el-input>
          <el-button v-else class="button-new-tag" size="small" @click="showInput">+ 新关键词</el-button>
        </el-form-item>
        <el-form-item>
          <!-- <el-button type="primary" @click="submitForm('form')">立即创建</el-button> -->
          <el-button type="primary" @click="success">立即创建</el-button>
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
          desc: ''
        },
        dynamicTags: ['社科', '心理'],
        inputVisible: false,
        inputValue: ''
      }
    },
    methods: {
      handleClose(tag) {
        this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
      },

      showInput() {
        this.inputVisible = true;
        this.$nextTick(_ => {
          this.$refs.saveTagInput.$refs.input.focus();
        });
      },

      handleInputConfirm() {
        let inputValue = this.inputValue;
        if (inputValue) {
          this.dynamicTags.push(inputValue);
        }
        this.inputVisible = false;
        this.inputValue = '';
      },
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
.discuss
    .head
        margin 20px 20px 0 20px
        padding-bottom 20px
        border-bottom solid 1px #cccccc
    .main
        margin-top 20px
        width 70%
</style>
