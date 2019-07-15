<template>
<div>
    <div class="content">
        <div class="bindTip">注册即送一张19减5券，全场通用（淘书团除外）</div>
        <div class="resistForm">
            <!-- 手机号码输入框 -->
            <div class="inputItem telphoneWrap">
                <span class="area-code">+86</span>
                <div class="inputWrap" :style="{border:telephoneTip}">
                    <input type="text" class="inputblock telephone" v-model="telephone" @input="tpinput" id="telephone" placeholder="请输入手机号">
                    <span class="clearInput" style="display: none;" ref="tpclear" @click="tpclear"></span>
                </div>
            </div>
            <!-- 验证码输入框 -->
            <div class="inputItem imgcodeWrap">
                <div class="inputWrap " id="imgcodeWrap" :style="{border:codeTip}">
                    <input type="text" class="inputblock" id="imgcode" v-model="code" @input="codeinput" placeholder="请输入图形验证码">
                    <span class="clearInput" style="display: none;" ref="codeclear" @click="codeclear"></span>
                </div>
                <!-- 图形验证码 -->
                <div class="imgWrap" id="modifycodeImg"  @click="refreshCode">
                    <s-identify :identifyCode="identifyCode"></s-identify>
                </div>
            </div>
            <!-- 下一步按钮 -->
            <div class="nextStep" ref="red" @click="goPhonecheck">
                <span>下一步</span>
            </div>
            <div class="registTip">
                <a href="#" class="login" @click="goLogin">立即登录</a><a class="getPassword" href="/forgot">找回密码</a>
            </div>
        </div>
    </div>
    <!-- 错误提示 -->
    <div class="errorTip" :style="{display:tipShow}" @click="closeTip">
        <div>
            <p>
                <span class="text">手机号格式不正确</span>
            </p>
        </div>
    </div>
</div>
</template>
<script>
import SIdentify from "./identify"
import vue from "vue"
vue.use(SIdentify);
// 手机号码正则
var reg= /^[1][358]\d{9}$/; 
// 引入vuex
import { mapMutations} from "vuex";
export default {
    data(){
        return {
            telephone:"",
            code:"",
            identifyCodes:"1234567890ABCDRFGHIJKLMNOPQRSTUVWSYZ",
            identifyCode:"",
            tipShow:"none",
            telephoneTip:"1px solid #e3e3e3",
            codeTip:"1px solid #e3e3e3"
           
        }
    },
    methods:{
        // 映射vuex设置手机号
        ...mapMutations(["changePhone"]),
        // 输入文字clear出现
        tpinput(){
            this.telephoneTip="1px solid #e3e3e3";
            if(this.telephone.length == 0){
                this.$refs.tpclear.style="display:none"; return
            }
            this.$refs.tpclear.style="display:inline"
        },
        codeinput(){
            this.codeTip="1px solid #e3e3e3";
            if(this.code.length == 0){
                this.$refs.codeclear.style="display:none"; return
            }
            this.$refs.codeclear.style="display:inline"
        },
        // clear功能
        tpclear(){
            this.telephone = "";
            this.$refs.tpclear.style="display: none;"
        },
        codeclear(){
            this.code = "";
            this.$refs.codeclear.style="display: none;"
        },
        // 去登录
        goLogin(){
            this.$router.replace("/login");
        },
        // 手机号码验证 跳下一步
        goPhonecheck(){
            let testcode = this.identifyCode.toUpperCase()           
            if(this.code != testcode ){
                this.codeTip="1px solid #e60000";
            }else{
                if(!reg.test(this.telephone)){
                this.tipShow="block",
                this.telephoneTip="1px solid #e60000";
            }else{
                this.changePhone(this.telephone);
                this.$router.push("/reg/phonecheck");
            }    
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
        },
    },
    components:{
        // 图形验证
        SIdentify
    },
    updated(){
        // 输入框都输入 按钮变红
        if(this.telephone.length > 0 && this.code.length > 0){
            this.$refs.red.style="background:#e60000"
        }else{
            this.$refs.red.style="background:#666a6b";
        }
    },
    mounted() {      
    this.identifyCode = "";
    this.makeCode(this.identifyCodes, 4);
    }
}
</script>
<style scoped>
.bindTip {
    padding: 0.12rem 0.2rem;
    background: #fff8de;
    line-height: 0.4rem;
    color: #e60000;
    font-size: 0.26rem;
}
.resistForm {
    padding: 0 0.2rem 0.2rem;
}
.resistForm .inputItem {
    margin-top: 0.3rem;
    overflow: hidden;
    position: relative;
    border-radius: 4px;
}
.resistForm .telphoneWrap .area-code {
    position: absolute;
    left: 0;
    top: 0;
    padding: 0;
    height: 100%;
    width: 0.9rem;
    background: #e3e3e3;
    color: #999999;
    font-size: 0.26rem;
    text-align: center;
    line-height: 0.9rem;
    z-index: 5;
    border-radius: 4px 0 0 4px;
}
.resistForm .inputWrap {
    cursor: pointer;
    /* border: 1px solid #e3e3e3; */
    border-radius: 4px;
    background: #fff;
    overflow: hidden;
    position: relative;

}

.resistForm .telphoneWrap .inputWrap {
    padding: 0 0.2rem 0 0.88rem;
}
.resistForm .inputWrap .inputblock {
    width: 100%;
    display: block;
    border: none;
    outline: none;
    background: #fff;
    color: #999999;
    font-size: 0.26rem;
    text-indent: 0.2rem;
    letter-spacing: 2px;
    height: 0.88rem;
    line-height: 0.88rem;
    vertical-align: middle;
    padding: 1px 0;
}
.resistForm .inputWrap .clearInput {
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
.resistForm .imgcodeWrap {
    padding: 0 2rem 0 0;
}
.resistForm .imgcodeWrap .imgWrap {
    position: absolute;
    top: 0;
    right: 0;
    width: 1.8rem;
    height: 100%;
}
.resistForm .nextStep {
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
.resistForm .registTip {
    font-size: 0.26rem;
    color: #666;
    margin-top: 0.24rem;
    line-height: 0.36rem;
    overflow: hidden;
}
.resistForm .registTip a {
    font-size: 0.26rem;
    color: #666;
}
.resistForm .registTip .login {
    float: left;
}
.resistForm .registTip .getPassword {
    float: right;
}
#imgcodeWrap{
    padding: 0 !important;
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
.s-canvas{
    width: 100% !important;
    height: 100% !important;
}
#s-canvas{
    width: 100% !important;
    height: 100% !important;
}
</style>

