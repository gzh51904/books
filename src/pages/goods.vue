<template>
  <div class="goods">
    <goodstop></goodstop>
    <!-- goods顶部 -->
    <div class="goodspicbook listshow">
      <div class="bookProduct" id="book">
        <div class="bookCover">
          <div class="bookPic">
            <img :src="info.img" alt="迷行记" id="imgBook" />
          </div>
          <div class="rederScore">
            <div class="rederScoreInner">
              <span>
                读者评分
                <br />4.7分
              </span>
            </div>
          </div>
        </div>
        <div class="bookInfor">
          <h1>{{info.title}}</h1>
          <p>迷情江湖·定柔三迷</p>
        </div>
        <div class="bookPrice">
          <div class="salePrice" id="divPrice">
            <span class="urerLeave">1星价</span>
            <span class="price">{{info.price}}</span>
            <span class="discount">(5.2折)</span>
          </div>
          <div class="otherPrice">
            <span class="startPrice">2星价￥{{info.price}}</span>
            <span class="originalPrice">{{info.zhekou}}</span>
          </div>
        </div>

        <div class="activeList"></div>
        <div class="inforLInk">
          <div class="inforLinkItem" id="lblAuthor">
            <a href="/Books/Search?stp=%e6%96%bd%e5%ae%9a%e6%9f%94">作者：施定柔</a>
          </div>
          <div class="inforLinkItem" id="divPublish">
            <a href="/publish/5054/">
              出版社：朝华出版社
              <span class="arrowIcon"></span>
            </a>
          </div>
          <div class="inforLinkItem">
            <a href="/24hour/54000000/">
              本类榜单：小说
              <span class="arrowIcon"></span>
            </a>
          </div>

          <div class="seriesBook">
            <span>所属丛书：</span>
            <a href="/congshu/47986">迷情江湖·定柔三迷</a>
          </div>

          <div class="inforLinkItem">
            <a href="/kinder/54260000">分类：小说 &gt; 武侠</a>
            <span class="arrowIcon"></span>
          </div>
        </div>

        <div class="service">
          <ul>
            <li>正版好图书</li>
            <li>全场满69包邮</li>
            <li>特价书1折起</li>
          </ul>
        </div>
      </div>
    </div>
    <goodscontent></goodscontent>
    <!-- goods主体 -->
    <!-- goods底部 -->
    <div class="goodsbotton">
      <div class="footer">
        <div class="footerInner">
          <div class="btn_bar">
            <div class="iconBtn" id="customerService">
              <div class="iconBtnInner">
                <i class="icon"></i>
                <span class="txt">客服</span>
              </div>
            </div>
            <div class="iconBtn" id="collection" data-bookid="1294266">
              <div class="iconBtnInner">
                <i class="icon"></i>
                <span class="txt">收藏</span>
              </div>
            </div>
            <div class="iconBtn" id="gotoCart">
              <div class="iconBtnInner" style="border:none" @click="cartpage">
                <span class="add_num" id="popone" style>{{cartnum}}</span>
                <i class="icon"></i>
                <span class="txt" >购物车</span>
              </div>
            </div>
          </div>
          <div class="btn_group">
            <div class="de_row">
              <div class="btn btn_red" id="addCart" @click="addcart($event,info)">
                <span class="txt">加入购物车</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="backTop" style="display: block;">
        <a href="javascript:scrollTo(0,0)"></a>
      </div>
    </div>
  </div>
</template>
<script>
import goodstop from "./goodstop.vue";
import goodscontent from "./goodscontent.vue";
import goodsbotton from "./goodsbotton.vue";
export default {
  data() {
    return {
      info: {}
    };
  },
  computed:{
     cartnum(){
       return this.$store.state.cart.goodslist.length;
     }
  },
  async created() {
    let { id } = this.$route.params;
    console.log(id);
    let { data } = await this.$axios.get("http://localhost:1995/goods/" + id);

    data = data.data[0];
    this.info = data;
    
    console.log("sdfsdf",this.$store.state.cart)
  },
  components: {
    goodstop,
    goodscontent,
    goodsbotton
  },
  methods: {
    addcart($event, newgood) {
      let { commit, state } = this.$store;
      
      let {id} = this.info;

      let { goodslist } = state.cart;
      console.log("sdfsdf",state.cart)
      let current = goodslist.filter(item => {
        // console.log('id:',item.id)
        return item.id == id
      })[0];
      if (current) {
        commit("addnum", id);
      } else {
        commit("add", newgood);
      }
    },
    cartpage(){
      this.$router.push({name:'Cart'})
    }
  }
};
</script>
<<<<<<< HEAD
<style scoped>

