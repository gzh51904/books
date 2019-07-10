<template>
  <div class="home">
    <homeSearchHeader></homeSearchHeader>
    <!-- 轮播图 -->
    <home-swipe></home-swipe>
    <!-- 小nav -->
    <homeMinNav></homeMinNav>
    <!-- 公告 -->
    <homeNotice></homeNotice>
        <!-- newBook -->
    <homeNewBook></homeNewBook>
      <!-- 淘书 -->
    <homeTaoBook></homeTaoBook>
       <!-- 热评 -->
    <homeHotComment></homeHotComment>
       <!-- 推荐书单 -->
    <homeRecommend></homeRecommend>
      <!-- 新书速递 -->
    <homeBookCourier></homeBookCourier>
    <!-- 热榜 -->
    <homeHotList></homeHotList>

  </div>
</template>

<script>
import homeSwipe from './homeSwipe.vue'
import homeSearchHeader from './homeSearchHeader.vue'
import homeMinNav from './homeMinNav.vue'
import homeNotice from './homeNotice.vue'
import homeNewBook from './homeNewBook.vue'
import homeTaoBook from './homeTaoBook.vue'
import homeHotComment from './homeHotComment.vue'
import homeRecommend from './homeRecommend.vue'
import homeBookCourier from './homeBookCourier.vue'
import homeHotList from './homeHotList.vue'
export default {
  data() {
    return {
    
    };
  },
  components:{
    homeSwipe,
    homeSearchHeader,
    homeMinNav,
    homeNotice,
    homeNewBook,
    homeTaoBook,
    homeHotComment,
    homeRecommend,
    homeBookCourier,
    homeHotList
  }
};
</script>

<style scoped>
a {
  text-decoration: none;
  color: #333;
}

</style>