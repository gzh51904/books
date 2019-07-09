<template>
  <div class="home">
    <div class="search">
      <h1>
        <img src="../assets/imgs/home/logo.png" alt />
      </h1>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      goodsList: []
    };
  },
  async created() {},
  methods: {}
};
</script>
<style>
.search {
  height: 0.54rem;
  background: red;
  position: relative;
  width: 100%;
  overflow: hidden;
}

.search h1 {
  position: absolute;
  left: 0;
  top: 0;
  height: 0.38rem;
  margin-top: 0.09rem;
}

.search h1 img {
  width: 1.1rem;
}

img {
  border: none;
  vertical-align: top;
  font-size: 12px;
}
</style>