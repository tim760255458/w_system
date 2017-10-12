<template>
  <div class="Login">
    <h1>午安网后台管理系统</h1>
    <div class="login-form">
        <el-form :model="ruleFrom" :rules="rules1" ref="ruleFrom" style="width: 300px;">
          <el-form-item prop="name">
            <el-input v-model="ruleFrom.name" placeholder="用户名" type="text" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item prop="pass">
            <el-input v-model="ruleFrom.pass" placeholder="密码" type="password" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="_login" style="width: 300px;">登录</el-button>
          </el-form-item>
        </el-form>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      var validateName = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入昵称'))
        }
      }
      var validatePass = (rule, value, callback) => {
        let reg = /^[a-zA-Z]\w{5,17}$/
        if (value === '') {
          callback(new Error('请输入密码'))
        } else {
          if (!reg.test(value)) {
            callback(new Error('字母开头，长度在6~18之间，只能字母、数字和下划线'))
          }
        }
      }
      return {
        ruleFrom: {
          name: '',
          pass: ''
        },
        rules1: {
          name: [
            { validator: validateName, trigger: 'blur' }
          ],
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ]
        }
      }
    },
    methods: {
      _login () {
        this.$message('这是一条消息提示')
        this.$router.push({
          path: '/index'
        })
      }
    }
  }
</script>

<style scoped>
  .Login{
    box-sizing: border-box;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  h1{
    color: #fff;
    font-size: 30px;
  }
  .login-form{
    display: flex;
    justify-content: center;
    background-color: #fff;
    width: 380px;
    height: 240px;
    box-sizing: border-box;
    padding: 40px;
    border-radius: 5px;
  }
</style>