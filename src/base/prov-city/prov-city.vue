<template>
  <div class="prov_city">
    <el-select size="small" style="width: 150px" v-model="selectProv" placeholder="请选择领域" v-on:change="getProv($event)">
      <el-option v-for="item in provs" :label="item.label" :value="item.value">
      </el-option>
    </el-select>
    <el-select size="small" style="width: 150px" v-if="selectProv!=''" v-model="selectCity" placeholder="请选择专业">
      <el-option v-for="item in citys" :label="item.label" :value="item.value">
      </el-option>
    </el-select>
  </div>
</template>

<script>
  export default {
    data() {
      return {
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
      }
    },
    methods:{
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
.prov_city
    display inline-block

</style>
