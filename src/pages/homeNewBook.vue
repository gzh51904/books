<template>
  <!-- newBook -->
  <div class="newBook">
    <div class="newBookTitle">
      <h2>新到图书折上折</h2>
      <a href="#">更多</a>
    </div>
    <div class="newBookList">
      <ul>
        <li v-for="item in newBookList" :key="item.title">
          <a href="#">
            <div class="bookWrap">
              <div class="cover">
                <img :src="item.imgPath" alt="莲花" />
              </div>
              <p class="name">{{item.title}}</p>
              <div class="priceWrap">
                <span class="price">¥{{item.price}}</span>
                <span class="original">¥{{item.originalPrice}}</span>
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
      newBookList: [
        {
          title: "莲花",
          imgPath: require("../assets/imgs/home/newBook1.jpg"),
          price: 11.6,
          originalPrice: 36.0
        },
        {
          title: "世有桃花",
          imgPath: require("../assets/imgs/home/newBook1.jpg"),
          price: 9.5,
          originalPrice: 27.0
        },
        {
          title: "世有桃",
          imgPath: require("../assets/imgs/home/newBook1.jpg"),
          price: 11.6,
          originalPrice: 36.0
        },
        {
          title: "世有",
          imgPath: require("../assets/imgs/home/newBook1.jpg"),
          price: 11.6,
          originalPrice: 36.0
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
.newBookTitle {
  background: #f9bd00;
  height: 0.68rem;
  position: relative;
}
.newBookTitle h2 {
  font-size: 0.26rem;
  margin-left: 0.2rem;
  line-height: 0.68rem;
  color: #fff;
  font-style: normal;
  font-weight: normal;
}
.newBookTitle a {
  position: absolute;
  right: 0;
  top: 0;
  overflow: hidden;
  color: #ffffff;
  height: 0.3rem;
  margin-top: 0.2rem;
  border: 1px solid #fff;
  border-radius: 0.28rem;
  margin-right: 0.1rem;
  padding: 0 0.16rem 0 0.16rem;
  font-size: 0.2rem;
  line-height: 0.28rem;
}
.newBookTitle a::after {
  float: right;
  background: url(../assets/imgs/home/whiterightarrow.png) no-repeat right
    center;
  background-size: 0.06rem 0.11rem;
  width: 0.06rem;
  height: 0.11rem;
  margin: 0.08rem 0 0 0.08rem;
}
.newBookList ul {
  padding: 0 0.05rem;
  background: #fff;
  overflow: hidden;
  padding-bottom: 0.18rem;
}
.newBookList ul li {
  float: left;
  width: 33.33%;
  padding: 0 0.05rem;
  margin-top: 0.2rem;
  box-sizing: border-box;
}
.newBookList ul li a {
  display: block;
}
.newBookList ul li .cover {
  text-align: center;
  padding: 0.05rem 0;
}
.newBookList ul li .cover img {
  max-width: 100%;
  height: 2rem;
}
.newBookList ul li .name {
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

.newBookList ul li .priceWrap {
  overflow: hidden;
  padding: 0 0.1rem;
  line-height: 0.3rem;
  margin-top: 0.07rem;
}
.newBookList ul li .priceWrap .price {
  float: left;
  color: #e60000;
  font-size: 0.22rem;
}
.newBookList ul li .priceWrap .original {
  float: left;
  color: #999999;
  font-size: 0.22rem;
  margin-left: 0.14rem;
  text-decoration: line-through;
}
</style>
