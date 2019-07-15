<template>
    <div class="otherInfor">
        <ul>
            <li><a href="/usercenter/address"><b>收货地址</b><span></span></a></li>
            <li><a href="/usercenter/modifypassword"><b>登录密码</b><span></span></a></li>
            <li><a href="javascript:void(0)" onclick="btnPaypwd();"><b>支付密码</b><span></span></a></li>
            <li><a href="/usercenter/modifybindphone"><b>修改手机</b><span>13****274</span></a></li>
            <li><a href="/usercenter/OldBindEmail"><b>绑定邮箱</b><span></span></a></li>
        </ul>
    </div>
</template>
<script>
export default {
    
}
</script>
<style>
.otherInfor {
    margin-top: 0.09rem;
    background: #fff;
}
.otherInfor ul {
    padding: 0 0.2rem;
}
.otherInfor ul li {
    border-top: 1px solid #f3f3f3;
}
.otherInfor ul li a {
    display: block;
    overflow: hidden;
}
b, em, i, strong {
    font-style: normal;
    font-weight: 400;
}
.otherInfor ul li b {
    float: left;
    font-size: 0.22rem;
    color: #333333;
    height: 0.66rem;
    line-height: 0.66rem;
}
.otherInfor ul li span {
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


