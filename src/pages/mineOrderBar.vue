<template>
    <div class="orderBar">
        <div class="orderTit">
            <a href="/usercenter/orderlist">
                <b>我的订单</b>
                <span>查看所有订单</span>
            </a>
        </div>
        <div class="orderCon">
            <ul>
                <li>
                    <a href="/usercenter/orderlist?tb=1">
                        <i>
                            <img src="../assets/imgs/mine/willpay.png">
                        </i>
                        <b>待付款</b>
                    </a>
                </li>
                <li>
                    <a href="/usercenter/orderlist?tb=2">
                        <i>
                            <img src="../assets/imgs/mine/will2.png">
                        </i>

                        <b>待收货</b>
                    </a>
                </li>
                <li>
                    <a href="/Review/BookReview?type=0">
                        <i><img src="../assets/imgs/mine/will3.png"></i>
                        <b>待评价</b>
                    </a>
                </li>
                <li>
                    <a href="/Return/ReturnList">
                        <i><img src="../assets/imgs/mine/will4.png"></i>
                        <b>退换货</b>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style>
.orderBar {
    padding: 0 0.2rem;
    background: #fff;
    margin-top: 0.1rem;
}
.orderBar .orderTit {
    border-bottom: 1px solid #f3f3f3;
}
.orderBar .orderTit a {
    display: block;
    height: 0.86rem;
    overflow: hidden;
    line-height: 0.86rem;
}
b, em, i, strong {
    font-style: normal;
    font-weight: 400;
}
.orderBar .orderTit b {
    float: left;
    color: #333333;
    font-size: 0.28rem;
}
.orderBar .orderTit span {
    float: right;
    color: #333;
    background: url(../assets/imgs/mine/accountrightbtn.png) no-repeat right center;
    background-size: 0.08rem 0.15rem;
    padding-right: 0.18rem;
    font-size: 0.22rem;
}
.orderCon {
    border-bottom: 1px solid #f3f3f3;
}
.orderCon ul {
    overflow: hidden;
}
.orderCon ul li {
    float: left;
    width: 25%;
    text-align: center;
    overflow: hidden;
    line-height: 0;
}
.orderCon ul li a {
    display: block;
}
.orderCon ul li i {
    display: inline-block;
    height: 0.4rem;
    width: 0.4rem;
    position: relative;
    margin-top: 0.3rem;
}
img {
    border: none;
    vertical-align: top;
    font-size: 12px;
}
.orderCon ul li i img {
    display: block;
    width: 100%;
}
.orderCon ul li b {
    font-size: 0.22rem;
    color: #333;
    display: block;
    line-height: 0.32rem;
    margin-top: 0.25rem;
    padding-bottom: 0.25rem;
}
</style>


