<template>
    <header>
      <div class="search">
        <h1>
          <img src="../assets/imgs/home/logo.png" alt />
        </h1>
        <div class="searchInput">
          <span>ojbk</span>
        </div>
        <div class="searchBtn"></div>
      </div>
    </header>
</template>
<script>
export default {
    
}
</script>
<style>
/* header-search */
header {
  position: fixed;
  left: 0;
  top: 0;
  background-color: #e70002;
  background: linear-gradient(to bottom, #fe2828 0%, #e60000 100%);
  width: 100%;
  height: 0.9rem;
  z-index: 900;
}
.search {
  height: 0.9rem;
  position: relative;
  width: 100%;
  overflow: hidden;
}

.search h1 {
  position: absolute;
  left: 0;
  top: 0;
  height: 0.6rem;
  margin-top: 0.14rem;
}

.search h1 img {
  width: 1.84rem;
}

img {
  border: none;
  vertical-align: top;
  font-size: 12px;
}
.searchInput {
  height: 0.6rem;
  border-radius: 0.6rem;
  line-height: 0.6rem;
  background: #fff;
  margin: 0.15rem 0.66rem 0 1.94rem;
}
.searchInput span {
  color: #8e8e8e;
  font-size: 0.24rem;
  display: block;
  text-indent: 0.2rem;
  height: 0.6rem;
}
.search .searchBtn {
  position: absolute;
  right: 0;
  top: 0;
  width: 0.6rem;
  height: 0.88rem;
  text-indent: -999px;
  overflow: hidden;
  font-size: 0;
  background: url(../assets/imgs/home/search.png) no-repeat center;
  background-size: 0.34rem 0.34rem;
}
</style>
