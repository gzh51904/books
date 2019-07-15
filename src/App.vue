<template>
  <div class="app">
    <transition enter-active-class="fadeIn animated" mode="out-in">
      <router-view></router-view>
    </transition>

    <!-- 底部菜单 -->
    <mt-tabbar v-model="selected" @click.native="goto(selected)" v-show="menuShow">
      <mt-tab-item
        :id="item.path"
        v-for="item in pages"
        :key="item.name"
        :class="{fontRedColor:item.path == selected}"
      >
        <img :src="item.img1" slot="icon" v-if="item.path == selected" />
        <img :src="item.img" slot="icon" v-else />
        {{item.title}}
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
import Vue from "vue";
import "animate.css";
import MintUI from "mint-ui";
import "mint-ui/lib/style.css";
Vue.use(MintUI);

import { mapState, mapMutations } from "vuex";

export default {
  name: "app",
  data() {
    return {
      pages: [
        {
          title: "首页",
          path: "/home",
          name: "Home",
          img: require("./assets/imgs/icon/blackhome.png"),
          img1: require("./assets/imgs/icon/home.png")
        },
        {
          title: "分类",
          path: "/category",
          name: "Category",
          img: require("./assets/imgs/icon/kind.png"),
          img1: require("./assets/imgs/icon/kind1.png")
        },
        {
          title: "客服",
          path: "/service",
          name: "Service",
          img: require("./assets/imgs/icon/service.png")
        },
        {
          title: "购物车",
          path: "/cart",
          name: "Cart",
          img: require("./assets/imgs/icon/cart.png")
        },
        {
          title: "我的",
          path: "/mine",
          name: "Mine",
          img: require("./assets/imgs/icon/redcapationl1.png"),
          img1: require("./assets/imgs/icon/redcapationl1.png")
        }
      ],
      selected: "/home"
    };
  },
  computed: {
    ...mapState({
      menuShow(state) {
        let te = "/" + window.location.hash.slice(1).split("/")[1];
        if (te) {
          this.selected = te;
        }
        return state.common.menuShow;
      }
    })
  },
  methods: {
    ...mapMutations(["changeMenuShow"]),
    goto(selected) {
      if (selected != "/home" && selected != "/category") {
        this.changeMenuShow(false);
      }
      this.$router.push({ path: this.selected });
    }
  },
  destroyed(){
    this.changeMenuShow(true);
  },
  created() {
    let te = "/" + window.location.hash.slice(1).split("/")[1];
    if (te) {
      this.selected = te;
    }

    if (sessionStorage.getItem("store")) {
      this.$store.replaceState(
        Object.assign(
          {},
          this.$store.state,
          JSON.parse(sessionStorage.getItem("store"))
        )
      );
    }

    //在页面刷新时将vuex里的信息保存到sessionStorage里
    window.addEventListener("beforeunload", () => {
      sessionStorage.setItem("store", JSON.stringify(this.$store.state));
    });
  }
};
</script>

<style>
html {
  font-size: 100px;
}
@media all and (max-width: 640px) {
  html {
    font-size: 100px;
  }
}
@media all and (max-width: 624px) {
  html {
    font-size: 97.5px;
  }
}
@media all and (max-width: 608px) {
  html {
    font-size: 95px;
  }
}
@media all and (max-width: 592px) {
  html {
    font-size: 92.5px;
  }
}
@media all and (max-width: 576px) {
  html {
    font-size: 90px;
  }
}

@media all and (max-width: 560px) {
  html {
    font-size: 87.5px;
  }
}
@media all and (max-width: 544px) {
  html {
    font-size: 85px;
  }
}
@media all and (max-width: 528px) {
  html {
    font-size: 82.5px;
  }
}
@media all and (max-width: 512px) {
  html {
    font-size: 80px;
  }
}
@media all and (max-width: 496px) {
  html {
    font-size: 77.5px;
  }
}

@media all and (max-width: 480px) {
  html {
    font-size: 75px;
  }
}

@media all and (max-width: 464px) {
  html {
    font-size: 72.5px;
  }
}
@media all and (max-width: 448px) {
  html {
    font-size: 70px;
  }
}
@media all and (max-width: 432px) {
  html {
    font-size: 67.5px;
  }
}
@media all and (max-width: 416px) {
  html {
    font-size: 65px;
  }
}
@media all and (max-width: 400px) {
  html {
    font-size: 62.5px;
  }
}
@media all and (max-width: 384px) {
  html {
    font-size: 60px;
  }
}

* {
  margin: 0px;
  padding: 0px;
}
body {
  max-width: 640px;
  margin: 0 auto;
  background: #f3f3f3;
  font-size: 16px;
}
ul,
li {
  list-style: none;
}

.mint-tabbar {
  height: 0.88rem;
  position: fixed;
  bottom: 0;
  z-index: 100;
}
.mint-tabbar a {
  color: #333333;
  font-size: 0.22rem;
  display: block;
  height: 0.88rem;
}
.mint-tab-item-icon {
  width: 0.36rem;
  margin: auto;
  margin-top: 0.03rem;
  height: 0.36rem;
}
.mint-tab-item-label {
  text-align: center;
  line-height: 0.5rem;
  font-size: 0.22rem;
}
.fontRedColor {
  color: red !important;
}
</style>
