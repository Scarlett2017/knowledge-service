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
        <el-form ref="form" label-width="100px" size="small">
          <el-form-item label="学校单位" prop="company" required>
            <el-input v-model="ruleForm1.name"></el-input>
          </el-form-item>
          <el-form-item label="职位" prop="profession" size="small" required>
            <el-input v-model="ruleForm1.company"></el-input>
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
          <el-form-item label="接受业务请求">
            <el-switch v-model="ruleForm1.work"></el-switch>
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
        ruleForm1: {
          company: '',
          profession: '',
          major: '',
          majorDisc: '',
          work: true
        },
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
        selectCity: ''
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
      }
    }
  }

</script>

<style lang="stylus" scoped>
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
        .el-button
            position absolute
            left 250px
</style>
