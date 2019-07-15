<template>
    <div class="shortcut">
        <ul>
            <li>
                <a href="/usercenter/sign">
                    <i><img src="../assets/imgs/mine/signin.png"></i>
                    <b>签到抽红包</b>
                </a>
            </li>
            <li>
                <a href="/usercenter/favorite">
                    <i><img src="../assets/imgs/mine/accountcollection.png"></i>
                    <b>我的收藏</b>
                </a>
            </li>
            <li>
                <a href="/usercenter/address">
                    <i><img src="../assets/imgs/mine/accountAddress.png"></i>
                    <b>收货地址</b>
                </a>
            </li>
            <li style="border-right:none">
                <a href="/Invite/MyInvite">
                    <i><img src="../assets/imgs/mine/yaoqingfanli.png"></i>
                    <b>邀请返利</b>
                </a>
            </li>
            <li>
                <a href="/usercenter/integra_stamps">
                    <i><img src="../assets/imgs/mine/integralVoucher.png"></i>
                    <b>积分换劵</b>
                </a>
            </li>
            <li>
                <a href="/Review/bookreview">
                    <i><img src="../assets/imgs/mine/evaluate.png"></i>
                    <b>我的评论</b>
                </a>
            </li>
            
            <li>
                <a href="/usercenter/modifypassword">
                    <i><img src="../assets/imgs/mine/modifyword.png"></i>
                    <b>修改密码</b>
                </a>
            </li>
            
            <li style="border-bottom:none;border-right:none;">
                <a href="/help/index">
                    <i><img src="../assets/imgs/mine/helpcenter.png"></i>
                    <b>帮助中心</b>
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
.shortcut {
    padding: 0 0.2rem;
    background: #fff;
    margin-top: 0.1rem;
}
.shortcut ul {
    overflow: hidden;
}
.shortcut ul li {
    float: left;
    width: 25%;
    box-sizing: border-box;
    border-bottom: 1px solid #f3f3f3;
    border-right: 1px solid #f3f3f3;
    text-align: center;
}
.shortcut ul li a {
    display: block;
    overflow: hidden;
    line-height: 0;
}
.shortcut ul li i {
    display: inline-block;
    height: 0.4rem;
    width: 0.4rem;
    margin-top: 0.5rem;
}

b, em, i, strong {
    font-style: normal;
    font-weight: 400;
}
.shortcut ul li b {
    display: block;
    color: #000334;
    font-size: 0.22rem;
    line-height: 0.32rem;
    margin-top: 0.25rem;
    padding-bottom: 0.25rem;
}
.shortcut ul li i {
    display: inline-block;
    height: 0.4rem;
    width: 0.4rem;
    margin-top: 0.5rem;
}
img {
    border: none;
    vertical-align: top;
    font-size: 12px;
}
.shortcut ul li i img {
    width: 100%;
    display: block;
}
</style>


