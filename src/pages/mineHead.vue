<template>
    <div class="myHead">
        <div class="userInfor">
             <!-- 头像 -->
            <div class="headPortrait">
                <a href="/usercenter/personalcenter"><img src="../assets/imgs/mine/headpic.png"></a>
            </div>
            <!-- 内容 -->
            <div class="userName">ztw_13143vbx466<a href="/usercenter/personalcenter"></a></div>
            <div class="userLeave"><a href="#" class="startLeave">一星会员</a><a href="/usercenter/integral" class="integralNum">会员积分：<span>0</span></a></div>
        </div>
        <div class="signIn"><a href="/usercenter/sign"></a></div>
        <div class="setUp"><a href="#" @click="set"></a></div>
    </div>
</template>
<script>
export default {
    methods:{
        set(){
            this.$router.push("/usercenter");
        }
        
    }
}
</script>
<style scoped>
.myHead {
    background: #e60000;
    padding: 1.2rem 0.2rem 0.15rem;
    position: relative;
}
.myHead .userInfor {
    background: #fff;
    text-align: center;
    position: relative;
    border-top: 1px solid #fff;
}
.myHead .userInfor .headPortrait {
    position: absolute;
    height: 1.2rem;
    width: 1.2rem;
    left: 50%;
    top: -0.6rem;
    background: url(../assets/imgs/mine/headportraitbg.png) no-repeat center;
    background-size: cover;
    padding: 0.1rem;
    margin-left: -0.6rem;
}
.myHead .userInfor .headPortrait a {
    display: block;
}
.myHead .userInfor .headPortrait img {
    width: 100%;
    border-radius: 100%;
}
img {
    border: none;
    vertical-align: top;
    font-size: 12px;
}
.myHead .userInfor .userName {
    font-size: 0.24rem;
    font-weight: bold;
    line-height: 0.3rem;
    color: #333333;
    margin-top: 0.74rem;
}
.myHead .userInfor .userName a {
    display: inline-block;
    height: 0.3rem;
    width: 0.3rem;
    background: url(../assets/imgs/mine/inforedit.png) no-repeat center 0.05rem;
    background-size: 0.26rem 0.25rem;
    margin: 0 0 0 0.07rem;
}
.myHead .userLeave {
    font-size: 0.22rem;
    line-height: 0.32rem;
    padding: 0.2rem 0;
}
.myHead .userLeave .startLeave {
    color: #e60000;
}
.myHead .userLeave .integralNum {
    color: #666666;
    border-left: 2px solid #dddddd;
    padding-left: 0.06rem;
    margin-left: 0.42rem;
}
.myHead .userLeave .integralNum span {
    color: #e60000;
}
.myHead .setUp {
    position: absolute;
    width: 0.4rem;
    height: 0.4rem;
    background: url(../assets/imgs/mine/setUp.png) no-repeat center;
    background-size: 0.36rem 0.34rem;
    right: 0.18rem;
    top: 0.1rem;
}
.myHead .setUp a {
    display: block;
    height: 0.4rem;
}
</style>


