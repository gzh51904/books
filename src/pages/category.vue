<template>
  <div>
    <searchheader></searchheader>
    <main>
      <nav>
        <ul>
          <li
            v-for="item in category"
            :key="item"
            :class="{active:item==selected}"
            @click="changeCategory(item)"
          >
            <span>{{item}}</span>
          </li>
        </ul>
      </nav>
      <div class="right-menu">
        <!-- 右侧轮播图 -->
        <mt-swipe :auto="4000">
          <mt-swipe-item v-for="(item,idx) in imglist" :key="idx">
            <img :src="item" alt />
          </mt-swipe-item>
        </mt-swipe>
        <div class="imgs-list">
          <img src="../assets/imgs/category/lei_cxb.png" alt />
          <img src="../assets/imgs/category/lei_xsj.png" alt />
        </div>

        <mt-tab-container v-model="selected">
          <mt-tab-container-item :id="item" v-for="item in category" :key="item">
            <dl v-for="(item,idx) in currentCateList" :key="idx">
              <dt>
                <img :src="item.img"/>
              </dt>
              <dd>{{item.name}}</dd>
            </dl>
          </mt-tab-container-item>
        </mt-tab-container>
      </div>
    </main>
  </div>
</template>
<script>
import searchheader from "./homeSearchHeader.vue";

export default {
  data() {
    return {
      category: [
        "小说",
        "文学",
        "少儿",
        "哲学/宗教",
        "传记",
        "社会科学",
        "文化",
        "政治军事",
        "中小学教辅",
        "成功/励志",
        "外语",
        "古籍",
        "管理",
        "医学",
        "经济",
        "艺术",
        "青春文学",
        "动漫/幽默"
      ],
      selected: "小说",
      imglist: [
        require("../assets/imgs/home/lb1.jpg"),
        require("../assets/imgs/home/lb2.jpg"),
        require("../assets/imgs/home/lb3.jpg"),
        require("../assets/imgs/home/lb4.jpg"),
        require("../assets/imgs/home/lb5.jpg"),
        require("../assets/imgs/home/lb6.jpg")
      ],
      minCateList: [
        {
          name: "戏剧",
          img: require("../assets/imgs/category/cate1.jpg"),
          parentCate:'文学',
        },
        {
          name: "诗歌",
          img: require("../assets/imgs/category/cate1.jpg"),
          parentCate:'文学',
        },
        {
          name: "古诗",
          img: require("../assets/imgs/category/cate1.jpg"),
          parentCate:'文学',
        },
        {
          name: "民间文学",
          img: require("../assets/imgs/category/cate1.jpg"),
          parentCate:'文学',
        },
        {
          name: "军事",
          img: require("../assets/imgs/category/cate1.jpg"),
          parentCate:'小说',
        },
        {
          name: "玄幻",
          img: require("../assets/imgs/category/cate1.jpg"),
          parentCate:'小说',
        },
        {
          name: "都市",
          img: require("../assets/imgs/category/cate1.jpg"),
          parentCate:'小说',
        },
        {
          name: "科幻",
          img: require("../assets/imgs/category/cate1.jpg"),
          parentCate:'小说',
        },
      ]
    };
  },
  computed: {
    currentCateList(){
      return this.minCateList.filter(item=>item.parentCate == this.selected);
    }
  },
  methods: {
    changeCategory(item) {
      this.selected = item;
    }
  },
  components: {
    searchheader
  }
};
</script>
<style>
main {
  position: absolute;
  left: 0;
  right: 0;
  top: 0.88rem;
  bottom: 0.88rem;
  display: flex;
  box-sizing: border-box;
  background: #fff;
}
main nav {
  flex: 0 0 1.5rem;
  width: 1.5rem;
  height: 100%;
  overflow: hidden;
  overflow-y: auto;
  box-sizing: border-box;
  background: #f3f3f3;
}

main nav li {
  padding: 0.17rem 0;
  line-height: 0.37rem;
  border-left: 0.03rem solid #f3f3f3;
  padding-left: 0.2rem;
  color: #333333;
  font-family: "Microsoft YaHei";
  font-size: 0.22rem;
}
main nav li.active {
  color: #e60000;
  border-left: 0.03rem solid #e60000;
  background: #fff;
}

.right-menu {
  flex: 1;
  height: 100%;
  overflow: hidden;
  overflow-y: auto;
}

/* 轮播图 */
.mint-swipe {
  height: 2.25rem;
  padding: 0.2rem 0.2rem 0;
}
.mint-swipe-item img {
  height: 2.25rem;
  width: 100%;
}
.mint-swipe-indicators {
  bottom: 0rem;
}
.mint-swipe-indicator {
  background: #fff;
}
.mint-swipe-indicator.is-active {
  background: #f00;
  opacity: 1;
}

.imgs-list {
  margin-top: 0.1rem;
}
.imgs-list img {
  width: 50%;
  padding: 0 0.12rem;
  box-sizing: border-box;
}

/* 小分类 */
.mint-tab-container-item{
  display:flex;
  flex-wrap: wrap;
}
.mint-tab-container-item dl{
    padding: 0 0.1rem;
    width: 33.3333%;
    text-align: center;
    margin-top: 0.25rem;
    box-sizing:border-box;
}
.mint-tab-container-item dl dt img{
  height:1.35rem;
}
.mint-tab-container-item dl dd {
  display: block;
    color: #333;
    font-size: 0.22rem;
    line-height: 0.32rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-top: 0.12rem;
}
</style>
