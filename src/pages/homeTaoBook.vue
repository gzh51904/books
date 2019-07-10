<template>
  <!-- 淘书 -->
  <div class="taoBook">
    <div class="title">
      <h2>
        <img src="../assets/imgs/home/taoshutuantitle.png" alt="淘书团" />
      </h2>
      <a href="#">更多</a>
    </div>
    <div class="taoList">
      <ul>
        <li v-for="(item,idx) in taoList" :key="idx">
          <a href="#">
            <div class="bookWrap">
              <div class="cover">
                <img :src="item.imgPath" :alt="item.content" />
              </div>
              <p class="name">
                {{item.content}}
                <span>团</span>
              </p>
              <div class="priceWrap">
                <div class="Tprice">
                  团购价:
                  <span>¥{{item.tPrice}}</span>
                </div>
                <div class="discountWrap">
                  <span class="original">原价¥{{item.originalPrice}}</span>
                  <span class="discount">{{item.discount}}折</span>
                </div>
              </div>
            </div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      taoList: [
        {
          imgPath: require("../assets/imgs/home/taoBook1.jpg"),
          content:
            "中央电视台《探索·发现》栏目组出品《世纪战争》全2册，回首20世纪所发生的主要战争，还原真实历史，同时加入中国军事学者、战争史研究者的深刻剖析和研究，尤其对上世纪历次战争的策源、发动、进程、结束等环节有许多精妙论述，对如何制止战争提出诸多新颖观点，引发人们对于战争与和平的进一步思索。内容翔实，角度独特，通俗易懂，那些曲折故事更是激荡人心。历史爱好者、军事爱好者、战争研究者不容错过！",
          discount: 2.8,
          originalPrice: 120,
          tPrice: 34
        },
        {
          imgPath: require("../assets/imgs/home/taoBook1.jpg"),
          content:
            "中央电视台《探索·发现》栏目组出品《世纪战争》全2册，回首20世纪所发生的主要战争，还原真实历史，同时加入中国军事学者、战争史研究者的深刻剖析和研究，尤其对上世纪历次战争的策源、发动、进程、结束等环节有许多精妙论述，对如何制止战争提出诸多新颖观点，引发人们对于战争与和平的进一步思索。内容翔实，角度独特，通俗易懂，那些曲折故事更是激荡人心。历史爱好者、军事爱好者、战争研究者不容错过！",
          discount: 2.8,
          originalPrice: 120,
          tPrice: 34
        },
        {
          imgPath: require("../assets/imgs/home/taoBook1.jpg"),
          content:
            "中央电视台《探索·发现》栏目组出品《世纪战争》全2册，回首20世纪所发生的主要战争，还原真实历史，同时加入中国军事学者、战争史研究者的深刻剖析和研究，尤其对上世纪历次战争的策源、发动、进程、结束等环节有许多精妙论述，对如何制止战争提出诸多新颖观点，引发人们对于战争与和平的进一步思索。内容翔实，角度独特，通俗易懂，那些曲折故事更是激荡人心。历史爱好者、军事爱好者、战争研究者不容错过！",
          discount: 2.8,
          originalPrice: 120,
          tPrice: 34
        }
      ]
    };
  }
};
</script>
<style>
a {
  text-decoration: none;
  color: #333;
}
/* newBooklist */
/* 淘书 */
.taoBook {
  margin-top: 0.16rem;
}
.taoBook .title {
  position: relative;
  background: #fff;
  padding-top: 0.05rem;
}
.taoBook .title h2 {
  height: 0.3rem;
}
.taoBook .title h2 img {
  width: 1.4rem;
}
.taoBook .title a {
  position: absolute;
  right: 0;
  top: 0;
  overflow: hidden;
  color: #666;
  height: 0.18rem;
  margin-top: 0.08rem;
  border: 1px solid #666;
  border-radius: 0.18rem;
  margin-right: 0.06rem;
  padding: 0 0.09rem 0 0.09rem;
  font-size: 0.12rem;
  line-height: 0.18rem;
}
.taoBook .title a::after {
  content: "";
  float: right;
  background: url(../assets/imgs/home/rightblaickarrow.png) no-repeat center;
  background-size: 0.04rem 0.07rem;
  width: 0.04rem;
  height: 0.07rem;
  margin: 0.05rem 0 0 0.05rem;
}
.taoList {
  background: #fff;
}
.taoList ul {
  overflow: hidden;
  padding: 0 0.03rem 0.06rem;
}
.taoList li {
  float: left;
  width: 50%;
  margin: 0.06rem 0 0 0;
  padding: 0 0.03rem;
  box-sizing: border-box;
}
.taoList li .bookWrap {
  background: #f3f3f3;
}
.taoList li .cover img {
  width: 100%;
  font-size: 0.12rem;
}
.taoList li .name {
  position: relative;
  color: #000000;
  line-height: 0.17rem;
  height: 0.35rem;
  font-size: 0.13rem;
  overflow: hidden;
  text-indent: 0.18rem;
  padding: 0 0.06rem;
  margin-top: 0.1rem;
  text-overflow: ellipsis;
  overflow: hidden;
  -webkit-line-clamp: 2;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  position: relative;
  /* box-sizing: border-box; */
}
.taoList ul li .name span {
  border-radius: 0.02rem;
  position: absolute;
  height: 0.13rem;
  width: 0.13rem;
  background: #ed0b0e;
  color: #ffffff;
  text-align: center;
  line-height: 0.12rem;
  font-size: 0.1rem;
  left: 0.06rem;
  top: 0.01rem;
  text-indent: 0px;
}
.taoList li .priceWrap {
  font-size: 0.12rem;
}
.taoList li .priceWrap .Tprice {
  padding: 0 0.06rem;
  color: #e60000;
  font-size: 0.12rem;
  line-height: 0.18rem;
  margin-top: 0.05rem;
}
.taoList li .priceWrap .Tprice span {
  font-size: 0.14rem;
}
.taoList li .priceWrap .discountWrap {
  padding: 0 0 0.1rem 0.06rem;
  overflow: hidden;
  margin-top: 0.025rem;
}
.taoList li .priceWrap .discountWrap .original {
  float: left;
  text-decoration: line-through;
  color: #9a9a9a;
  font-size: 0.12rem;
  line-height: 0.18rem;
}
.taoList li .priceWrap .discountWrap .discount {
  float: right;
  height: 0.16rem;
  line-height: 0.16rem;
  font-size: 0.12rem;
  color: #fff;
  background: #efb64d;
  border-radius: 0.16rem 0 0 0.16rem;
  padding: 0 0.04rem;
}
</style>
