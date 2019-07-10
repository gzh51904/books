<template>
  <!-- 新书速递 -->
  <div class="BookCourierWrap">
    <div class="BookCourierTit">
      <h2>
        <img src="../assets/imgs/home/newtitle.png" alt="新书速递" />
      </h2>
    </div>
    <div class="courierList">
      <ul>
        <li>
          <a href="/5739467.htm">
            <div class="bookWrap">
              <div class="cover">
                <img src="http://image12.bookschina.com/2013/20130310/s5739467.jpg" alt="武士会" class />
              </div>
              <p class="name">武士会</p>
              <div class="priceWrap">
                <span class="price">¥16.2</span>
                <span class="original">¥33.0</span>
              </div>
            </div>
          </a>
        </li>
        <li>
          <a href="/7579016.htm">
            <div class="bookWrap">
              <div class="cover">
                <img
                  src="http://image12.bookschina.com/2018/20180515/s7579016.jpg"
                  alt="野性的呼唤-中英文对照版/胆小家犬回归野性北国称王"
                  class
                />
              </div>
              <p class="name">野性的呼唤-中英文对照版/胆小家犬回归野性北国称王</p>
              <div class="priceWrap">
                <span class="price">¥18.3</span>
                <span class="original">¥39.8</span>
              </div>
            </div>
          </a>
        </li>
        <li>
          <a href="/5611312.htm">
            <div class="bookWrap">
              <div class="cover">
                <img
                  src="http://image12.bookschina.com/2012/20120830/s5611312.jpg"
                  alt="图解中国著名佛教寺院/梁思成亲传弟子张驭寰毕生力作"
                  class
                />
              </div>
              <p class="name">图解中国著名佛教寺院/梁思成亲传弟子张驭寰毕生力作</p>
              <div class="priceWrap">
                <span class="price">¥20.7</span>
                <span class="original">¥69.0</span>
              </div>
            </div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style>
/* 新书速递 */
.BookCourierWrap {
  margin-top: 0.16rem;
}
.courierList ul {
  padding: 0 0.05rem;
  background: #fff;
  overflow: hidden;
  padding-bottom: 0.18rem;
}
.courierList ul li {
  float: left;
  width: 33.33333333333%;
  padding: 0 0.05rem;
  margin-top: 0.2rem;
  box-sizing: border-box;
}
.courierList ul li .cover {
  text-align: center;
  padding: 0.05rem 0;
}
.courierList ul li .cover img {
  max-width: 100%;
  height: 2rem;
}
.courierList ul li .name {
  color: #000;
  font-size: 0.22rem;
  line-height: 0.3rem;
  margin-top: 0.1rem;
  padding: 0 0.1rem;
  height: 0.6rem;
  text-overflow: ellipsis;
  overflow: hidden;
  -webkit-line-clamp: 2;
  display: -webkit-box;
  -webkit-box-orient: vertical;
}
.courierList ul li .priceWrap {
  overflow: hidden;
  padding: 0 0.1rem;
  line-height: 0.3rem;
  margin-top: 0.07rem;
}
.courierList ul li .priceWrap .price {
  float: left;
  color: #e60000;
  font-size: 0.24rem;
}
.courierList ul li .priceWrap .original {
  float: left;
  color: #999999;
  font-size: 0.22rem;
  margin-left: 0.14rem;
  text-decoration: line-through;
}
</style>
