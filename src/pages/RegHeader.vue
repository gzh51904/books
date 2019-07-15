<template>
    <header class="header">
    <div class="headerInner">
        <div class="returnBtn">
            <a href="javascript:goBack()"></a>
        </div>
            <div class="head_lable"><span>注册</span></div>
            <div class="shortCut" id="shortCut"  @click="changeInner"></div>
        <div class="shortCutLayer"  v-show="show">
            <div class="shortCutInner">
                <ul>
                    <li class="homeLink"><a href="/" @click="goHome">首页</a></li>
                    <li class="tstLink"><a href="http://t.bookschina.com/">淘书团</a></li>
                    <li class="kindLink"><a href="/books/kindlist">分类搜索</a></li>
                    <li class="carLink"><a href="#"  @click="goCart">购物车</a></li>
                    <li class="accountLink"><a href="/usercenter/myhome">我的账户</a></li>
                </ul>
                <span class="uptriangle"></span>
            </div>
        </div>
    </div>
</header>
</template>
<script scoped>
export default {
    data(){
        return{
            show:false
        }
    },
    methods:{
        changeInner(){
            this.show = !this.show
        },
        goHome(){
            this.$router.replace("/home");
        },
        goCart(){
            this.$router.replace("/cart");
        }
    }
};
</script>
<style>
.header {
  background: #fff;
  box-shadow: 0px 0px 0.1rem #d4d2d3 !important;
  position: relative !important;
  z-index: 901;
}
.header .headerInner {
    position: relative;
    height: 0.88rem;
    padding: 0 !important;
}
.header .headerInner .returnBtn {
  position: absolute;
  left: 0;
  top: 0;
}
.header .headerInner .returnBtn a {
  display: block;
  height: 0.88rem;
  width: 0.6rem;
  background: url(../assets/imgs/login/returnbtnicon.png) no-repeat center;
  background-size: 0.2rem 0.35rem;
}
.header .head_lable {
  text-align: center;
  height: 0.88rem;
  line-height: 0.88rem;
}
.header .head_lable span {
  font-size: 0.3rem;
  color: #333333;
}
.header .shortCut {
  position: absolute;
  width: 0.75rem;
  height: 0.88rem;
  right: 0;
  top: 0;
  background: url(../assets/imgs/login/shortcut.png) no-repeat center;
  background-size: 0.35rem 0.06rem;
  cursor: pointer;
}
.header .shortCutLayer {
  position: absolute;
  top: 0.68rem;
  right: 0.1rem;
  /* display: none; */
}
.header .shortCutLayer .shortCutInner {
  position: relative;
  padding-top: 0.2rem;
}
.header .shortCutLayer ul {
  background: url(../assets/imgs/login/dot.png) repeat;
  border-radius: 0.1rem;
  padding: 0 0.1rem;
}
.header .shortCutLayer ul li {
  border-bottom: 1px solid #999999;
  width: 2rem;
}
.header .shortCutLayer ul li.homeLink {
  background: url(../assets/imgs/login/homeShortCut.png) no-repeat 0.17rem;
  background-size: 0.34rem 0.34rem;
}
.header .shortCutLayer ul li.tstLink {
  background: url(../assets/imgs/login/tstShortCut.png) no-repeat 0.17rem;
  background-size: 0.34rem 0.34rem;
}
.header .shortCutLayer ul li.kindLink {
  background: url(../assets/imgs/login/kindshortCut.png) no-repeat 0.17rem;
  background-size: 0.34rem 0.28rem;
}
.header .shortCutLayer ul li.carLink {
  background: url(../assets/imgs/login/carshortCut.png) no-repeat 0.17rem;
  background-size: 0.34rem 0.34rem;
}
.header .shortCutLayer ul li.accountLink {
  background: url(../assets/imgs/login/accountShortCut.png) no-repeat 0.17rem;
  background-size: 0.32rem 0.32rem;
  border-bottom: none;
}
.header .shortCutLayer ul li a {
    color: #ffffff;
    font-size: 0.24rem;
    display: block;
    height: 0.7rem;
    line-height: 0.7rem;
    padding-left: 0.77rem;
}
.header .shortCutLayer .shortCutInner .uptriangle {
    position: absolute;
    background: url(../assets/imgs/login/Triangle.png) no-repeat center;
    background-size: 0.36rem 0.22rem;
    width: 0.36rem;
    height: 0.22rem;
    right: 0.1rem;
    top: 0;
}
</style>