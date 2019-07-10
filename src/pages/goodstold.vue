<template>
   <div class="BookComment" id="comment">
            <div class="commentTit">
                    <b>商品评论</b><span>（3条）</span>            </div>
        <div class="commentContent">
                <div class="commentItem">
                    <div class="ItemTit">
                        <div class="userInfor"><a href="/review/otherreview?accountid=E7AD96E0AEC7F2CB"><span class="userName">hed***</span></a><span class="userLeave">（三星用户）</span></div>
                        <div class="startWrap"><span class="full"></span><span class="full"></span><span class="full"></span><span class="full"></span><span class="empty"></span></div>
                    </div>
                    <div class="userComment">
                        <p><b>冲着施定柔买的</b></p>
                        <p>其他地方没得买。</p>
                    </div>
                    <div class="commentFoot">
                        <div class="commentTime">
                            <span>2015-02-27 23:48:28</span>
                        </div>
                        <div class="commentOparate" data-rid="396986" data-bid="1294266">
                            <span class="supportBtn">0</span>
                            <span class="oppositionBtn">0</span>
                        </div>
                    </div>


                </div>
                <div class="commentItem">
                    <div class="ItemTit">
                        <div class="userInfor"><a href="/review/otherreview?accountid=24A9C96BA2A4114D"><span class="userName">jch***</span></a><span class="userLeave">（三星用户）</span></div>
                        <div class="startWrap"><span class="full"></span><span class="full"></span><span class="full"></span><span class="full"></span><span class="full"></span></div>
                    </div>
                    <div class="userComment">
                        <p><b>这是定柔三迷的第二本，收藏</b></p>
                        <p>《迷行记》是施定柔所著的迷情江湖系列三种的第二种，即定柔三迷之二，前接《迷侠记》，后续《迷神记》。实体书是作者网络版小说的修订版，喜欢大陆新武侠的读者可以阅读收藏。2005年出版的书，快10年了，品相不错，95品上吧，价格也较便宜，满意。</p>
                    </div>
                    <div class="commentFoot">
                        <div class="commentTime">
                            <span>2014-11-06 11:36:55</span>
                        </div>
                        <div class="commentOparate" data-rid="362067" data-bid="1294266">
                            <span class="supportBtn">0</span>
                            <span class="oppositionBtn">0</span>
                        </div>
                    </div>


                </div>
        </div>
                <div class="commentLink">
                    <a href="/review/1294266">查看全部评论</a>
                </div>
                                <!--买过本商品的人还买了-->
                    <div class="otherBuy">
                        <div class="tit">
                            买过本商品的人还买了
                        </div>
                        <div id="otherBuyBook" style="touch-action: pan-y pinch-zoom;">
                            <div id="scroller" style="transition-timing-function: cubic-bezier(0.1, 0.57, 0.1, 1); transition-duration: 0ms; transform: translate(0px, 0px) translateZ(0px);">
                                <ul>
                                        <li>
                                            <a href="/4471424.htm">
                                                <div class="bookWrap">
                                                    <div class="cover">
                                                        <img src="http://image31.bookschina.com/2010/20100207/s4471424.jpg" alt="画商:Ⅱ:决天下" class="">
                                                    </div>
                                                    <p class="name">画商:Ⅱ:决天下</p>
                                                    <p class="author">聂昱冰</p>
                                                    <div class="priceWrap"><span class="price">¥12.5</span><span class="original">¥24.0</span></div>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/4471424.htm">
                                                <div class="bookWrap">
                                                    <div class="cover">
                                                        <img src="http://image31.bookschina.com/2010/20100207/s4471424.jpg" alt="画商:Ⅱ:决天下" class="">
                                                    </div>
                                                    <p class="name">画商:Ⅱ:决天下</p>
                                                    <p class="author">聂昱冰</p>
                                                    <div class="priceWrap"><span class="price">¥12.5</span><span class="original">¥24.0</span></div>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/4471424.htm">
                                                <div class="bookWrap">
                                                    <div class="cover">
                                                        <img src="http://image31.bookschina.com/2010/20100207/s4471424.jpg" alt="画商:Ⅱ:决天下" class="">
                                                    </div>
                                                    <p class="name">画商:Ⅱ:决天下</p>
                                                    <p class="author">聂昱冰</p>
                                                    <div class="priceWrap"><span class="price">¥12.5</span><span class="original">¥24.0</span></div>
                                                </div>
                                            </a>
                                        </li>
                                </ul>
                            </div>
                        </div>
                    </div>

        </div> 
