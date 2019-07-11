<template>
  <div class="hotList">
    <div class="hTitle">
      <img src="../assets/imgs/home/changxiaobangtitle.png" />
    </div>
    <div class="hotNavBar" ref="hotNavBar">
      <ul>
        <li
          v-for="item in sortList"
          :key="item"
          :class="{cur:item==selected}"
          @click="changeNav(item)"
        >
          <span>{{item}}</span>
        </li>
      </ul>
    </div>

    <!-- tab-container -->
    <mt-tab-container v-model="selected">
      <mt-tab-container-item :id="item" v-for="item in sortList" :key="item">
        <div class="booksList">
          <ul
            v-infinite-scroll="loadMore"
            infinite-scroll-disabled="loading"
            infinite-scroll-distance="300"
          >
            <li v-for="(ele,idx) in currentBooksList" :key="idx">
              <div class="bookWrap">
                <div class="cover">
                  <img src="http://image31.bookschina.com/2019/zuo/7/s8041724.jpg" alt="ele.name" />
                </div>
                <p class="name">{{ele.name}}</p>
                <div class="priceWrap">
                  <span class="price">¥{{ele.price}}</span>
                  <span class="original">¥{{ele.originalPrice}}</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div class="more">
          <a href="#">进入畅销榜 &gt;&gt;</a>
        </div>
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      sortList: ["总榜", "文学", "社科", "少儿", "艺术", "生活", "文教"],
      selected: "总榜",
      booksList: [
        {
          name: "月亮与六便士",
          img: require("../assets/imgs/icon/service.png"),
          price: 16.0,
          originalPrice: 42.0,
          category: "总榜"
        },
        {
          name: "乌合之众",
          img: require("../assets/imgs/icon/service.png"),
          price: 16.0,
          originalPrice: 42.0,
          category: "总榜"
        },
        {
          name: "行者无疆",
          img: require("../assets/imgs/icon/service.png"),
          price: 16.0,
          originalPrice: 42.0,
          category: "总榜"
        },
        {
          name: "月亮与六便士",
          img: require("../assets/imgs/icon/service.png"),
          price: 16.0,
          originalPrice: 42.0,
          category: "总榜"
        },
        {
          name: "无影灯:渡边淳一自选集无影灯:渡边淳一自选集",
          img: require("../assets/imgs/icon/service.png"),
          price: 16.0,
          originalPrice: 42.0,
          category: "文学"
        },
        {
          name: "人间失格",
          img: require("../assets/imgs/icon/service.png"),
          price: 16.0,
          originalPrice: 42.0,
          category: "文学"
        },
        {
          name: "月亮与六便士",
          img: require("../assets/imgs/icon/service.png"),
          price: 16.0,
          originalPrice: 42.0,
          category: "文学"
        },
        {
          name: "月亮与六便士",
          img: require("../assets/imgs/icon/service.png"),
          price: 16.0,
          originalPrice: 42.0,
          category: "文学"
        },
        {
          name: "无影灯:渡边淳一自选集无影灯:渡边淳一自选集",
          img: require("../assets/imgs/icon/service.png"),
          price: 16.0,
          originalPrice: 42.0,
          category: "文学"
        },
        {
          name: "无影灯:渡边淳一自选集无影灯:渡边淳一自选集",
          img: require("../assets/imgs/icon/service.png"),
          price: 16.0,
          originalPrice: 42.0,
          category: "文学"
        },
        {
          name: "无影灯:渡边淳一自选集无影灯:渡边淳一自选集",
          img: require("../assets/imgs/icon/service.png"),
          price: 16.0,
          originalPrice: 42.0,
          category: "文学"
        }
      ],
      numbers: 4,
      loading: false
    };
  },
  computed: {
    currentBooksList() {
      let temp = [];
      if (this.selected == "总榜") {
        return this.booksList.slice(0, this.numbers);
      } else {
        return this.booksList
          .filter(item => item.category == this.selected)
          .slice(0, this.numbers);
      }
    }
  },
  created() {
  },
  methods: {
    changeNav(item) {
      this.selected = item;
      //重置初始显示数量
      this.numbers = 4;
    },
    //加载更多书
    loadMore() {
      this.loading = true;
      setTimeout(() => {
        this.numbers = this.numbers + 4;
        this.loading = false;
      }, 2000);
    }
  }
};
</script>
<style scoped>
.hotList {
  margin-top: 0.16rem;

}
.hotList .hTitle {
  text-align: center;
  background: #fff;
  box-shadow: 0px 1px 0.1rem #dddcdd;
  line-height: 0.68rem;
  box-sizing: border-box;
}
.hTitle img {
  width: 2.5rem;
  padding: 0.2rem 0 0.24rem;
}
.hotNavBar {
  height: 0.74rem;
  margin-top: 0.1rem;
  box-shadow: 0px 1px 2px #dddcdd;
  overflow: hidden;
}
.hotNavBar ul {
  display: flex;
  text-align: center;
  overflow: auto;
  background: #fff;
  width: 100%;
  height: 0.84rem;
}
.hotNavBar ul li {
  width: 125.5px;
  flex-shrink: 0;
  cursor: pointer;
  text-align: center;
  height: 0.74rem;
}
.hotNavBar ul li.cur span {
  color: #e60000;
  border-top: solid #e60000 0.06rem;
}

.hotNavBar ul li span {
  font-size: 0.22rem;
  color: #666666;
  display: block;
  border-top: solid #fff 0.06rem;
  height: 0.74rem;
  line-height: 0.68rem;
  border-right: 1px solid #e5e5e5;
}
.booksList {
  margin-top: 1px;
}
.booksList ul {
  display: flex;
  flex-wrap: wrap;
}
.booksList ul li {
  width: 50%;
}
.booksList ul li .name {
  color: #000;
  font-size: 0.22rem;
  line-height: 0.3rem;
  margin-top: 0.12rem;
  padding: 0 0.15rem 0 0.2rem;
  height: 0.6rem;
  text-overflow: ellipsis;
  overflow: hidden;
  -webkit-line-clamp: 2;
  display: -webkit-box;
  -webkit-box-orient: vertical;
}
.hotList .more {
  text-align: center;
  height: 0.8rem;
  line-height: 0.8rem;
}
.hotList .more a {
    font-size: 0.24rem;
    color: #8e8e8e;
    display: block;
}
.hotList .fixed {
  position: fixed;
  top: 0;
  width: 100vw;
  margin-top: 0;
  z-index: 999;
  left:0;
}
</style>