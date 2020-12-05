<template>
  <div class="login-content">
    <div class="login-box">

      <div class="avatar-box">
        <img src="@/assets/logo.png" alt="">
      </div>

      <el-form ref="loginFormRef" :model='form'  :rules="loginFormRules" class="login-form" label-width="0px">

        <el-form-item class='form-item' prop="username">
          <el-input v-model="form.username" class="item" placeholder="请输入内容" prefix-icon="iconfont icon-user"></el-input>
        </el-form-item>

        <el-form-item class='form-item' prop="password">
          <el-input v-model="form.password" class="item" placeholder="请输入内容" prefix-icon="iconfont icon-3702mima" show-password></el-input>
        </el-form-item>

        <el-form-item class='form-item bins'>
          <el-row class="btn-group">
            <el-button @click="login">登录</el-button>
          </el-row>
        </el-form-item>

      </el-form>

    </div>
  </div>
</template>

<script>
export default {
  name: 'Login.vue',
  data () {
    return {
      form: {
        username: '',
        password: ''
      },
      loginFormRules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 3, max: 6, message: '长度在 3 到 6 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, max: 13, message: '长度在 6 到 13 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    login () {
      // eslint-disable-next-line no-unused-expressions
      this.$refs.loginFormRef.validate(async valid => {
        if (!valid) return
        const { data: res } = await this.$axios.post('/login', this.form)
        if (res.data !== null) await this.$router.push('/layout')
      })
    }
  }
}
</script>

<style scoped lang="scss">
  .login-content {
    background: #2b4b6b;
    height:100%;

    .login-box {
      padding: 0 10px;
      width: 500px;
      height: 300px;
      background: aliceblue;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%,-50%);
      color: #fff;

      .avatar-box {
        width: 130px;
        height: 130px;
        border: 1px solid #eee;
        border-radius: 50%;
        padding: 10px;
        box-shadow: 0 0 10px #ddd;
        margin: 0 auto;
        transform: translateY(-50%);
        background: #fff;
        img {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background: #eee;
        }
      }
      .login-form {
        .bins {
          text-align: right;

        }
      }
    }
  }
</style>
