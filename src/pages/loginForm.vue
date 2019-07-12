<template>
         <div class="loginForm">
            <div class="inputItem userNameWrap">
                <span class="label"></span>
                <div class="inputWrap">
                    <input type="text" class="inputblock userName" v-model="username" @input="usninput" id="userName" name="userName" autocomplete="off" placeholder="用户名/邮箱/已验证手机">
                    <span class="clearInput" ref="usnclear" style="display: none;" @click="clearUsn"></span>
                </div>
            </div>
            <div class="inputItem userPasWrap">
                <span class="label"></span>
                <div class="inputWrap">
                    <input :type="type" class="inputblock userPas" v-model="password" @input="pswinput" id="userPas" name="userPas" autocomplete="off" placeholder="请输入密码">
                    <span class="clearInput" ref="pswclear" style="display: none;" @click="clearPsw"></span>
                    <span class="IsShowPas" id="IsShowPas" v-if="show" @click="changeText"></span>
                    <span class="IsShowPas show" id="IsShowPas" v-else @click="changePsw"></span>
                </div>
            </div>

            <div class="inputItem imgcodeWrap ImgCode">
                <div class="inputWrap ">
                    <input type="text" class="inputblock" id="imgcode" v-model="code" @input="codeinput" autocomplete="off" placeholder="请输入图形验证码">
                    <span class="clearInput" ref="codeclear" style="display: none;" @click="clearCode"></span>
                </div>
                <div class="imgWrap" id="modifycodeImg">
                    
                    <loginFormIndentify></loginFormIndentify>
                </div>
            </div>
            <div class="nextStep" ref="red" @click="loginIn">
                <span>登录</span>
            </div>
            <div class="loginLink">
                <a href="/forgot" class="forgotPasLink">忘记密码</a>
                <a class="registLink" href="#" @click="goReg">新用户注册</a>
                
            </div>

        </div>
</template>
<script>
import loginFormIndentify from "./loginFormIndentify";
export default {
    data(){
        return {
            username:"",
            password:"",
            code:"",
            show:"true",
            color:"#666a6b",
            type:"password"
        }
    },
    components:{
        loginFormIndentify
    },
    methods:{
        usninput(){
            if(this.username.length==0){
            this.$refs.usnclear.style="display: none;"; return
            }
             this.$refs.usnclear.style="display: inline;";
        },
        pswinput(){
            if(this.password.length==0){
            this.$refs.pswclear.style="display: none;"; return
            }
             this.$refs.pswclear.style="display: inline;";
        },
        codeinput(){
            if(this.code.length==0){
            this.$refs.codeclear.style="display: none;"; return
            }
             this.$refs.codeclear.style="display: inline;";
        },
        changeText(){
            this.show=!this.show;
            this.type="text"
        },
        changePsw(){
            this.show=!this.show;
            this.type="password"
        },
        clearUsn(){
            this.username = "";
            this.$refs.usnclear.style="display: none;"
        },
        clearPsw(){
            this.password = "";
            this.$refs.pswclear.style="display: none;"
        },
        clearCode(){
            this.code = "";
            this.$refs.codeclear.style="display: none;"
        },
        goReg(){
            this.$router.replace("/reg");
        },
        loginIn(){
            let username = this.username;
            let password = this.password;
            this.$axios
            .get("/login", {
              params: {
                username,
                password
              }
            }).then(({data,headers}) => {
              if (data.code == 250) {
                alert("用户名或密码错误");
              } else if (data.code == 1000) {
                  console.log(data); 
                  localStorage.setItem("Authorization",data.data);
                  let targetPath = this.$route.query.redirectTo;
                this.$router.replace(targetPath?targetPath:"/home");
              }
            })
        }
    },
    updated(){
        if(this.username.length>0 && this.password.length>0  && this.code.length>0){
            this.$refs.red.style="background:#e60000"
        }else{
            this.$refs.red.style="background:#666a6b"
        }
    }
}
</script>
<style>
.loginForm {
    padding: 0 0.2rem 0.2rem;
}
.loginForm .inputItem {
    margin-top: 0.3rem;
    overflow: hidden;
    position: relative;
    border-radius: 4px;
}
.loginForm .inputItem .label {
    position: absolute;
    left: 0;
    top: 0;
    padding: 0;
    height: 100%;
    width: 0.9rem;
    color: #999999;
    font-size: 0.26rem;
    text-align: center;
    line-height: 0.9rem;
    z-index: 5;
}
.loginForm .userNameWrap .label {
    background: #e3e3e3 url(../assets/imgs/login/newuser.png) no-repeat center;
    background-size: 0.32rem 0.36rem;
}
.loginForm .inputWrap {
    cursor: pointer;
    border: 1px solid #e3e3e3;
    border-radius: 4px;
    background: #fff;
    overflow: hidden;
    position: relative;
}
.loginForm .userNameWrap .inputWrap {
    padding: 0 0.5rem 0 0.9rem;
}
.loginForm .inputWrap .inputblock {
    width: 100%;
    display: block;
    border: none;
    outline: none;
    background: #fff;
    color: #999999;
    font-size: 0.26rem;
    text-indent: 0.2rem;
    height: 0.88rem;
    line-height: 0.88rem;
    vertical-align: middle;
        padding: 1px 0px;
}
.loginForm .inputWrap .clearInput {
    display: none;
    z-index: 4;
    position: absolute;
    top: 50%;
    right: 0.24rem;
    margin-top: -0.18rem;
    height: 0.36rem;
    width: 0.36rem;
    cursor: pointer;
    background: url(../assets/imgs/login/inputclose.png) no-repeat;
    background-size: cover;
}
.loginForm .userPasWrap .label {
    background: #e3e3e3 url(../assets/imgs/login/nepass.png) no-repeat center;
    background-size: 0.30rem 0.36rem;
}
.loginForm .userPasWrap .inputWrap {
    padding: 0 1.16rem 0 0.9rem;
}
.loginForm .userPasWrap .inputWrap .clearInput {
    right: 1rem;
}
.loginForm .userPasWrap .inputWrap .IsShowPas {
    z-index: 4;
    position: absolute;
    top: 50%;
    right: 0.3rem;
    margin-top: -0.14rem;
    height: 0.28rem;
    width: 0.36rem;
    cursor: pointer;
    background: url(../assets/imgs/login/hidePassWord.png) no-repeat center;
    background-size: 0.36rem 0.28rem;
}
.loginForm .imgcodeWrap {
    padding: 0 2rem 0 0;
}
.loginForm .imgcodeWrap .imgWrap {
    position: absolute;
    top: 0;
    right: 0;
    width: 1.8rem;
    height: 100%;
}
.loginForm .nextStep {
    width: 100%;
    margin-top: 0.5rem;
    height: 1rem;
    border-radius: 4px;
    text-align: center;
    line-height: 1rem;
    background: #666a6b;
    color: #fff;
    font-size: 0.3rem;
    cursor: pointer;
}
.loginForm .loginLink {
    font-size: 0.26rem;
    color: #666;
    margin-top: 0.24rem;
    line-height: 0.36rem;
    overflow: hidden;
}
.loginForm .loginLink a {
    text-decoration: none;
    margin-left: 0.08rem;
}
.loginForm .loginLink .forgotPasLink {
    float: left;
}
.loginForm .loginLink .registLink {
    float: right;
}
.loginForm .userPasWrap .inputWrap .IsShowPas.show {
    background: url(../assets/imgs/login/showPassWord.png) no-repeat center;
    background-size: 0.36rem 0.28rem;
}
</style>


