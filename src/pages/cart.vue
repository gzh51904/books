<template>
  <div class="car">
   <header class="header">
    <div class="headerInner">
        <div class="returnBtn"><a href="javascript:history.back(-1);"></a></div>
        <div class="head_lable"><span>购物车</span></div>
        <div class="editBtn" id="editBtn" @click="fsh">编辑</div>
        <div class="shortCut" id="shortCut" @click="sh"></div>
        <div class="shortCutLayer" v-show="show">
            <div class="shortCutInner"  >
                <ul>
                    <li class="homeLink"><a href="/">首页</a></li>
                    <li class="tstLink"><a href="http://t.bookschina.com/">淘书团</a></li>
                    <li class="searchLink"><a href="/books/kindlist">搜索分类</a></li>
                    <li class="carLink"><a href="/shopcar">购物车</a></li>
                    <li class="accountLink"><a href="/usercenter/myhome">我的账户</a></li>
                </ul>
                <span class="uptriangle"></span>
            </div>
        </div>
    </div>
</header>
<div class="carNav">
    <ul>
        <!-- <li class="shopCar" v-for="nav in navs" @click="changeNav(nav.name)">
                    <a class="nav-link" href="#" :class="{active:nav.name.toLowerCase() == active}">{{nav.title}}</a>
        </li> -->

<!-- 
        <li class="cur shopCar"><a>购物车</a></li> -->
        <!-- <li class="tstCar" style="float:right;width:40%;"><a>淘书团购物车</a></li> -->
    </ul>
</div>
<div class="content" style="display: block;">
    <div class="shopCarContent" style="margin-bottom:0.4rem;">
        <div class="carLsit">
          <div class="active">
            <div class="activeList">
              <ul>
                <li v-for="(ele ,idx) in goodslist" :key="idx">
                  <div class="listCheckBox J_check" :class="{listCheckBox:!isChecked,selected:isChecked}" @click="Checked(ele.id)"></div>
                  <div class="book"><div class="bookInner">
                    <div class="bookCover">
                      <a>
                        <img :src="ele.img">
                      </a>
                    </div>
                    <div class="bookText">
                      <div class="bookName">
                        <a>{{ele.title}}</a>
                      </div>
                      <div class="priceWrap">
                        <span class="salesPrice">¥{{ele.zhekou}}</span>
                        <span class="price">¥{{ele.price}}</span>
                      </div>
                      <div class="oparateArea">
                        <div class="countEdit">
                          <span class="decrement" @click="cut(ele.id)">-</span>
                          <template>
                          <input ref="num" autocomplete="off" type="text"  @change="changnum(ele.id,$event,ele.numbers)"
                           @blur="blurnum(ele.id,$event,ele.numbers)"
                          class="num J_input inputNum"  v-model="ele.numbers" max="3457" shopcount="1">
                          </template>
                          <span class="increment" @click="add(ele.id)">+</span>
                        </div>
                        <div class="otherEdit">
                          <!-- <i class="addFav J_collect" sid="86639835" bid="6882596" id="fav6882596" onclick="addFavorite(6882596,this)">收藏</i>  -->
                          <i class="delete J_delate" @click="remove(ele.id)">删除</i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
</div>
<!-- <div class="noProductWrap" style="display: none;">
    <div class="noProductIcon">
        <img src="/Content/images/noproduct.png">
        <span>您的购物车暂无商品</span>
        <a href="">随便逛逛</a>
    </div>
</div> -->
<div class="footer" style="height:1.4rem;" >
    <div class="myf"><p>再买<span>
        <!-- ￥{{yunfei.toFixed(2)}} -->
        </span>即可免运费 <a href="/Books/NewTeHui">去凑单 &gt;</a></p></div>
    <div class="checkgroup">
        <div class="allSelect J_selectALL "  :class="{allselects:!isChecked,selectAll:isChecked}" @click="selectAll(isChecked)">全选</div>
        <div class="totalWrap" v-if="fshow">
            <div class="listCheckBox J_check" :class="{listCheckBox:!isChecked,selected:isChecked}" @click="Checked"></div>
            <div class="settlement" id="J_submitBtn" :class={settlement:!isChecked,cur:isChecked}>去结算</div>
            <div class="carResult"><div class="totalMoney">总计：<i id="J_SumZongJia">¥{{total.toFixed(2)}}</i></div>
            <div class="totalDiscount">已优惠：<i id="J_SumYouhui">¥0</i></div></div>
        </div>
        <div class="editWrap" v-else >
            <div class="clearnoStock" id="J_deleteStock">清除缺货</div>
            <div class="deleteSelcted">移入收藏夹</div>
            <div class="colectSelcted" id="J_deleteALL">删除</div>
        </div>
    </div>
