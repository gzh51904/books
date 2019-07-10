<template>
  <div class="hotList">
    <div class="hTitle">
      <img src="../assets/imgs/home/changxiaobangtitle.png" />
    </div>
    <mt-navbar class="page-part" :selected.sync="selected">
      <mt-tab-item id="1">选项一</mt-tab-item>
    </mt-navbar>

<!-- tab-container -->
<mt-tab-container :active.sync="selected">
  <mt-tab-container-item id="1">
    <mt-cell v-for="n in 10" :title="'内容 ' + n"></mt-cell>
  </mt-tab-container-item>
  <mt-tab-container-item id="2">
    <mt-cell v-for="n in 4" :title="'测试 ' + n"></mt-cell>
  </mt-tab-container-item>
  <mt-tab-container-item id="3">
    <mt-cell v-for="n in 6" :title="'选项 ' + n"></mt-cell>
  </mt-tab-container-item>
</mt-tab-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      sortList: ["总榜", "文学", "社科", "少儿", "艺术", "生活", "文教"],
      selected: ""
    };
  }
};
</script>
<style scoped>
.hotList {
  margin-top: 0.1rem;
}
.hotList .hTitle {
  text-align: center;
  background: #fff;
  box-shadow: 0px 1px 0.06rem #dddcdd;
  line-height: 0.4rem;
  box-sizing: border-box;
}
.hTitle img {
  width: 1.5rem;
  padding: 0.12rem 0 0.14rem;
}
</style>