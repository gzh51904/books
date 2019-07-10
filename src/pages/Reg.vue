<template>
  <div>
    reg
  </div>
</template>
<script>
export default {
  // data() {
  //   let validateUsername = (rule, value, callback) => {
  //     if (value === "") {
  //       callback(new Error("请输入用户名"));
  //     } else {
  //       if (this.ruleForm.username !== "") {
  //         this.$axios
  //           .get("/reg/check", {
  //             params: {
  //               username: value
  //             }
  //           })
  //           .then(({ data }) => {
  //             if (data.code == 250) {
  //               callback(new Error("用户名已存在"));
  //             } else {
  //               callback();
  //             }
  //           });
  //       }
  //     }
  //   };
  //   let validatePassword = (rule, value, callback) => {
  //     if (value === "") {
  //       callback(new Error("请输入密码"));
  //     } else {
  //       if (this.ruleForm.password !== "") {
  //       }
  //       callback();
  //     }
  //   };
  //   let checkPassword = (rule, value, callback) => {
  //     if (value === "") {
  //       callback(new Error("请再次输入密码"));
  //     } else {
  //       if (value == this.ruleForm.password) {
  //         callback();
  //       } else {
  //         callback(new Error("两次输入密码不一致"));
  //       }
  //     }
  //   };
  //   return {
  //     ruleForm: {
  //       username: "",
  //       password: "",
  //       checkPass: ""
  //     },
  //     rules: {
  //       username: [{ validator: validateUsername, trigger: "blur" }],
  //       password: [{ validator: validatePassword, trigger: "blur" }],
  //       checkPass: [{ validator: checkPassword, trigger: "blur" }]
  //     }
  //   };
  // },
  // methods: {
  //   submitForm(formName) {
  //     this.$refs[formName].validate(valid => {
  //       if (valid) {
  //         let { username, password } = this.ruleForm;
  //         this.$axios
  //           .post("/reg", {
  //             username,
  //             password
  //           })
  //           .then(({ data }) => {
  //             if (data.code == 1000) {
  //               this.$router.replace({ name: "Login" });
  //             }
  //           });
  //       } else {
  //         console.log("error submit!!");
  //         return false;
  //       }
  //     });
  //   }
  // }
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