</div>
    <!--为你推荐-->
    <div class="recommendWrap" style="display: none;">
        <div class="recomandTit">
            <img src="/Content/images/personRecommend.jpg">
        </div>
        <div class="recomandCon">
            <ul>
                    <li>
                        <a href="/5888838.htm">
                            <div class="cover">
                                <img src="http://image12.bookschina.com/2013/20131114/s5888838.jpg" alt="哈佛谈判课" class="lazyImg">
                            </div>
                            <div class="name">
                                哈佛谈判课
                            </div>
                            <div class="priceWrap">
                                <span>¥23.2</span>
                                <del>¥28.0</del>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="/6980829.htm">
                            <div class="cover">
                                <img src="http://image12.bookschina.com/2015/20150411/s6980829.jpg" alt="世界史导论" class="lazyImg">
                            </div>
                            <div class="name">
                                世界史导论
                            </div>
                            <div class="priceWrap">
                                <span>¥17.1</span>
                                <del>¥38.0</del>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="/7142519.htm">
                            <div class="cover">
                                <img src="http://image12.bookschina.com/2016/20160601/s7142519.jpg" alt="小说卷-王小波作品集" class="lazyImg">
                            </div>
                            <div class="name">
                                小说卷-王小波作品集
                            </div>
                            <div class="priceWrap">
                                <span>¥25.5</span>
                                <del>¥39.8</del>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="/6923594.htm">
                            <div class="cover">
                                <img src="http://image12.bookschina.com/2015/20150409/s6923594.jpg" alt="羊脂球-莫泊桑短篇小说精选" class="lazyImg">
                            </div>
                            <div class="name">
                                羊脂球-莫泊桑短篇小说精选
                            </div>
                            <div class="priceWrap">
                                <span>¥9.3</span>
                                <del>¥12.8</del>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="/1930590.htm">
                            <div class="cover">
                                <img src="http://image31.bookschina.com/2018/zuo/11/s1930590.jpg" alt="妞妞:一个父亲的札记" class="lazyImg">
                            </div>
                            <div class="name">
                                妞妞:一个父亲的札记
                            </div>
                            <div class="priceWrap">
                                <span>¥10.6</span>
                                <del>¥28.0</del>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="/6633357.htm">
                            <div class="cover">
                                <img src="http://image31.bookschina.com/2018/zuo/8/s6633357.jpg" alt="天鹅之死:汪曾祺精选集" class="lazyImg">
                            </div>
                            <div class="name">
                                天鹅之死:汪曾祺精选集
                            </div>
                            <div class="priceWrap">
                                <span>¥16.2</span>
                                <del>¥36.0</del>
                            </div>
                        </a>
                    </li>
            </ul>
        </div>
    </div>
  </div>
</template>
<script>

