<template>
  <div>
    <el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" @select="handleSelect" background-color="#545c64"
      text-color="#fff" active-text-color="#ffd04b">
      <el-submenu index="1">
        <template slot="title">项目管理</template>
        <el-menu-item index="1-1">项目</el-menu-item>
        <el-menu-item index="1-2">消息</el-menu-item>
        <el-menu-item index="1-3">团队</el-menu-item>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">帐号管理</template>
        <el-menu-item index="2-1">基本信息</el-menu-item>
        <el-menu-item index="2-2">专业信息</el-menu-item>
      </el-submenu>
      <el-menu-item index="3">
        <a>发布需求</a>
      </el-menu-item>
    </el-menu>
<el-row>
  <el-col :span="4">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>导航一</span>
        </template>
        <el-menu-item-group>
          <template slot="title">分组一</template>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <template slot="title">选项4</template>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
      <el-menu-item index="3">
        <i class="el-icon-setting"></i>
        <span slot="title">导航三</span>
      </el-menu-item>
    </el-menu>
  </el-col>
  <el-col :span="20"></el-col>
</el-row>
</div>
</template>

<script>
  export default {
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
      andleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }

</script>