</style>
=======
<style>
.footer {
  position: fixed;
  left: 0;
  bottom: 0;
  height: 0.88rem;
  box-shadow: -1px -1px 10px #d8d8d8;
  z-index: 900;
  background: #fff;
  width: 100%;
}
.footer .footerInner {
  position: relative;
  padding-left: 3.28rem;
  font-size: 12px;
  background: #fff;
}
.footer .btn_bar {
  position: absolute;
  width: 3.28rem;
  left: 0;
  top: 0;
  overflow: hidden;
}
.footer .btn_bar .iconBtn {
  width: 33.33333%;
  height: 0.88rem;
  float: left;
  text-align: center;
  cursor: pointer;
}
.footer .btn_bar .iconBtn .iconBtnInner {
  border-right: 2px solid #f3f3f3;
  height: 0.88rem;
  overflow: hidden;
  position: relative;
}
.footer .btn_bar #customerService .icon {
  background: url(http://m.bookschina.com/Content/images/cumthor.png) no-repeat
    center;
  background-size: cover;
}
.footer .btn_bar #collection .icon {
  background: url(http://m.bookschina.com/Content/images/nocollection.png)
    no-repeat center;
  background-size: cover;
}
.footer .btn_bar #gotoCart .icon {
  background: url(http://m.bookschina.com/Content/images/gotocar.png) no-repeat
    center;
  background-size: cover;
}
.footer .btn_bar .iconBtn .iconBtnInner .add_num {
  position: absolute;
  font-size: 12px;
  text-align: center;
  min-width: 0.25rem;
  height: 0.25rem;
  line-height: 0.25rem;
  color: #fff;
  border-radius: 0.2rem;
  background: #e60000;
  left: 50%;
  top: 0.1rem;
}
.footer .btn_bar .iconBtn .icon {
  height: 0.36rem;
  width: 0.36rem;
  margin: 0.12rem auto 0;
  display: block;
}
.footer .btn_bar .iconBtn .txt {
  text-align: center;
  color: #666666;
  font-size: 0.22rem;
}
.footer .btn_group {
  width: 100%;
  height: 0.88rem;
  line-height: 0.88rem;
  text-align: center;
}
.footer .btn_group .btn_red {
  background: #e60000;
}
.footer .btn_group span {
  font-size: 0.3rem;
  color: #fff;
}
.backTop {
  display: none;
  position: fixed;
  bottom: 1.1rem;
  right: 0;
  border-radius: 0.05rem 0 0 0.05rem;
  background: rgba(0, 0, 0, 0.7)
    url(http://m.bookschina.com/Content/images/sidebarbacktop.png) no-repeat
    center;
  background-size: 0.23rem 0.33rem;
  z-index: 999;
}
.backTop a {
  display: block;
  height: 0.7rem;
  width: 0.9rem;
}
.bookCover {
  position: relative;
  padding: 0.3rem 0;
  background: #fff;
  margin-top: 0.88rem;
}
.bookCover .bookPic {
  border: 1px solid #fef0f0;
  text-align: center;
  width: 3.52rem;
  margin: auto;
  position: relative;
}
.bookCover .bookPic img {
  max-width: 100%;
  height: 3.5rem;
}
img {
  border: none;
  vertical-align: top;
  font-size: 12px;
}
.bookCover .rederScore {
  position: absolute;
  right: 0;
  bottom: 0.3rem;
  height: 0.68rem;
  border: 2px solid #ff551e;
  border-right: none;
  border-radius: 0.64rem 0 0 0.64rem;
  display: table;
  padding: 0 0.2rem;
}
.bookCover .rederScoreInner {
  display: table-cell;
  vertical-align: middle;
  text-align: center;
  line-height: 0.3rem;
}
.bookCover .rederScoreInner span {
  font-size: 0.2rem;
  color: #ff551e;
  display: block;
}
.bookInfor {
  padding: 0.25rem 0.2rem 0;
  background: #fff;
}
.bookInfor h1 {
  font-size: 0.28rem;
  line-height: 0.38rem;
  color: #000;
}
.bookInfor p {
  margin-top: 0.1rem;
  color: #333333;
  font-size: 0.2rem;
  line-height: 0.3rem;
}
.bookPrice {
  overflow: hidden;
  background: #fff;
  padding: 0.15rem 0.2rem 0;
}
.bookPrice .salePrice {
  float: left;
  overflow: hidden;
  line-height: 0.4rem;
}
.bookPrice .salePrice .urerLeave {
  font-size: 0.2rem;
  color: #e60000;
  margin: 0.02rem 0.06rem 0 0;
}
.bookPrice .salePrice span {
  float: left;
}
.bookPrice .salePrice .price {
  font-size: 0.3rem;
  color: #e60000;
  font-weight: bold;
}
.bookPrice .salePrice .discount {
  font-size: 0.2rem;
  color: #333333;
  margin: 0.02rem 0 0 0.15rem;
}
.bookPrice .otherPrice {
  float: right;
  overflow: hidden;
  line-height: 0.4rem;
}
.bookPrice .otherPrice .startPrice {
  float: left;
  color: #666666;
  font-size: 0.2rem;
  margin: 0.02rem 0.28rem 0 0;
}
.bookPrice .otherPrice .originalPrice {
  float: left;
  color: #666666;
  font-size: 0.2rem;
  margin: 0.02rem 0 0 0;
}
.activeList {
  overflow: hidden;
  padding: 0 0.2rem 0.2rem;
  background: #fff;
}
.inforLInk {
  padding: 0 0.2rem;
  background: #fff;
  /* margin-top: 0.16rem; */
}
.inforLInk .inforLinkItem {
  border-bottom: 0.02rem solid #f3f3f3;
  height: 0.7rem;
  line-height: 0.68rem;
  position: relative;
}
.inforLInk .inforLinkItem a {
  display: block;
  height: 0.68rem;
  color: #333;
  font-size: 0.22rem;
  background: url(http://m.bookschina.com/Content/images/rightarrow.png)
    no-repeat right;
  background-size: 0.16rem 0.28rem;
}
.bookInfor p {
  margin-top: 0.1rem;
  color: #333333;
  font-size: 0.2rem;
  line-height: 0.3rem;
}
.bookPrice {
  overflow: hidden;
  background: #fff;
  padding: 0.15rem 0.2rem 0;
}
.bookPrice .salePrice {
  float: left;
  overflow: hidden;
  line-height: 0.4rem;
}
.bookPrice .salePrice .urerLeave {
  font-size: 0.2rem;
  color: #e60000;
  margin: 0.02rem 0.06rem 0 0;
}
.bookPrice .salePrice .price {
  font-size: 0.3rem;
  color: #e60000;
  font-weight: bold;
}
.bookPrice .salePrice .discount {
  font-size: 0.2rem;
  color: #333333;
  margin: 0.02rem 0 0 0.15rem;
}
.bookPrice .otherPrice {
  float: right;
  overflow: hidden;
  line-height: 0.4rem;
}
.bookPrice .otherPrice .startPrice {
  float: left;
  color: #666666;
  font-size: 0.2rem;
  margin: 0.02rem 0.28rem 0 0;
}
.bookPrice .otherPrice .originalPrice {
  float: left;
  color: #666666;
  font-size: 0.2rem;
  margin: 0.02rem 0 0 0;
}
.activeList {
  overflow: hidden;
  padding: 0 0.2rem 0.2rem;
  background: #fff;
}
.inforLInk {
  padding: 0 0.2rem;
  background: #fff;
  /* margin-top: 0.16rem; */
}
.inforLInk .inforLinkItem {
  border-bottom: 0.02rem solid #f3f3f3;
  height: 0.7rem;
  line-height: 0.68rem;
  position: relative;
}
.inforLInk .inforLinkItem a {
  display: block;
  height: 0.68rem;
  color: #333;
  font-size: 0.22rem;
  background: url(http://m.bookschina.com/Content/images/rightarrow.png)
    no-repeat right;
  background-size: 0.16rem 0.28rem;
}
.inforLInk .seriesBook {
  border-bottom: 0.02rem solid #f3f3f3;
  height: 0.7rem;
  line-height: 0.68rem;
  position: relative;
  font-size: 0.22rem;
  color: #333;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.inforLInk .inforLinkItem span {
  background: url(http://m.bookschina.com/Content/images/rightarrow.png)
    no-repeat center;
  background-size: 0.16rem 0.28rem;
  height: 0.68rem;
  width: 0.16rem;
  top: 0;
  right: 0.1rem;
  position: absolute;
  display: none;
}
.service {
  padding: 0 0.2rem;
}
.service ul {
  overflow: hidden;
}
.service ul li {
  height: 0.66rem;
  line-height: 0.66rem;
  float: left;
  font-size: 0.22rem;
  color: #333333;
  background: url(http://m.bookschina.com/Content/images/seviceIcon.png)
    no-repeat left;
  background-size: 0.26rem;
  padding-left: 0.42rem;
  margin-right: 0.2rem;
}
</style>
>>>>>>> 3ecfaa803a5c25e846ebc8afad6781ea13bf3320
