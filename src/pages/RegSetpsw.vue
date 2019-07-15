<template>
<div>
    <div class="content">
        <input type="hidden" class="m" value="B2589CF25E8081EF7DCFC9903F5D5A96">
        <input type="hidden" class="t" value="839A525964E2845F94569594E5DEC265CE5D83095BDAC754">
        <div class="resistForm">
            <div class="inputItem setpassword">
                <div class="inputWrap" :style="{border:pswTip}">
                    <span class="pasLabel"></span>
                    <input :type="type" class="inputblock" id="setpas" v-model="psw" autocomplete="off" @input="setpsw" placeholder="请设置6到16位登录密码">
                    <span class="clearInput" :style="{display:display}" @click="clearPsw"></span>
                    <span class="IsShowPas" id="IsShowPas" v-if="show" @click="changeText"></span>
                    <span class="IsShowPas show" id="IsShowPas" v-else @click="changePsw"></span>
                </div>
                <div class="pasTip">密码由6-16位字母、数字或半角符号组成</div>
            </div>
            <div class="nextStep" :style="{background:red}" @click="next">
                <span>完成</span>
            </div>
            <div class="registTip setlinkTip">
                遇到问题？请<a href="javascript:void(0)" id="kf8">联系客服</a>
            </div>
        </div>
    </div>
    <div class="errorTip" :style="{display:tipShow}" @click="closeTip">
        <div>
            <p>
                <span class="text">密码格式不正确</span>
            </p>
        </div>
    </div>
</div>
</template>
<script>
var patrn=/^[a-zA-Z0-9]{1}([a-zA-Z0-9]|[._]){5,15}$/;
import { mapState,mapMutations} from "vuex";
export default {
    data(){
        return {
            psw:'',
            show:'true',
            type:"password",
            display:"none",
            red:"#666a6b",
            tipShow:"none",
            pswTip:"1px solid #e3e3e3"
        }
    },
    computed:{
        ...mapState({
          phonenum(state) {
            return state.reg.phone;
          }
        }),
         ...mapState({
          pswnum(state) {
            return state.reg.password;
          }
        })
        // ...mapState(["password"]),
    },
    methods:{
        // 映射vuex设置密码
        ...mapMutations(["changePassword"]),
        setpsw(){
            this.pswTip="1px solid #e3e3e3"
        },
        // 小眼睛改变输入框状态
        changeText(){
            this.show=!this.show;
            this.type="text"
        },
        changePsw(){
            this.show=!this.show;
            this.type="password"
        },
        // clear输入框
        clearPsw(){
            this.psw="";
            this.display = "none"
        },
        // 验证密码 发送post请求 
        next(){
             if(!patrn.test(this.psw)){
                this.tipShow="block",
                this.pswTip="1px solid #e60000";
             }else{
                this.changePassword(this.psw);
                let phone = this.phonenum;
                let password = this.pswnum;
                console.log(this.phonenum,this.pswnum);
                this.$axios.post("/reg",{
                phone,
                password
             }).then(({data})=>{
                    if(data.code==1000){
                    this.$router.push("/reg/finish");
                    }
                })         
             } 
        },
        // 关闭提示
        closeTip(){
            this.tipShow="none"
        },
    },
    updated(){
        if(this.psw.length == 0){
            this.display = "none" ;
            this.red="#666a6b"; return
        }else{
            this.display = "inline";
            this.red="#e60000"
        }   
    }
}
</script>
<style scoped>
.resistForm {
    padding: 0 0.2rem 0.2rem;
}
.resistForm .inputItem {
    margin-top: 0.3rem;
    overflow: hidden;
    position: relative;
    border-radius: 4px;
}
.resistForm .inputWrap {
    cursor: pointer;
    border: 1px solid #e3e3e3;
    border-radius: 4px;
    /* width: 100%; */
    background: #fff;
    overflow: hidden;
    position: relative;
    padding: 0 1.16rem 0 0.9rem;
}
.resistForm .setpassword .pasLabel {
    position: absolute;
    left: 0;
    top: 0;
    padding: 0;
    height: 100%;
    width: 0.9rem;
    background: #e3e3e3 url(../assets/imgs/reg/passwordIcon.png) no-repeat center;
    background-size: 0.3rem 0.36rem;
    color: #999999;
    font-size: 0.26rem;
    text-align: center;
    line-height: 0.9rem;
    z-index: 5;
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
    padding: 1px 0px;
}
.resistForm .inputWrap .clearInput {
    display: none;
    z-index: 4;
    position: absolute;
    top: 50%;
    right: 0.8rem;
    margin-top: -0.18rem;
    height: 0.36rem;
    width: 0.36rem;
    cursor: pointer;
    background: url(../assets/imgs/login/inputclose.png) no-repeat;
    background-size: cover;
}
.resistForm .setpassword .inputWrap .IsShowPas {
    z-index: 4;
    position: absolute;
    top: 50%;
    right: 0.24rem;
    margin-top: -0.14rem;
    height: 0.28rem;
    width: 0.36rem;
    cursor: pointer;
    background: url(../assets/imgs/login/hidePassWord.png) no-repeat;
    background-size: cover;
}
.resistForm .setpassword .pasTip {
    font-size: 0.26rem;
    color: #666;
    margin-top: 0.08rem;
    line-height: 0.32rem;
}
.resistForm .nextStep {
    width: 100%;
    margin-top: 0.5rem;
    height: 1rem;
    border-radius: 4px;
    text-align: center;
    line-height: 1rem;

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
.resistForm .setlinkTip a {
    text-decoration: underline;
    margin-left: 0.08rem;
}
.resistForm .registTip a {
    font-size: 0.26rem;
    color: #666;
}
.show {
    background: url(../assets/imgs/login/showPassWord.png) no-repeat center !important;
    background-size: 0.36rem 0.28rem  !important;
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



