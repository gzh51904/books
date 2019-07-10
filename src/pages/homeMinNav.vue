<template>
  <!-- 小nav -->
  <nav>
    <ul class="index-nav">
      <li v-for="item in navList" :key="item.title">
        <img :src="item.imgPath" :alt="item.title" />
        <span>{{item.title}}</span>
      </li>
    </ul>
  </nav>
</template>
<script>
export default {
  data() {
    return {
      navList: [
        {
          title: "畅销榜",
          imgPath: require("../assets/imgs/home/nav1.png")
        },
        {
          title: "淘书团",
          imgPath: require("../assets/imgs/home/nav2.png")
        },
        {
          title: "9.9包邮",
          imgPath: require("../assets/imgs/home/nav3.png")
        },
        {
          title: "新上架",
          imgPath: require("../assets/imgs/home/nav4.png")
        },
        {
          title: "出版社",
          imgPath: require("../assets/imgs/home/nav5.png")
        }
      ]
    };
  },
  mounted() {
      
  },
};
</script>
<style>
/* nav */
.index-nav {
  overflow: hidden;
  background-color: #fff;
  padding: 0.2rem 0 0.15rem;
}
.index-nav li {
  width: 20%;
  float: left;
  text-align: center;
}
.index-nav li img {
  display: block;
  margin: auto;
  width: 0.72rem;
  height: 0.72rem;
  font-size: 12px;
  color: #666;
}
.index-nav li span {
  display: block;
  font-size: 0.22rem;
  line-height: 0.27rem;
  margin-top: 0.05rem;
  color: #333333;
}
</style>
