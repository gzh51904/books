<template>
    <div class="assetsBar">
        <ul>
            <li>
                <a href="/usercenter/mycoupons">
                    <span>1张</span>
                    <b>优惠劵</b>
                </a>
            </li>
            <li>
                <a href="/usercenter/deposit">
                    <span>¥0</span>
                    <b>余额</b>
                </a>
            </li>
            <li>
                <a href="/usercenter/integral">
                    <span>0</span>
                    <b>积分</b>
                </a>
            </li>
            <li>
                <a href="/precard/bookcard">
                    <span>0张</span>
                    <b>书馨卡</b>
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
.assetsBar {
    padding: 0 0.2rem;
    background: #fff;
}
.assetsBar ul {
    overflow: hidden;
}
.assetsBar ul li {
    float: left;
    width: 25%;
    text-align: center;
}
.assetsBar ul li a {
    display: block;
    overflow: hidden;
    padding: 0.26rem 0;
}
.assetsBar ul li span {
    color: #e60000;
    font-size: 0.24rem;
    font-weight: bold;
    display: block;
    line-height: 0.34rem;
}
.assetsBar ul li b {
    color: #333333;
    font-size: 0.22rem;
    display: block;
    line-height: 0.32rem;
    margin-top: 0.17rem;
}
b, em, i, strong {
    font-style: normal;
    font-weight: 400;
}
</style>


