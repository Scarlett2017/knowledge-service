<template>
  <div class="demand">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item>发布需求</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="main">
      <div class="form">
         <el-form ref="form" :model="form" label-width="80px" size="small">
        <el-form-item label="需求类型">
          <el-radio-group v-model="form.resource">
            <el-radio label="写作助手"></el-radio>
            <el-radio label="招募合作者"></el-radio>
            <el-radio label="征集团队"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="需求名称">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
            <el-form-item label="类型">
            <el-select size="small" style="width: 190px" v-model="selectProv" placeholder="请选择领域" v-on:change="getProv($event)">
              <el-option v-for="item in provs" :label="item.label" :value="item.value">
              </el-option>
            </el-select>
            <el-select size="small" style="width: 190px" v-if="selectProv!=''" v-model="selectCity" placeholder="请选择专业">
              <el-option v-for="item in citys" :label="item.label" :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
        <el-form-item label="项目时间">
          <el-col :span="11">
            <el-date-picker type="date" placeholder="选择开始日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
          </el-col>
          <el-col class="line" :span="2">-</el-col>
          <el-col :span="11">
            <el-date-picker type="date" placeholder="选择结束日期" v-model="form.date2" style="width: 100%;"></el-date-picker>
          </el-col>
        </el-form-item>
        <el-form-item label="需求描述">
          <el-input type="textarea" v-model="form.desc"></el-input>
          <el-upload class="upload-demo" action="https://jsonplaceholder.typicode.com/posts/"
            :before-remove="beforeRemove" multiple :limit="1" :on-exceed="handleExceed" :file-list="fileList">
            <el-button size="small" type="text"><i class="el-icon-upload2"></i>上传需求附件</el-button>
          </el-upload>
        </el-form-item>
         <el-form-item label="预期价格">
          <span>¥ </span><el-input v-model="form.price" class="price" style="width: 50%;"></el-input>
        </el-form-item>
      </el-form>
      <el-button type="primary" size="small" class="submit">提交</el-button>
      </div>
    </div>
  </div>
</template>


<script>
  export default {
    data() {
      return {
        form: {
          name: '',
          date1: '',
          date2: '',
          desc: '',
          price:''
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
        selectCity: '',
        fileList: [{name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}]
      }
    },
    methods:{
      handleExceed(files, fileList) {
        this.$message.warning(`当前限制选择 1 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
      },
      beforeRemove(file, fileList) {
        return this.$confirm(`确定移除 ${ file.name }？`);
      },
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
    position relative
    width 70%
    min-height 600px
    margin 20px auto
    padding 20px
    background-color #ffffff
    .form
      width 70%
      margin 0 auto
      .line
        text-align center
      .price
        display inline-block
      .submit
        position absolute
        left 250px
</style>
