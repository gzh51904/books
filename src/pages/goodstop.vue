<template>
  <div class="goodstop">
    <header class="header header-positive">
      <div class="headerInner">
        <div class="returnBtn">
          <a href></a>
        </div>
        <nav class="detailNav">
          <ul>
            <li v-for="(tab,idx) in tabs" :key="idx" v-bind:class="{current:activeIdx === idx}">
              <a href="#" v-on:click="changeTab(idx,$event)">{{tab.title}}</a>
            </li>
          </ul>
        </nav>
        <div class="shareBtn" id="shareBtn"></div>
        <div class="shortCut" id="shortCut" @click="sh"></div>
        <div class="shortCutLayer" v-show="show">
          <div class="shortCutInner">
            <ul>
              <li class="homeLink">
                <a href="/">首页</a>
              </li>
              <li class="tstLink">
                <a href="http://t.bookschina.com/">淘书团</a>
              </li>
              <li class="searchLink">
                <a href="/books/kindlist">分类搜索</a>
              </li>
              <li class="carLink">
                <a href="/shopcar" class="cart">购物车</a>
              </li>
              <li class="accountLink">
                <a href="/usercenter/myhome" class="user">我的帐户</a>
              </li>
            </ul>
            <span class="uptriangle"></span>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>
<script>
import { constants } from 'crypto';
import { setTimeout } from 'timers';
export default {
  data() {
    return {
      show: false,
      tabs: [
        {
          title: "图书",
          
        },
        {
          title: "评论",
          
        },
        {
          title: "详情",
          
        }
      ],
      activeIdx: 0,

    };
  },
  methods: {
    sh() {
      this.show = !this.show;
    },
    changeTab(idx, e) {
      this.activeIdx = idx; 
      console.log(idx);
      let lishow = document.getElementsByClassName("listshow");
      console.log(lishow[idx]);
      let ih = lishow[idx].offsetTop;
      console.log(ih);
      setTimeout((ih)=>{ window.scrollTo(0,ih);},1000)
     
    },
	}

    
};
</script>
<style>
.header {
  position: fixed;
  width: 100%;
  height: 0.88rem;
  left: 0;
  top: 0;
  background: #fff;
  box-shadow: 0px 0px 10px #d4d2d3;
  z-index: 900;
}
.header .headerInner {
  position: relative;
  height: 0.88rem;
  padding: 0 1.45rem 0 0.4rem;
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
  background: url(http://m.bookschina.com/Content/images/returnbtnicon.png)
    no-repeat center;
  background-size: 0.2rem 0.35rem;
}
.header .headerInner .detailNav ul {
  overflow: hidden;
  padding: 0 0.4rem;
}
.header .headerInner .detailNav ul li {
  font-size: 0.22rem;
  float: left;
  width: 33.33%;
  height: 0.88rem;
  text-align: center;
  line-height: 0.88rem;
}
.header .headerInner .detailNav ul li.current a {
  color: #e60000;
  padding-bottom:0.25rem;
  border-bottom: 2px solid red;
}
.header .shareBtn {
  position: absolute;
  width: 0.85rem;
  height: 0.88rem;
  right: 0.75rem;
  top: 0;
  background: url(http://m.bookschina.com/Content/images/sharebtn.png) no-repeat
    center;
  background-size: 0.34rem 0.32rem;
  cursor: pointer;
}
.header .shortCut {
  position: absolute;
  width: 0.75rem;
  height: 0.88rem;
  right: 0;
  top: 0;
  background: url(http://m.bookschina.com/Content/images/shortcut.png) no-repeat
    center;
  background-size: 0.35rem 0.06rem;
  cursor: pointer;
}
.header .shortCutLayer {
  position: absolute;
  top: 0.68rem;
  right: 0.1rem;
}
.header .shortCutLayer .shortCutInner {
  position: relative;
  padding-top: 0.2rem;
}
.header .shortCutLayer ul {
  background: url(http://m.bookschina.com/Content/images/dot.png) repeat;
  border-radius: 0.1rem;
  padding: 0 0.1rem;
}
.header .shortCutLayer ul li.homeLink {
  background: url(http://m.bookschina.com/Content/images/homeShortCut.png)
    no-repeat 0.17rem;
  background-size: 0.34rem 0.34rem;
}
.header .shortCutLayer ul li.tstLink {
  background: url(http://m.bookschina.com/Content/images/tstShortCut.png)
    no-repeat 0.17rem;
  background-size: 0.34rem 0.34rem;
}
.header .shortCutLayer ul li.searchLink {
  background: url(http://m.bookschina.com/Content/images/searchshortCut.png)
    no-repeat 0.17rem;
  background-size: 0.34rem 0.34rem;
}
.header .shortCutLayer ul li.carLink {
  background: url(http://m.bookschina.com/Content/images/carshortCut.png)
    no-repeat 0.17rem;
  background-size: 0.34rem 0.34rem;
}
.header .shortCutLayer ul li.accountLink {
  background: url(http://m.bookschina.com/Content/images/accountShortCut.png)
    no-repeat 0.17rem;
  background-size: 0.32rem 0.32rem;
}
.header .shortCutLayer ul li a {
  color: #ffffff;
  font-size: 0.24rem;
  display: block;
  height: 0.7rem;
  line-height: 0.7rem;
  line-height: 0.7rem;
  padding-left: 0.77rem;
}
</style>


