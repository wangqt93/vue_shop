<template>
  <div class="layout-content">
    <el-container class="layout-container">

      <el-header class="layout-header">
        <div class="header-left">
          <img src="@/assets/heima.png" alt="">
          <span>后台管理系统</span>
        </div>
        <el-button type="info" @click="logout">退出</el-button>
      </el-header>

      <el-aside class="layout-aside">
        <Aside></Aside>
      </el-aside>

      <el-container>
        <el-main>

        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Aside from '@/views/layout/Aside'
export default {
  name: 'index',
  components: {
    Aside
  },
  data () {
    return {
    }
  },
  methods: {
    logout () {
      window.sessionStorage.clear()
      this.$router.push('/login')
    }
  }
}
</script>

<style scoped lang="scss">
  .layout-container {
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    .layout-header {
      height: 20px;
      width: 100vw;
      background: #eee;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 10px;
      .header-left {
        width: 300px;
        display:flex;
        justify-content: space-around;
        align-items: center;
        font-size: 18px;
      }
    }
    .layout-aside {
      width: 20vw;
      height: 100vh;
      background-color: #2b4b6b;
    }
  }
</style>
