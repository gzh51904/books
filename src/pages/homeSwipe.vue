<template>
  <!-- 轮播图 -->
  <mt-swipe :auto="4000">
    <mt-swipe-item v-for="(item,idx) in imglist" :key="idx">
      <img :src="item" alt />
    </mt-swipe-item>
  </mt-swipe>
</template>
<script>
export default {
  data() {
    return {
      imglist: [
        require("../assets/imgs/home/lb1.jpg"),
        require("../assets/imgs/home/lb2.jpg"),
        require("../assets/imgs/home/lb3.jpg"),
        require("../assets/imgs/home/lb4.jpg"),
        require("../assets/imgs/home/lb5.jpg"),
        require("../assets/imgs/home/lb6.jpg")
      ]
    };
  }
};
</script>
<style>
/* 轮播图 */
.mint-swipe {
  height: 2.25rem;
  margin-top: 0.9rem;
}
.mint-swipe-item img {
  height: 2.25rem;
  width: 100%;
}
.mint-swipe-indicators {
  bottom: 0rem;
}
.mint-swipe-indicator {
  background: #fff;
}
.mint-swipe-indicator.is-active {
  background: #f00;
  opacity: 1;
}
</style>
