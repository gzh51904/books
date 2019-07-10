<template>
  <div class="goodscontent">
    <goodspicbook></goodspicbook>
   <!-- 主体的书本照片与书本的基本信息 -->
    <goodstold></goodstold>
    <!-- 书本的评论区+买过此书的人还买过其他书 -->
    <goodsdetails></goodsdetails>
    <!-- 书本的详情区域 -->
  </div>
</template>
<script>
import goodspicbook from "./goodspicbook.vue";
import goodstold from "./goodstold.vue";
import goodsdetails from "./goodsdetails.vue";
export default {
  data() {
    return {};
  },
  components: {
    goodspicbook,
    goodstold,
    goodsdetails
  }
};
</script>
<style>
.goodscontent{
  width:100%;
}
</style>

