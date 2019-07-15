<template>
    <div class="personalInfor">
        <div class="portraitWrap">
            <div class="portrait">
                    <!-- <usercenterhead></usercenterhead> -->
                <img src="../assets/imgs/usercenter/portrait.png">
                </div>
            <div class="text">点击更换头像</div>
            <input type="file" id="file">
        </div>
        <ul>
            <li><a href="/usercenter/nickname"><b>昵称</b><span>ztw_13143vbx466</span></a></li>
            <li><a href="/usercenter/loginname"><b>登录名</b><span>ztw_13143vbx466</span></a></li>
            <li><a href="/usercenter/userinfo"><b>个人信息</b><span>完善信息</span></a></li>
        </ul>
    </div>
</template>
<script>
// import usercenterhead from "./UsercenterHead";
export default {
    // components:{usercenterhead}
}
</script>
<style>
.personalInfor {
    background: #fff;
}
.portraitWrap {
    text-align: center;
    overflow: hidden;
    cursor: pointer;
    position: relative;
}
.portraitWrap .portrait {
    cursor: pointer;
    width: 1.1rem;
    height: 1.1rem;
    margin: 0.2rem auto 0;
    background: url(../assets/imgs/usercenter/portrait.png) no-repeat;
    background-size: 1.1rem;
    border-radius: 100%;
    overflow: hidden;
}
img {
    border: none;
    vertical-align: top;
    font-size: 12px;
}
.portraitWrap .portrait img {
    width: 100%;
    height: 1.1rem;
}
.portraitWrap .text {
    color: #666666;
    font-size: 0.22rem;
    line-height: 0.32rem;
    margin-top: 0.15rem;
}
.portraitWrap #file {
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    opacity: 0;
    /* filter: alpha(opacity=0); */
}
.personalInfor ul {
    padding: 0.2rem 0.2rem 0;
}
.personalInfor ul li {
    border-top: 1px solid #f3f3f3;
}
.personalInfor ul li a {
    display: block;
    overflow: hidden;
}
b, em, i, strong {
    font-style: normal;
    font-weight: 400;
}
.personalInfor ul li b {
    float: left;
    font-size: 0.22rem;
    color: #333333;
    height: 0.66rem;
    line-height: 0.66rem;
}
.personalInfor ul li span {
    float: right;
    color: #666;
    font-size: 0.2rem;
    height: 0.66rem;
    line-height: 0.66rem;
    padding-right: 0.25rem;
    margin-right: 0.06rem;
    background: url(../assets/imgs/usercenter/personalRightarrow.png) no-repeat right center;
    background-size: 0.13rem 0.24rem;
}
</style>