</template>
<script>
export default {
    
}
</script>
<style>
.BookComment {
    margin-top: 0.16rem;
    background: #fff;
}  
.commentTit {
    position: relative;
}
.BookComment .commentTit {
    box-shadow: 0px 0px 10px #dddcdd;
    height: 0.7rem;
    line-height: 0.68rem;
    overflow: hidden;
    padding: 0 0.2rem;
}
.commentTit b {
    color: #333333;
    font-size: 0.26rem;
    float: left;
    height: 0.68rem;
}
.BookComment .commentTit span {
    font-size: 0.26rem;
    color: #e60000;
    margin-left: 0.13rem;
    height: 0.68rem;
    float: left;
}
.commentContent {
    padding: 0 0.2rem;
}
.BookComment .commentContent .commentItem {
    border-bottom: 2px solid #f3f3f3;
}
.BookComment .commentContent .commentItem .ItemTit {
    overflow: hidden;
    margin-top: 0.15rem;
}
.BookComment .commentContent .commentItem .userInfor {
    float: left;
    overflow: hidden;
    line-height: 0.3rem;
}
.BookComment .commentContent .commentItem .userInfor .userName {
    float: left;
    font-size: 0.2rem;
    color: #666666;
}
.BookComment .commentContent .commentItem .userInfor .userLeave {
    float: left;
    font-size: 0.2rem;
    color: #e60000;
    margin-left: 0.1rem;
}
.BookComment .commentContent .commentItem .startWrap {
    overflow: hidden;
    line-height: 0.2rem;
    margin-top: 0.05rem;
    float: right;
}
.BookComment .commentContent .commentItem .startWrap span.full {
    background-image: url(http://m.bookschina.com/Content/images/full.png);
    background-size: 0.2rem 0.2rem;
}
.BookComment .commentContent .commentItem .startWrap span {
    float: left;
    height: 0.2rem;
    width: 0.2rem;
    margin: 0 0 0 0.05rem;
}
.BookComment .commentContent .commentItem .startWrap span.empty {
    background-image: url(http://m.bookschina.com/Content/images/empty.png);
    background-size: 0.2rem 0.2rem;
}
.BookComment .commentContent .commentItem .userComment p {
    line-height: 0.34rem;
    color: #333333;
    font-size: 0.22rem;
    overflow: hidden;
}
.BookComment .commentContent .commentItem .userComment b {
    font-weight: bold;
    font-size: 0.24rem;
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin: 0.08rem 1.5rem 0.08rem 0;
}
.BookComment .commentFoot {
    overflow: hidden;
    line-height: 0.32rem;
    margin-top: 0.2rem;
    padding-bottom: 0.1rem;
}
.BookComment .commentFoot .commentTime {
    float: left;
}
.BookComment .commentFoot .commentTime span {
    display: block;
    color: #666666;
    font-size: 0.18rem;
}
.BookComment .commentFoot .commentOparate {
    float: right;
    overflow: hidden;
}
.BookComment .commentFoot .commentOparate span.supportBtn {
    background: url(http://m.bookschina.com/Content/images/supportBtn.png) no-repeat left;
    background-size: 0.22rem;
}
.BookComment .commentFoot .commentOparate span {
    cursor: pointer;
    float: left;
    color: #999999;
    font-size: 0.22rem;
    width: 0.65rem;
    padding-left: 0.34rem;
}
.BookComment .commentContent .commentItem {
    border-bottom: 2px solid #f3f3f3;
}
.BookComment .commentContent .commentItem .ItemTit {
    overflow: hidden;
    margin-top: 0.15rem;
}
.BookComment .commentLink {
    overflow: hidden;
    background: #fff;
    /* padding: 0.2rem 0.2rem 0.22rem; */
    padding: 0.2rem 0.2rem 0.16rem;
}
.BookComment .commentLink a {
    display: block;
    border: 1px solid #999999;
    text-align: center;
    height: 0.44rem;
    line-height: 0.42rem;
    color: #666666;
    font-size: 0.24rem;
    width: 60%;
    margin: auto;
    border-radius: 0.05rem;
}
.otherBuy {
    overflow: hidden;
}
.otherBuy .tit {
    padding: 0 0.2rem;
    height: 0.68rem;
    line-height: 0.68rem;
    font-size: 0.26rem;
    color: #333333;
    background: #f3f3f3;
}
#otherBuyBook {
    position: relative;
    z-index: 1;
    height: 3.66rem;
    width: 100%;
    overflow: hidden;
}
#scroller {
    position: absolute;
    z-index: 1;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    height: 160px;
    -webkit-transform: translateZ(0);
    -moz-transform: translateZ(0);
    -ms-transform: translateZ(0);
    -o-transform: translateZ(0);
    transform: translateZ(0);
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-text-size-adjust: none;
    -moz-text-size-adjust: none;
    -ms-text-size-adjust: none;
    -o-text-size-adjust: none;
    text-size-adjust: none;
}
.otherBuy ul li {
    float: left;
    width:26%;
    padding-bottom: 0.17rem;
    margin-left: 0.40rem;
}
.otherBuy ul li .cover {
    text-align: center;
    border: 1px solid #fdf1f1;
    width: 25%;
    margin: auto;
    margin: 0.3rem 0 0 0;
}
.otherBuy ul li .name {
    color: #000;
    font-size: 0.22rem;
    line-height: 0.3rem;
    margin-top: 0.12rem;
    height: 0.3rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.otherBuy ul li .author {
    color: #666666;
    font-size: 0.2rem;
    line-height: 0.3rem;
    height: 0.3rem;
    margin-top: 0.08rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.otherBuy ul li .priceWrap {
    overflow: hidden;
    line-height: 0.3rem;
    margin-top: 0.07rem;
}
.otherBuy ul li .priceWrap .price {
    float: left;
    color: #e60000;
    font-size: 0.24rem;
}
.otherBuy ul li .priceWrap .original {
    float: left;
    color: #999999;
    font-size: 0.22rem;
    margin-left: 0.14rem;
    text-decoration: line-through;
}

</style>