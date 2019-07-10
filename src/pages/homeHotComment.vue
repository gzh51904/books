<template>
    <!-- 热评 -->
    <div class="hotComment">
      <div class="hotTitle">
        <h2>
          <img src="../assets/imgs/home/hotTitle.png" alt="读者热评" />
        </h2>
      </div>
      <div class="hotList">
        <div class="hotMain">
          <a href="/6569434.htm">
            <div class="bookWrap">
              <div class="cover">
                <img
                  src="http://image12.bookschina.com/2014/20140317/s6569434.jpg"
                  alt="不合时宜的阅读者"
                  class
                />
              </div>
              <p class="name">不合时宜的阅读者</p>
              <div class="startWrap">
                <span class="full"></span>
                <span class="full"></span>
                <span class="full"></span>
                <span class="full"></span>
                <span class="half"></span>
                <b>16条评论</b>
              </div>
              <div class="priceWrap">
                <span class="price">¥18.7</span>
                <span class="original">¥39.0</span>
              </div>
              <div class="review">
                <span>[好评]</span>连清川在ft中文网上的书评专栏“我是书虫”很受读者喜爱，本书正是该专栏的作品结集。作者笔触涉及人文历史诸多领域，因而所评书籍并无特定派别或特定风格。有情趣不随俗，有坚持不迎合——此乃作者的阅读观。作者将阅读视为一种生命的存在方式，已超越了一般兴趣。当整个社会浸淫于gdp和暴富神话之中，阅读给人以富有温度的生命安慰。
              </div>
            </div>
          </a>
        </div>
        <ul>
          <li>
            <a href="/6368566.htm">
              <div class="bookWrap">
                <div class="cover">
                  <img
                    src="http://image31.bookschina.com/2018/zuo/12/s6368566.jpg"
                    alt="中西神话"
                    class
                  />
                </div>
                <p class="name">中西神话</p>
                <div class="startWrap">
                  <span class="full"></span>
                  <span class="full"></span>
                  <span class="full"></span>
                  <span class="full"></span>
                  <span class="half"></span>
                  <b>40条评论</b>
                </div>
                <div class="priceWrap">
                  <span class="price">¥19.0</span>
                  <span class="original">¥28.0</span>
                </div>
                <div class="review">
                  <span>[好评]</span>余英时作序推荐，改自张学明博士在香港中文大学历史系开办多年，极受学生欢迎的《古希腊与中国神话比较史》课程。
                </div>
              </div>
            </a>
          </li>
          <li>
            <a href="/5816721.htm">
              <div class="bookWrap">
                <div class="cover">
                  <img
                    src="http://image12.bookschina.com/2013/20131125/s5816721.jpg"
                    alt="魔符"
                    class
                  />
                </div>
                <p class="name">魔符</p>
                <div class="startWrap">
                  <span class="full"></span>
                  <span class="full"></span>
                  <span class="full"></span>
                  <span class="full"></span>
                  <span class="half"></span>
                  <b>17条评论</b>
                </div>
                <div class="priceWrap">
                  <span class="price">¥24.5</span>
                  <span class="original">¥49.0</span>
                </div>
                <div class="review">
                  <span>[好评]</span>“恐怖之王”斯蒂芬·金作品，描述了一场如《黑暗塔》般的奇幻旅程，堪称一个男孩的英雄史诗。
                </div>
              </div>
            </a>
          </li>
        </ul>
      </div>
      <div class="fiveStarLink">
        <a href="#">查看五星书&gt;&gt;</a>
      </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style>
a {
  text-decoration: none;
  color: #333;
}
/* 热评 */
.hotComment {
  margin-top: 0.1rem;
}
.hotTitle,
.recommendTit,
.BookCourierTit {
  position: relative;
  background: #fff;
  padding: 0.05rem 0 0.06rem;
  box-shadow: 0px 1px 2px #dddcdd;
}
.hotTitle h2,
.recommendTit h2,
.BookCourierTit h2{
  height: 0.3rem;
}

