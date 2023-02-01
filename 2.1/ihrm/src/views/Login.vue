<template>
  <div class="log">
    <div class="login">
      <h1 class="ihrm">iHRM后台登录系统</h1>
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="" prop="password">
          <el-input v-model="ruleForm.password" show-password></el-input>
        </el-form-item>
        <el-form-item>
          <el-button class="but" type="primary" @click="submitForm('ruleForm')"
            >登录</el-button
          >
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { Login } from '@/untils/request'
import {setToken} from "@/untils/api"
export default {
  data() {
    return {
      ruleForm: {
        name: '',
        password: ''
      },
      rules: {
        name: [
          { required: true, message: '账号不能为空', trigger: 'blur' },
          { min: 3, max: 11, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '密码不能为空', trigger: 'blur' },
          { min: 3, max: 11, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          Login().then((res) => {
            console.log(res)
            if (res.data.status == 200) {
              // const {token,username}=res.data.data
              setToken(res.data.data.token)
              this.$notify({
                title: '登录成功',
                message: '欢迎[' + res.data.data.username + ']',
                type: 'success',
                duration: 2000
              })
              this.$router.replace('/home')
            }
          })
        } else {
          this.$notify({
            title: '登录成功',
            message: res.data.msg,
            type: 'error'
          })
          return false
        }
      })
    }
  },
  created() {},
  mounted() {},
  components: {},
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
.log {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background: url(../assets/背景图.jpg);
}
.login {
  width: 400px;
  height: 400px;
  margin: 100px auto;
}
.ihrm {
  width: 400px;
  height: 30px;
  font-weight: normal;
  color: #fff;
  font-size: 28px;
  margin: 30px 50px;
}
.but {
  width: 300px;
  height: 50px;
}
</style>
