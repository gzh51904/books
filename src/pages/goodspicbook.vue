<template>
<div class="goodspicbook listshow">
   <div class="bookProduct" id="book">
            <div class="bookCover">
                <div class="bookPic">
                    <img src="http://image31.bookschina.com/2005/051205/1294266.JPG" alt="迷行记" id="imgBook">
                </div>
                    <div class="rederScore"> <div class="rederScoreInner"><span>  读者评分<br>4.7分</span> </div></div>
            </div>
            <div class="bookInfor">
                <h1>迷行记</h1>
                    <p>迷情江湖·定柔三迷</p>
            </div>
            <div class="bookPrice">

                <div class="salePrice" id="divPrice">
                    <span class="urerLeave">1星价</span>
                            <span class="price">¥10.4</span>
                            <span class="discount">(5.2折)</span>
                </div>
                <div class="otherPrice">
                            <span class="startPrice">
                                2星价￥10.4
                            </span>
                    <span class="originalPrice">
                        定价￥20.0
                    </span>
                </div>
            </div>

            <div class="activeList">

            </div>
            <div class="inforLInk">
                <div class="inforLinkItem" id="lblAuthor">
                    <a href="/Books/Search?stp=%e6%96%bd%e5%ae%9a%e6%9f%94">作者：施定柔</a>
                </div>
                <div class="inforLinkItem" id="divPublish">
                        <a href="/publish/5054/">出版社：朝华出版社<span class="arrowIcon"></span></a>
                </div>
                            <div class="inforLinkItem">
                                <a href="/24hour/54000000/">本类榜单：小说<span class="arrowIcon"></span></a>
                            </div>

                        <div class="seriesBook">
                            <span>所属丛书：</span>
                                    <a href="/congshu/47986">迷情江湖·定柔三迷</a>
                        </div>

                    <div class="inforLinkItem">
                        <a href="/kinder/54260000">分类：小说  &gt; 武侠  </a><span class="arrowIcon"></span>
                    </div>
            </div>

            <div class="service">
                <ul>
                    <li>正版好图书</li>
                    <li>全场满69包邮</li>
                    <li>特价书1折起</li>
                </ul>
            </div>
        </div>
        </div> 
