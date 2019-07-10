<template>
  <div class="goodsbotton">
    <div class="footer">
      <div class="footerInner">
        <div class="btn_bar">
          <div class="iconBtn" id="customerService">
            <div class="iconBtnInner">
              <i class="icon"></i>
              <span class="txt">客服</span>
            </div>
          </div>
          <div class="iconBtn" id="collection" data-bookid="1294266">
            <div class="iconBtnInner">
              <i class="icon"></i>
              <span class="txt">收藏</span>
            </div>
          </div>
          <div class="iconBtn" id="gotoCart" onclick="window.location = '/shopcar'">
            <div class="iconBtnInner" style="border:none">
              <span class="add_num" id="popone" style>0</span>
              <i class="icon"></i>
              <span class="txt">购物车</span>
            </div>
          </div>
        </div>
        <div class="btn_group">
          <div class="de_row">
            <div class="btn btn_red" id="addCart" data-bookid="1294266">
              <span class="txt">加入购物车</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="backTop" style="display: block;">
        <a href="javascript:scrollTo(0,0)"></a>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style>
.footer {
    position: fixed;
    left: 0;
    bottom: 0;
    height: 0.88rem;
    box-shadow: -1px -1px 10px #d8d8d8;
    z-index: 900;
    background: #fff;
    width: 100%;
}
.footer .footerInner {
    position: relative;
    padding-left: 3.28rem;
    font-size: 12px;
    background: #fff;
}
.footer .btn_bar {
    position: absolute;
    width: 3.28rem;
    left: 0;
    top: 0;
    overflow: hidden;
}
.footer .btn_bar .iconBtn {
    width: 33.33333%;
    height: 0.88rem;
    float: left;
    text-align: center;
    cursor: pointer;
}
.footer .btn_bar .iconBtn .iconBtnInner {
    border-right: 2px solid #f3f3f3;
    height: 0.88rem;
    overflow: hidden;
    position: relative;
}
.footer .btn_bar #customerService .icon {
    background: url(http://m.bookschina.com/Content/images/cumthor.png) no-repeat center;
    background-size: cover;
}
.footer .btn_bar #collection .icon {
    background: url(http://m.bookschina.com/Content/images/nocollection.png) no-repeat center;
    background-size: cover;
}
.footer .btn_bar #gotoCart .icon {
    background: url(http://m.bookschina.com/Content/images/gotocar.png) no-repeat center;
    background-size: cover;
}
.footer .btn_bar .iconBtn .iconBtnInner .add_num {
    position: absolute;
    font-size: 12px;
    text-align: center;
    min-width: 0.25rem;
    height: 0.25rem;
    line-height: 0.25rem;
    color: #fff;
    border-radius: 0.2rem;
    background: #e60000;
    left: 50%;
    top: 0.1rem;
}
.footer .btn_bar .iconBtn .icon {
    height: 0.36rem;
    width: 0.36rem;
    margin: 0.12rem auto 0;
    display: block;
}
.footer .btn_bar .iconBtn .txt {
    text-align: center;
    color: #666666;
    font-size: 0.22rem;
}
.footer .btn_group {
    width: 100%;
    height: 0.88rem;
    line-height: 0.88rem;
    text-align: center;
}
.footer .btn_group .btn_red {
    background: #e60000;
}
.footer .btn_group span {
    font-size: 0.3rem;
    color: #fff;
}
.backTop {
    display: none;
    position: fixed;
    bottom: 1.1rem;
    right: 0;
    border-radius: 0.05rem 0 0 0.05rem;
    background: rgba(0,0,0,0.7) url(http://m.bookschina.com/Content/images/sidebarbacktop.png) no-repeat center;
    background-size: 0.23rem 0.33rem;
    z-index: 999;
}
.backTop a {
    display: block;
    height: 0.7rem;
    width: 0.9rem;
}






</style>