export default {
    computed:{
          goodslist(){
              return this.$store.state.cart.goodslist.map((item,idx)=>{
                  return{
                      idx:idx+1,
                      ...item
                  }
              });
          },
     total(){
        return this.$store.state.cart.goodslist.reduce((pre,item)=>{
            return pre + item.zhekou*item.numbers
        },0)
    },

    // yunfei(){
    //    let fei = 69;
    // //    let shengyu = fei - this.total;
    //    console.log(this.total);
    // //    if(shengyu<=0){
    // //       return shengyu ="已免运费"
    // //    };
    // //    return shengyu;
    // }
    },
  data() {
    return {
    //   numbers:1,
      show:false,
    //   allselect:flase,/* 购物车全选中状态，默认为没有全选中 */
      fshow:true,
      isChecked:true
    };
  },
  methods:{
    cut(id,numbers){ 
    this.$store.commit('cut',id);
    },
    add(id){
      this.$store.commit('addnum',id);
      },
    sh(){
        this.show = !this.show;
        console.log(111);
    },
    fsh(){
        this.fshow = !this.fshow;
    },
    Checked(){
        console.log(this)
        this.isChecked = !this.isChecked;
    },
    changnum($event,id,numbers){
       this.$store.commit('changnum',{id,numbers});
    },
    remove(id){
      this.$store.commit('remove', id)
      console.log(id);
    },
    blurnum($event,id,numbers){
     this.$store.commit('blurnum',{id,numbers});
    },
    selectAll(isChecked){
         this.isChecked = !this.isChecked;
    },

    creaded(){
        // let components = {}
        // this.navs.forEach(nav=>{
        //     components[nav.name.toLowerCase()]={
        //         template:`<div>${nav.title} - ${nav.name}</div>`
        //     }
        // });
        //  this.$options.components = components;
    },
    // active:'home'
  }
};
</script>
<style>
/* .el-row{
    margin-bottom:10px;
}
.el-col{
    text-align:center;
}
.el-input-number--mini{
    width:90px;
} */
.header {
    background: #fff;
    box-shadow: 0px 0px 10px #d4d2d3;
    position: fixed;
    width: 100%;
    left: 0;
    top: 0;
    z-index: 900;
}
.header .headerInner {
    position: relative;
    height: 0.88rem;
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
    background: url(http://m.bookschina.com/Content/images/returnbtnicon.png) no-repeat center;
    background-size: 0.2rem 0.35rem;
}
.header .head_lable {
    text-align: center;
    height: 0.88rem;
    line-height: 0.88rem;
}
.header .head_lable span {
    display: block;
    font-size: 0.3rem;
    color: #333333;
}
.header .editBtn {
    position: absolute;
    width: 0.85rem;
    height: 0.88rem;
    line-height: 0.88rem;
    text-align: center;
    right: 0.75rem;
    top: 0;
    cursor: pointer;
    font-size: 0.22rem;
    color: #333;
}
.header .shortCut {
    position: absolute;
    width: 0.75rem;
    height: 0.88rem;
    right: 0;
    top: 0;
    background: url(http://m.bookschina.com/Content/images/shortcut.png) no-repeat center;
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
    background: url(http://m.bookschina.com/Content/images/homeShortCut.png) no-repeat 0.17rem;
    background-size: 0.34rem 0.34rem;
}
.header .shortCutLayer ul li {
    border-bottom: 1px solid #999999;
    width: 2rem;
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
.header .shortCutLayer ul li.tstLink {
    background: url(/Content/images/tstShortCut.png) no-repeat 0.17rem;
    background-size: 0.34rem 0.34rem;
}
.header .shortCutLayer ul li {
    border-bottom: 1px solid #999999;
    width: 2rem;
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
.header .shortCutLayer ul li.searchLink {
    background: url(http://m.bookschina.com/Content/images/searchshortCut.png) no-repeat 0.17rem;
    background-size: 0.34rem 0.34rem;
}
.header .shortCutLayer ul li {
    border-bottom: 1px solid #999999;
    width: 2rem;
}
.header .shortCutLayer ul li.carLink {
    background: url(/Content/images/carshortCut.png) no-repeat 0.17rem;
    background-size: 0.34rem 0.34rem;
}
.header .shortCutLayer ul li.accountLink {
    background: url(/Content/images/accountShortCut.png) no-repeat 0.17rem;
    background-size: 0.32rem 0.32rem;
}
.header .head_lable span[data-v-741505a4] {
    display: block;
    font-size: 0.3rem;
    color: #333333;
}
.header .head_lable[data-v-741505a4] {
    text-align: center;
    height: 0.88rem;
    line-height: 0.88rem;
}
.header .shortCutLayer .shortCutInner .uptriangle {
    position: absolute;
    background: url(/Content/images/Triangle.png) no-repeat center;
    background-size: 0.36rem 0.22rem;
    width: 0.36rem;
    height: 0.22rem;
    right: 0.1rem;
    top: 0;
}
.carNav{
width:100%;
margin-top:0.88rem;
}
.carNav ul {
    overflow: hidden;
    background: #fff;
}
.carNav ul li.shopCar.cur {
    border-right: 0.02rem solid #f3f3f3;
}
.carNav ul li.cur {
    border-top: 0.03rem solid #c40000;
}
.carNav ul li {
    float: left;
    width:100%;
    border-top: 0.03rem solid #fff;
    text-align: center;
}
.carNav ul li.cur a {
    color: #e60000;
}
.carNav ul li a {
    
    display: block;
    font-size: 0.3rem;
    color: #333333;
    font-family: 'Microsoft YaHei';
    height: 0.84rem;
    line-height: 0.84rem;
}
.carLsit {
    margin-top: 0.1rem;
}
.active {
    margin-top: 0.2rem;
}
.activeList {
    background: #fff;
    padding-bottom: 0.2rem;
}
.activeList ul li {
    padding: 0 0.2rem;
    position: relative;
}
.activeList ul li .listCheckBox {
    cursor: pointer;
    position: absolute;
    width: 0.8rem;
    height: 100%;
    font-size: 0px;
    text-indent: -999px;
    overflow: hidden;
    background: url(http://m.bookschina.com/Content/images/checkboxicon.png) no-repeat 0.2rem 0.77rem;
    left: 0;
    top: 0;
    background-size: 0.32rem;
    cursor: pointer;
    z-index: 100;
}
.activeList ul li .listCheckBox.selected {
    background: url(http://m.bookschina.com/Content/images/carselected.png) no-repeat 0.2rem 0.77rem;
    background-size: 0.32rem;
}
.activeList ul li .book {
    border-bottom: 1px solid #f2f2f2;
    padding: 0.25rem 0 0.3rem 0.4rem;
    font-size: 12px;
    position: relative;
}
.activeList ul li .book .bookInner {
    position: relative;
    padding-left: 1.607rem;
    min-height: 1.25rem;
}
.activeList ul li .book .bookCover {
    /* outline: 1px solid #ddd; */
    position: absolute;
    height: 1rem;
    width: 1rem;
    left: 0.05rem;
    top: -1rem;
    line-height: 1rem;
    text-align: center;
    /* border: 1px solid #ddd; */
}
.activeList ul li .book .bookCover a {
    display: block;
    
}
.activeList ul li .book .bookCover img {
    height: 1.25rem;
    max-width: 1.25rem;
}
img {
    border: none;
    vertical-align: top;
    font-size: 12px;
}
.activeList ul li .bookText .priceWrap {
    overflow: hidden;
    font-size: 0.22rem;
    line-height: 0.32rem;
    margin-top: 0.12rem;
    font-family: 'Microsoft YaHei';
}
.activeList ul li .bookText .salesPrice {
    float: left;
    color: #e60000;
}
.activeList ul li .bookText .price {
    float: left;
    color: #999999;
    margin-left: 0.26rem;
    text-decoration: line-through;
}
.activeList ul li .bookText .oparateArea {
    overflow: hidden;
    margin-top: 0.16rem;
}
.activeList ul li .bookText .countEdit {
    float: left;
    overflow: hidden;
    border: 0.02rem solid #f3f3f3;
}
.activeList ul li .bookText .countEdit span.decrement {
    background: url(http://m.bookschina.com/Content/images/carreduce.png) no-repeat center;
    background-size: 0.22rem 0.03rem;
    border-right: 1px solid #f3f3f3;
}
.activeList ul li .bookText .countEdit span {
    float: left;
    width: 0.44rem;
    height: 0.4rem;
    text-indent: -999px;
    overflow: hidden;
    cursor: pointer;
}
.activeList ul li .bookText .countEdit input {
    float: left;
    height: 0.38rem;
    border: none;
    width: 0.56rem;
    margin: 0 0.1rem;
    text-align: center;
    line-height: 0.38rem;
    color: #333;
    font-size: 0.22rem;
}
.activeList ul li .bookText .countEdit span.increment {
    background: url(http://m.bookschina.com/Content/images/carplus.png) no-repeat center;
    background-size: 0.22rem;
    border-left: 1px solid #f3f3f3;
}
.activeList ul li .bookText .countEdit span {
    float: left;
    width: 0.44rem;
    height: 0.4rem;
    text-indent: -999px;
    overflow: hidden;
    cursor: pointer;
}
.activeList ul li .otherEdit {
    float: right;
    overflow: hidden;
}
.activeList ul li .otherEdit .addFav {
    float: left;
    height: 0.4rem;
    width: 0.4rem;
    background: url(http://m.bookschina.com/Content/images/carslec.png) no-repeat center;
    background-size: 0.3rem 0.29rem;
    text-indent: -999px;
    overflow: hidden;
    margin-right: 0.28rem;
    cursor: pointer;
}
.activeList ul li .otherEdit .delete {
    float: left;
    height: 0.4rem;
    width: 0.4rem;
    background: url(http://m.bookschina.com/Content/images/cardelet.png) no-repeat center;
    background-size: 0.34rem;
    text-indent: -999px;
    overflow: hidden;
    cursor: pointer;
}
.noProductIcon {
    text-align: center;
    background: #fff;
    overflow: hidden;
    margin-top: 0.1rem;
}
.noProductIcon img {
    display: block;
    width: 0.75rem;
    margin: 0.75rem auto 0;
}
.noProductIcon span {
    color: #333333;
    font-size: 0.22rem;
    display: block;
    line-height: 0.32rem;
    margin-top: 0.15rem;
}
.noProductIcon a {
    display: block;
    margin: auto;
    width: 4rem;
    margin: 0.45rem auto 0.55rem;
    background: #e60000;
    text-align: center;
    color: #ffffff;
    font-size: 0.26rem;
    height: 0.66rem;
    line-height: 0.66rem;
    border-radius: 0.66rem;
}

.footer {
    position: fixed;
    width: 100%;
    height: 1.4rem;
    bottom: 0;
    left: 0;
    background: #fff;
    font-size: 12px;
    z-index: 101;
    box-shadow: 0 0 0.1rem #e3e2e2;
}
.myf {
    font-size: 0.22rem;
    line-height: 0.4rem;
    text-indent: 0.2rem;
    background: #FFF8DC;
}
.myf span {
    color: #FF3030;
}
.myf a {
    color: #FF3030;
    padding-left: 0.22rem;
}
.checkgroup {
    overflow: hidden;
    position: relative;
}
.footer .allSelect {
    cursor: pointer;
    float: left;
    width: 1.18rem;
    text-align: right;
    height: 1rem;
    line-height: 1rem;
    color: #333333;
    font-size: 0.24rem;
    background: url(http://m.bookschina.com/Content/images/checkboxicon.png) no-repeat 0.2rem center;
    background-size: 0.32rem;
}
.footer .allSelect.selectAll {
    background: url(http://m.bookschina.com/Content/images/carselected.png) no-repeat 0.2rem center;
    background-size: 0.32rem;
}
.footer .totalWrap {
    position: absolute;
    right: 0;
    top: 0;
    overflow: hidden;
}
.footer .settlement {
    float: right;
    width: 2.2rem;
    height: 1rem;
    line-height: 1rem;
    text-align: center;
    background: #B0B0B0;
    font-size: 0.3rem;
    color: #fff;
    font-family: 'Microsoft YaHei';
    cursor: pointer;
}
.footer .settlement.cur {
    background: #e60000;
}
.footer .settlement span {
    font-size: 0.24rem;
}
.footer .carResult {
    float: right;
    text-align: right;
    overflow: hidden;
    margin-right: 0.2rem;
}
.footer .carResult .totalMoney {
    font-size: 0.22rem;
    line-height: 0.32rem;
    color: #333;
    font-family: 'Microsoft YaHei';
    margin-top: 0.18rem;
}
.footer .carResult .totalMoney i {
    color: #e60000;
}
b, em, i, strong {
    font-style: normal;
    font-weight: 400;
}
.footer .carResult .totalDiscount {
    font-size: 0.18rem;
    line-height: 0.28rem;
    color: #e60000;
    font-family: 'Microsoft YaHei';
    margin-top: 0.07rem;
}
.footer .editWrap {
    float: right;
    overflow: hidden;
    text-align: center;
   
}
.footer .editWrap .clearnoStock {
    cursor: pointer;
    float: left;
    height: 1rem;
    line-height: 1rem;
    color: #666666;
    font-size: 0.24rem;
    width: 1.8rem;
}
.footer .editWrap .deleteSelcted {
    cursor: pointer;
    float: left;
    height: 1rem;
    line-height: 1rem;
    color: #666666;
    font-size: 0.24rem;
    width: 1.6rem;
}
.footer .editWrap .colectSelcted {
    cursor: pointer;
    float: left;
    height: 1rem;
    line-height: 1rem;
    color: #fff;
    font-size: 0.24rem;
    background: #ff4f1a;
    width: 1.6rem;
}
</style>
