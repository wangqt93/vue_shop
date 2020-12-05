<template>
  <div class="aside-content">
    <el-menu
      v-for="item in listItems"
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">

      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>首页</span>
        </template>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>

      </el-submenu>
  </div>
</template>

<script>
export default {
  name: 'Aside',
  data(){
    return {

    }
  }
}
</script>

<style scoped>

</style>
