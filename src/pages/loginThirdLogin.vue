<template>
    <div class="thirdLogin">
        <div class="thirdTitle">
            <em>第三方账号登录</em>
        </div>
        <ul class="li3">
            <li class="qq">
                <a href="http://qq.bookschina.com/qq/qqlogin.aspx?url=http://m.bookschina.com/register/qqlogin?u=/UserCenter/MyHome">
                    <img src="../assets/imgs/login/newqq.png">
                    <b>QQ登录</b>
                </a>
            </li>
            <li class="sina">
                <a href="http://qq.bookschina.com/weibo/weibologin.aspx?url=http://m.bookschina.com/register/weibologin?u=/UserCenter/MyHome">
                    <img src="../assets/imgs/login/newweibo.png">
                    <b>微博登录</b>
                </a>
            </li>
            <li class="sina">
                <a href="http://qq.bookschina.com/BaiDu/BaiDuLogin.aspx?url=http://m.bookschina.com/register/BaiDuLogin?u=/UserCenter/MyHome">
                    <img src="../assets/imgs/login/baiduloginicon.png">
                    <b>百度登录</b>
                </a>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    
}
</script>
<style>
.thirdLogin {
    margin-top: 0.2rem;
}
.thirdLogin .thirdTitle {
    width: 80%;
    margin: auto;
    text-align: center;
    background: url(../assets/imgs/login/thirdlogintitleline.png) no-repeat center center;
    background-size: 100% 2px;
}
.thirdLogin .thirdTitle em {
    color: #999999;
    font-size: 0.26rem;
    height: 0.4rem;
    display: block;
    width: 40%;
    margin: auto;
    line-height: 0.4rem;
    background: #f6f4f5;
}
.thirdLogin ul {
    overflow: hidden;
    width: 80%;
    margin: 0.5rem auto 0;
}
.thirdLogin ul li {
    float: left;
    width: 33.333%;
    text-align: center;
}
.thirdLogin ul li a {
    display: block;
}
img {
    border: none;
    vertical-align: top;
    font-size: 12px;
}
.thirdLogin ul li img {
    width: 1rem;
    display: block;
    margin: auto;
}
b, em, i, strong {
    font-style: normal;
    font-weight: 400;
}
.thirdLogin ul li b {
    font-size: 0.24rem;
    color: #666;
    display: block;
    line-height: 0.4rem;
    margin-top: 0.08rem;
}
</style>

