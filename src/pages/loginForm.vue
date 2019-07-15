<template>
    <div>
         <div class="loginForm">
             <!-- 用户名 -->
            <div class="inputItem userNameWrap">
                <span class="label"></span>
                <div class="inputWrap">
                    <input type="text" class="inputblock userName" v-model="username" @input="usninput" id="userName" name="userName" autocomplete="off" placeholder="用户名/邮箱/已验证手机">
                    <span class="clearInput" ref="usnclear" style="display: none;" @click="clearUsn"></span>
                </div>
            </div>
            <!-- 密码 -->
            <div class="inputItem userPasWrap">
                <span class="label"></span>
                <div class="inputWrap">
                    <input :type="type" class="inputblock userPas" v-model="password" @input="pswinput" id="userPas" name="userPas" autocomplete="off" placeholder="请输入密码">
                    <span class="clearInput" ref="pswclear" style="display: none;" @click="clearPsw"></span>
                    <span class="IsShowPas" id="IsShowPas" v-if="show" @click="changeText"></span>
                    <span class="IsShowPas show" id="IsShowPas" v-else @click="changePsw"></span>
                </div>
            </div>
            <!-- 图形输入 -->
            <div class="inputItem imgcodeWrap ImgCode">
                <div class="inputWrap "  :style="{border:codeTip}">
                    <input type="text" class="inputblock" id="imgcode" v-model="code" @input="codeinput" autocomplete="off" placeholder="请输入图形验证码">
                    <span class="clearInput" ref="codeclear" style="display: none;" @click="clearCode"></span>
                </div>
                <div class="imgWrap" id="modifycodeImg" @click="refreshCode">                  
                    <s-identify :identifyCode="identifyCode"></s-identify>
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
        <!-- 错误提示 -->
        <div class="errorTip" :style="{display:tipShow}" @click="closeTip">
            <div>
                <p>
                    <span class="text">用户名或密码错误</span>
                </p>
            </div>
        </div>
    </div>
</template>
<script>
import SIdentify from "./identify"
export default {
    data(){
        return {
            username:"",
            password:"",
            code:"",
            show:"true",
            color:"#666a6b",
            type:"password",
            identifyCode:"",
            identifyCodes:"1234567890ABCDRFGHIJKLMNOPQRSTUVWSYZ",
            tipShow:"none",
            codeTip:"1px solid #e3e3e3"
        }
    },
    components:{
         // 图形验证
        SIdentify
    },
    methods:{
        // clear按钮的显示
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
            this.codeTip="1px solid #e3e3e3";
            if(this.code.length==0){
            this.$refs.codeclear.style="display: none;"; return
            }
             this.$refs.codeclear.style="display: inline;";
        },
        // 小眼睛功能
        changeText(){
            this.show=!this.show;
            this.type="text"
        },
        changePsw(){
            this.show=!this.show;
            this.type="password"
        },
        // 清除输入框
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
        // 去注册
        goReg(){
            this.$router.replace("/reg");
        },
        // 点击登录验证
        loginIn(){
            console.log();
            
            let phone = this.username;
            let password = this.password;
            let codego = this.code.toUpperCase() 
            let testcode = this.identifyCode.toUpperCase()           
            if(codego != testcode ){
                this.codeTip="1px solid #e60000";
            }else{
                this.$axios
            .get("/login", {
              params: {
                phone,
                password
              }
            }).then(({data,headers}) => {
              if (data.code == 250) {
                this.tipShow="block"
              } else if (data.code == 1000) {
                  console.log(data); 
                  localStorage.setItem("Authorization",data.data);
                  let targetPath = this.$route.query.redirectTo;
                this.$router.replace(targetPath?targetPath:"/home");
                }
                })
            }
            
        },
        // 关闭提示
        closeTip(){
            this.tipShow="none";
        },
        // 图形验证码的东西
        randomNum(min, max) {
            return Math.floor(Math.random() * (max - min) + min);
        },
        refreshCode() {
            console.log(111);
            
            this.identifyCode = "";
            this.makeCode(this.identifyCodes, 4);
        },
        makeCode(o, l) {
            for (let i = 0; i < l; i++) {
            this.identifyCode += this.identifyCodes[
            this.randomNum(0, this.identifyCodes.length)
            ];
            }
        }
    },
    updated(){
        if(this.username.length>0 && this.password.length>0  && this.code.length>0){
            this.$refs.red.style="background:#e60000"
        }else{
            this.$refs.red.style="background:#666a6b"
        }
    },
    mounted() {      
    this.identifyCode = "";
    this.makeCode(this.identifyCodes, 4);
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
.errorTip {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 98;
}
.errorTip div {
    display: table;
    color: white;
    font-size: 0.28rem;
    width: 100%;
    height: 100%;
}
.errorTip div p {
    display: table-cell;
    text-align: center;
    vertical-align: middle;
}
.errorTip div p span {
    display: inline-block;
    padding: 0.25rem .2rem;
    margin: 0 1rem;
    border-radius: 0.1rem;
    background-color: rgba(0,0,0,.8);
}
</style>


