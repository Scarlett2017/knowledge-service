<template>
  <div class="major-info">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item>账号管理</el-breadcrumb-item>
      <el-breadcrumb-item>专业信息</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="main">
      <div class="head">
        <h1>专业信息</h1>
      </div>
      <div class="form">
        <el-form ref="form" label-width="120px" size="small">
          <el-form-item label="学校单位" prop="company" required>
            <el-input v-model="ruleForm1.name"></el-input>
          </el-form-item>
          <el-form-item label="职位" prop="profession" size="small" required>
            <el-input v-model="ruleForm1.company"></el-input>
          </el-form-item>
          <el-form-item label="最高学历" required>
            <el-select size="small" style="width: 190px" v-model="ruleForm1.education" placeholder="请选择">
              <el-option label="博士后" value="boshihou"></el-option>
              <el-option label="博士" value="boshi"></el-option>
              <el-option label="硕士" value="shuoshi"></el-option>
              <el-option label="本科" value="benke"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="主攻方向" required>
            <el-select size="small" style="width: 190px" v-model="selectProv" placeholder="请选择领域" v-on:change="getProv($event)">
              <el-option v-for="item in provs" :label="item.label" :value="item.value">
              </el-option>
            </el-select>
            <el-select size="small" style="width: 190px" v-if="selectProv!=''" v-model="selectCity" placeholder="请选择专业">
              <el-option v-for="item in citys" :label="item.label" :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="身份信息核实" required>
            <el-upload class="avatar-uploader" action="https://jsonplaceholder.typicode.com/posts/" :show-file-list="false">
              <img v-if="imageUrl" :src="imageUrl" class="avatar">
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
            <p class="tip">请上传职位证明照片</p>
          </el-form-item>
          <el-form-item v-for="(paper, index) in ruleForm1.papers" :key="paper.key" :prop="'papers.' + index + '.value'" :label="'曾经发表的论文'+(index+1)">
            <el-input v-model="paper.title" placeholder="论文题目" style="width:400px"></el-input>
            <el-input v-model="paper.source" placeholder="发表期刊" style="width: 400px;margin-top:5px"></el-input>
            <el-button size="mini" @click.prevent="removePaper(paper)">删除</el-button>
          </el-form-item>
          <el-form-item>
            <el-button v-if="addIndex<3" @click="addPaper" size="small" type="primary" plain>添加学术成果证明</el-button>
          </el-form-item>
          <el-form-item label="专业经历">
            <el-input class="experience" type="textarea" v-model="ruleForm1.experience"></el-input>
          </el-form-item>
          <el-form-item label="附件简历">
            <el-upload class="attachment" action="https://jsonplaceholder.typicode.com/posts/" multiple :limit="3" :file-list="fileList">
              <el-button size="small" type="text" icon="el-icon-upload2">点击上传附件简历</el-button>
            </el-upload>
          </el-form-item>
          <el-form-item label="接受业务请求">
            <el-switch v-model="ruleForm1.work"></el-switch>
          </el-form-item>
        </el-form>
        <div class="test">
          <el-button size="small" type="primary">验证</el-button>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
  export default {
    data() {
      return {
        ruleForm1: {
          company: '',
          profession: '',
          major: '',
          majorDisc: '',
          work: true,
           papers: [{
            title: '',
            source:''
          }],
          education:'',
          experience:''
        },
         imageUrl: '',
        provs: [{
            label: "金融",
            value: "金融"
          },
          {
            label: "电子信息",
            value: "电子信息"
          },
          {
            label: "教育学",
            value: "教育学"
          }
        ],
        citys: [],
        selectProv: '',
        selectCity: '',
        addIndex:0,
        fileList: [{name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}]
      }
    },
    methods: {
      /*二级联动选择地区*/
      getProv(prov) {
        let tempCity = [];
        this.citys = [];
        this.selectCity = '';
        let allCity = [{
          prov: "金融",
          label: "投资学"
        }, {
          prov: "金融",
          label: "货币学"
        }, {
          prov: "电子信息",
          label: "通信"
        }, {
          prov: "电子信息",
          label: "硬件"
        }, {
          prov: "教育学",
          label: "学前教育"
        }, {
          prov: "教育学",
          label: "大学教育"
        }]
        for (var val of allCity) {
          if (prov == val.prov) {
            tempCity.push({
              label: val.label,
              value: val.label
            })
          }
        }
        this.citys = tempCity;
      },
       addPaper() {
        this.addIndex++
        if(this.addIndex<4){
          this.ruleForm1.papers.push({
          value: '',
          key: Date.now()
      });
        }
    },
     removePaper(item) {
        this.addIndex--;
        var index = this.ruleForm1.papers.indexOf(item)
        if (index !== -1) {
          this.ruleForm1.papers.splice(index, 1)
        }
      },
    }
  }

</script>

<style lang="stylus">
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
        .test
           text-align center
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
        .tip
          font-size 12px
          color #cccccc

</style>
