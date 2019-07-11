<template>
  <div class="home">
    <homeSearchHeader v-show="headerIsShow"></homeSearchHeader>
    <!-- 轮播图 -->
    <home-swipe></home-swipe>
    <!-- 小nav -->
    <homeMinNav></homeMinNav>
    <!-- 公告 -->
    <homeNotice></homeNotice>
    <!-- newBook -->
    <homeNewBook></homeNewBook>

    <div class="swiper-container swiper-container3">
      <img
        src="http://image31.bookschina.com/pro-images/190710sx/700185.jpg?id=1"
        alt="囤书避暑|低至1元|3本折上7折"
      />
    </div>

    <!-- 淘书 -->
    <homeTaoBook></homeTaoBook>
    <!-- 热评 -->
    <homeHotComment></homeHotComment>
    <!-- 推荐书单 -->
    <homeRecommend></homeRecommend>
    <!-- 新书速递 -->
    <homeBookCourier></homeBookCourier>
    <!-- 热榜 -->
    <homeHotList ref="hotList"></homeHotList>

    <homeFooter></homeFooter>

    <div class="fixed_box" v-if="backtopShow > 200">
      <a href="javascript:scrollTo(0,0)">
        <img src="../assets/imgs/home/backtop.png" alt="返回顶部" />
      </a>
    </div>
  </div>
</template>

<script>
import homeSwipe from "./homeSwipe.vue";
import homeSearchHeader from "./homeSearchHeader.vue";
import homeMinNav from "./homeMinNav.vue";
import homeNotice from "./homeNotice.vue";
import homeNewBook from "./homeNewBook.vue";
import homeTaoBook from "./homeTaoBook.vue";
import homeHotComment from "./homeHotComment.vue";
import homeRecommend from "./homeRecommend.vue";
import homeBookCourier from "./homeBookCourier.vue";
import homeHotList from "./homeHotList.vue";
import homeFooter from "./homeFooter.vue";

export default {
  data() {
    return {
      backtopShow: 0,
      hotListNav: null,
      hotListNavTop: 3000,
      headerIsShow: true
    };
  },
  mounted() {
    this.hotListNav = this.$refs.hotList.$refs.hotNavBar;
    this.hotListNavTop = this.hotListNav.offsetTop + window.screen.height;
    
    //监听滚动条滚动
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      //滚动条距离顶部距离
      let top =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;

      this.backtopShow = top;
      if (top > this.hotListNavTop) {
        //隐藏header
        this.headerIsShow = false;
        //添加吸顶样式
        this.hotListNav.classList.add("fixed");
      } else {
        this.headerIsShow = true;
        this.hotListNav.classList.remove("fixed");
      }
    }
  },
  components: {
    homeSwipe,
    homeSearchHeader,
    homeMinNav,
    homeNotice,
    homeNewBook,
    homeTaoBook,
    homeHotComment,
    homeRecommend,
    homeBookCourier,
    homeHotList,
    homeFooter
  }
};
</script>

<style scoped>
a {
  text-decoration: none;
  color: #333;
}
.fixed_box {
  position: fixed;
  right: 0em;
  bottom: 1rem;
  height: 0.9rem;
  width: 0.9rem;
  line-height: 0.25rem;
}
.fixed_box a img {
  width: 100%;
  font-size: 12px;
}

.swiper-container {
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  list-style: none;
  padding: 0;
  z-index: 1;
}
.swiper-container img {
  width: 100%;
}
</style>