<template>
  <el-col :span="12" :offset="5" class="form-reg">
    <el-form
      :model="ruleForm"
      status-icon
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="用户名" prop="username">
        <el-input type="text" v-model="ruleForm.username" autocomplete="on"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="ruleForm.password"></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="checkPass">
        <el-input type="password" v-model="ruleForm.checkPass"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="success" @click="submitForm('ruleForm')">注册</el-button>
      </el-form-item>
    </el-form>
  </el-col>
</template>
<script>
export default {
  data() {
    let validateUsername = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入用户名"));
      } else {
        if (this.ruleForm.username !== "") {
          this.$axios
            .get("/reg/check", {
              params: {
                username: value
              }
            })
            .then(({ data }) => {
              if (data.code == 250) {
                callback(new Error("用户名已存在"));
              } else {
                callback();
              }
            });
        }
      }
    };
    let validatePassword = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.password !== "") {
        }
        callback();
      }
    };
    let checkPassword = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else {
        if (value == this.ruleForm.password) {
          callback();
        } else {
          callback(new Error("两次输入密码不一致"));
        }
      }
    };
    return {
      ruleForm: {
        username: "",
        password: "",
        checkPass: ""
      },
      rules: {
        username: [{ validator: validateUsername, trigger: "blur" }],
        password: [{ validator: validatePassword, trigger: "blur" }],
        checkPass: [{ validator: checkPassword, trigger: "blur" }]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          let { username, password } = this.ruleForm;
          this.$axios
            .post("/reg", {
              username,
              password
            })
            .then(({ data }) => {
              if (data.code == 1000) {
                this.$router.replace({ name: "Login" });
              }
            });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  }
};
</script>
<style>
  .form-reg{
    margin-top:200px;
  }
  .el-input__icon{
    color:green !important;
  }
</style>