</template>
<script>
export default {
    
}
</script>
<style>
.bookCover {
    position: relative;
    padding: 0.3rem 0;
    background: #fff;
    margin-top:0.88rem;
}
.bookCover .bookPic {
    border: 1px solid #fef0f0;
    text-align: center;
    width: 3.52rem;
    margin: auto;
    position: relative;
}
.bookCover .bookPic img {
    max-width: 100%;
    height: 3.5rem;
}
img {
    border: none;
    vertical-align: top;
    font-size: 12px;
}
.bookCover .rederScore {
    position: absolute;
    right: 0;
    bottom: 0.3rem;
    height: 0.68rem;
    border: 2px solid #ff551e;
    border-right: none;
    border-radius: 0.64rem 0 0 0.64rem;
    display: table;
    padding: 0 0.2rem;
}
.bookCover .rederScoreInner {
    display: table-cell;
    vertical-align: middle;
    text-align: center;
    line-height: 0.3rem;
}
.bookCover .rederScoreInner span {
    font-size: 0.2rem;
    color: #ff551e;
    display: block;
}
.bookInfor {
    padding: 0.25rem 0.2rem 0;
    background: #fff;
}
.bookInfor h1 {
    font-size: 0.28rem;
    line-height: 0.38rem;
    color: #000;
}
.bookInfor p {
    margin-top: 0.1rem;
    color: #333333;
    font-size: 0.2rem;
    line-height: 0.3rem;
}
.bookPrice {
    overflow: hidden;
    background: #fff;
    padding: 0.15rem 0.2rem 0;
}
.bookPrice .salePrice {
    float: left;
    overflow: hidden;
    line-height: 0.4rem;
}
 .bookPrice .salePrice .urerLeave {
    font-size: 0.2rem;
    color: #e60000;
    margin: 0.02rem 0.06rem 0 0;
}
.bookPrice .salePrice span {
    float: left;
}
.bookPrice .salePrice .price {
    font-size: 0.3rem;
    color: #e60000;
    font-weight: bold;
}
.bookPrice .salePrice .discount {
    font-size: 0.2rem;
    color: #333333;
    margin: 0.02rem 0 0 0.15rem;
}
.bookPrice .otherPrice {
    float: right;
    overflow: hidden;
    line-height: 0.4rem;
}
.bookPrice .otherPrice .startPrice {
    float: left;
    color: #666666;
    font-size: 0.2rem;
    margin: 0.02rem 0.28rem 0 0;
}
.bookPrice .otherPrice .originalPrice {
    float: left;
    color: #666666;
    font-size: 0.2rem;
    margin: 0.02rem 0 0 0;
}
.activeList {
    overflow: hidden;
    padding: 0 0.2rem 0.2rem;
    background: #fff;
}
.inforLInk {
    padding: 0 0.2rem;
    background: #fff;
    /* margin-top: 0.16rem; */
}
.inforLInk .inforLinkItem {
    border-bottom: 0.02rem solid #f3f3f3;
    height: 0.7rem;
    line-height: 0.68rem;
    position: relative;
}
.inforLInk .inforLinkItem a {
    display: block;
    height: 0.68rem;
    color: #333;
    font-size: 0.22rem;
    background: url(http://m.bookschina.com/Content/images/rightarrow.png) no-repeat right;
    background-size: 0.16rem 0.28rem;
}
.bookInfor p {
    margin-top: 0.1rem;
    color: #333333;
    font-size: 0.2rem;
    line-height: 0.3rem;
}
 .bookPrice {
    overflow: hidden;
    background: #fff;
    padding: 0.15rem 0.2rem 0;
}
.bookPrice .salePrice {
    float: left;
    overflow: hidden;
    line-height: 0.4rem;
}
.bookPrice .salePrice .urerLeave {
    font-size: 0.2rem;
    color: #e60000;
    margin: 0.02rem 0.06rem 0 0;
}
.bookPrice .salePrice .price {
    font-size: 0.3rem;
    color: #e60000;
    font-weight: bold;
}
.bookPrice .salePrice .discount {
    font-size: 0.2rem;
    color: #333333;
    margin: 0.02rem 0 0 0.15rem;
}
.bookPrice .otherPrice {
    float: right;
    overflow: hidden;
    line-height: 0.4rem;
}
.bookPrice .otherPrice .startPrice {
    float: left;
    color: #666666;
    font-size: 0.2rem;
    margin: 0.02rem 0.28rem 0 0;
}
.bookPrice .otherPrice .originalPrice {
    float: left;
    color: #666666;
    font-size: 0.2rem;
    margin: 0.02rem 0 0 0;
}
.activeList {
    overflow: hidden;
    padding: 0 0.2rem 0.2rem;
    background: #fff;
}
.inforLInk {
    padding: 0 0.2rem;
    background: #fff;
    /* margin-top: 0.16rem; */
}
.inforLInk .inforLinkItem {
    border-bottom: 0.02rem solid #f3f3f3;
    height: 0.7rem;
    line-height: 0.68rem;
    position: relative;
}
.inforLInk .inforLinkItem a {
    display: block;
    height: 0.68rem;
    color: #333;
    font-size: 0.22rem;
    background: url(http://m.bookschina.com/Content/images/rightarrow.png) no-repeat right;
    background-size: 0.16rem 0.28rem;
}
.inforLInk .seriesBook {
    border-bottom: 0.02rem solid #f3f3f3;
    height: 0.7rem;
    line-height: 0.68rem;
    position: relative;
    font-size: 0.22rem;
    color: #333;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.inforLInk .inforLinkItem span {
    background: url(http://m.bookschina.com/Content/images/rightarrow.png) no-repeat center;
    background-size: 0.16rem 0.28rem;
    height: 0.68rem;
    width: 0.16rem;
    top: 0;
    right: 0.1rem;
    position: absolute;
    display: none;
}
.service {
    padding: 0 0.2rem;
}
.service ul {
    overflow: hidden;
}
.service ul li {
    height: 0.66rem;
    line-height: 0.66rem;
    float: left;
    font-size: 0.22rem;
    color: #333333;
    background: url(http://m.bookschina.com/Content/images/seviceIcon.png) no-repeat left;
    background-size: 0.26rem;
    padding-left: 0.42rem;
    margin-right: 0.2rem;
}
</style>


