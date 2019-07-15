<template>
    <div>
        <div class="content">
            <input type="hidden" class="m" value="F4F11D4B17E7BDC53FB95A12C99862F2">
            <input type="hidden" class="t" value="839A525964E2845FF33B772DD32DD9BDC970E4DF3359281A">
            <div class="resistForm">
                <div class="sendTipwrap">
                    请输入13143387273收到的验证码：
                </div>
                <div class="inputItem phoneCode">
                    <div class="inputWrap">
                        <input type="text" class="inputblock" v-model="codepsw" @input="clearShow" placeholder="请输入手机验证码">
                        <span class="clearInput" :style="{display:show}" @click="clearCodoPsw"></span>
                        <div class="sendTime" id="getPhoneCode">获取验证码</div>
                    </div>
                </div>
                <div class="nextStep" data-href="SetPassword.aspx" @click="next" :style="{background:red}">
                    <span>下一步</span>
                </div>
                <div class="registTip setlinkTip">
                    遇到问题？请<a href="javascript:void(0)" id="kf8">联系客服</a>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            show:"none",
            codepsw:"",
            red:"#666a6b"
        }
    },
    methods:{
        clearShow(){
            if(this.codepsw.length == 0){
                this.show="none"; return
            }
            this.show="inline"
        },
        clearCodoPsw(){
            this.codepsw="";
            this.show="none";
        },
        next(){
            this.$router.push("/reg/setpsw");
        }
    },
    updated(){
        if(this.codepsw.length > 0){
            this.red="#e60000"
        }
    }
}
</script>
<style scoped>
.resistForm {
    padding: 0 0.2rem 0.2rem;
}
.resistForm .sendTipwrap {
    font-size: 0.26rem;
    color: #333;
    margin-top: 0.44rem;
    line-height: 0.32rem;
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
    background: #fff;
    overflow: hidden;
    position: relative;
}
.resistForm .phoneCode .inputWrap {
    padding-right: 2rem;
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
    right: 2.3rem;
    margin-top: -0.18rem;
    height: 0.36rem;
    width: 0.36rem;
    cursor: pointer;
    background: url(../assets/imgs/login/inputclose.png) no-repeat;
    background-size: cover;
}
.resistForm .sendTime {
    position: absolute;
    right: 0;
    top: 0;
    color: #e60000;
    font-size: 0.26rem;
    cursor: pointer;
    line-height: 0.9rem;
    height: 100%;
    background: url(../assets/imgs/reg/sendtimeline.jpg) no-repeat left center;
    background-size: 1px 0.5rem;
    min-width: 2.2rem;
    text-align: center;
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
.resistForm .registTip a {
    font-size: 0.26rem;
    color: #666;
}
.resistForm .setlinkTip a {
    text-decoration: underline;
    margin-left: 0.08rem;
}
</style>


