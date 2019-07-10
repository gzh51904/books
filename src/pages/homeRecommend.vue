<template>
    <!-- 推荐书单 -->
    <div class="recommendWrap">
      <div class="recommendTit">
        <h2>
          <img src="../assets/imgs/home/recomandtitle.png" alt="推荐书单" />
        </h2>
      </div>
      <div class="recommenList">
        <div class="recommenLeft">
          <a href="http://m.bookschina.com/subject/190321mg.html">
            <img src="http://image31.bookschina.com/pro-images/190321mg/305417.jpg?id=2" />
          </a>
        </div>
        <div class="recommenright">
          <a href="http://m.bookschina.com/subject/190327ms.html">
            <img
              src="http://image31.bookschina.com/pro-images/190327ms/305197.jpg?id=2"
              alt="名社佳作钜惠低折|专题内折上7折"
            />
          </a>
          <a href="http://m.bookschina.com/subject/190318ora.html">
            <img src="http://image31.bookschina.com/pro-images/190318ora/305197.jpg" alt="甲骨文丛书" />
          </a>
        </div>
      </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style>
/* 推荐书单 */
.recommendWrap {
    margin-top: 0.16rem;
}

.recommendTit h2 img {
    width: 2.3rem;
}
.recommenList {
    overflow: hidden;
    padding: 0.1rem 0.05rem;
    background: #fff;
}
.recommenList .recommenLeft {
    float: left;
    width: 50%;
    padding: 0 0.05rem;
    box-sizing: border-box;
}
.recommenList img {
    width: 100%;
}
.recommenList .recommenright {
    overflow: hidden;
    float: right;
    width: 50%;
    padding: 0 0.05rem;
    box-sizing: border-box;
}
.recommenList .recommenright a {
    float: left;
    width: 100%;
    margin-bottom: 0.1rem;
}
</style>