.hotTitle h2 img,
.recommendTit h2 img,
.BookCourierTit h2 img {
  width: 1.38rem;
}
.hotMain {
  padding: 0 0.12rem;
  background: #fff;
}
.hotList ul {
  overflow: hidden;
}
.hotMain .bookWrap {
  position: relative;
  margin-bottom: 2px;
  padding-left: 1.3rem;
  overflow: hidden;
  min-height: 1.5rem;
}
.hotMain .bookWrap .cover {
  margin: 0.09rem 0;
  height: 1.32rem;
  width: 1.32rem;
  position: absolute;
  left: 0;
  top: 0;
  text-align: center;
}
.hotMain .bookWrap .cover img {
  height: 1.3rem;
  max-width: 100%;
}
.hotMain .bookWrap .name {
  color: #000;
  font-size: 0.13rem;
  line-height: 0.18rem;
  margin-top: 0.12rem;
  height: 0.18rem;
  text-overflow: ellipsis;
  overflow: hidden;
  -webkit-line-clamp: 1;
  display: -webkit-box;
  -webkit-box-orient: vertical;
}
.hotMain .bookWrap .startWrap {
  overflow: hidden;
  line-height: 0.12rem;
  margin-top: 0.06rem;
}
.hotMain .bookWrap .startWrap span.full,
.hotList ul li .startWrap span.full {
  background-image: url(../assets/imgs/home/full.png);
  background-size: 0.12rem 0.12rem;
}
.hotMain .bookWrap .startWrap span.half,
.hotList ul li .startWrap span.half {
  background-image: url(../assets/imgs/home/halfstart.png);
  background-size: 0.12rem 0.12rem;
}
.hotMain .bookWrap .startWrap span,
.hotList ul li .startWrap span {
  float: left;
  height: 0.12rem;
  width: 0.12rem;
  margin: 0 0.03rem 0 0;
}
.hotMain .bookWrap .startWrap b,
.hotList ul li .startWrap b {
  float: left;
  font-size: 0.12rem;
  margin-left: 0.06rem;
  color: #ff511c;
  font-weight: 400;
}
.hotMain .bookWrap .priceWrap,
.hotList ul li .priceWrap {
  overflow: hidden;
  line-height: 0.18rem;
  margin-top: 0.04rem;
}
.hotMain .bookWrap .priceWrap .price,
.hotList ul li .priceWrap .price {
  float: left;
  color: #e60000;
  font-size: 0.14rem;
}
.hotMain .bookWrap .priceWrap .original,
.hotList ul li .priceWrap .original {
  float: left;
  color: #999999;
  font-size: 0.13rem;
  margin-left: 0.07rem;
  text-decoration: line-through;
}
.hotMain .bookWrap .review,
.hotList ul li .review {
  color: #666666;
  font-size: 0.12rem;
  line-height: 0.18rem;
  height: 0.54rem;
  padding: 0.03rem 0.09rem;
  background: #f3f3f3;
  margin: 0.06rem 0 0;
  text-overflow: ellipsis;
  overflow: hidden;
  -webkit-line-clamp: 2;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  box-sizing: border-box;
}
.hotMain .bookWrap .review span,
.hotList ul li .review {
  color: #e60000;
}
.hotList ul {
  overflow: hidden;
}
.hotList ul li {
  float: left;
  width: 50%;
  overflow: hidden;
  padding: 0 2px 2px 0;
  box-sizing: border-box;
}
.hotList ul li .bookWrap {
  background: #fff;
  padding: 0.09rem 0 0.1rem 0;
}
.hotList ul li .cover {
  text-align: center;
  padding: 0.03rem 0;
}
.hotList ul li .cover img {
  max-width: 100%;
  height: 1.2rem;
}
.hotList ul li .name {
  color: #000;
  font-size: 0.13rem;
  line-height: 0.18rem;
  margin-top: 0.07rem;
  padding: 0 0.09rem 0 0.12rem;
  height: 0.18rem;
  text-overflow: ellipsis;
  overflow: hidden;
  -webkit-line-clamp: 1;
  display: -webkit-box;
  -webkit-box-orient: vertical;
}
.hotList ul li .startWrap {
  overflow: hidden;
  padding: 0 0 0 0.12rem;
  line-height: 0.12rem;
  margin-top: 0.06rem;
}
.hotList ul li .priceWrap {
  overflow: hidden;
  padding: 0 0.06rem 0 0.12rem;
  line-height: 0.18rem;
  margin-top: 0.04rem;
}
.hotList ul li .review {
  color: #666666;
  font-size: 0.12rem;
  line-height: 0.18rem;
  background: #f3f3f3;
  margin: 0.06rem 0.03rem 0;
  padding: 0.03rem 0.09rem;
  text-overflow: ellipsis;
  overflow: hidden;
  -webkit-line-clamp: 2;
  display: -webkit-box;
  -webkit-box-orient: vertical;
}
.fiveStarLink a {
  display: block;
  text-align: center;
  font-size: 0.14rem;
  color: #4a4a4a;
  height: 0.5rem;
  line-height: 0.5rem;
  background: #efbf41;
}

</style>