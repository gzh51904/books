<template>
  <div class="app">
    <!-- <el-row>
      <el-col :span="18">
        <el-menu
          :default-active="active"
          mode="horizontal"
          @select="handleSelect"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#58bc58"
          router
        >
          <el-menu-item
            v-for="(item,idx) in pages"
            :key="item.name"
            :index="item.path"
            class="item-left"
          >
            <el-badge :value="cartlen" class="item" v-if="item.name=='Cart' && log">{{item.title}}</el-badge>
            <template v-else>{{item.title}}</template>
            <el-divider direction="vertical" v-if="!(idx == (pages.length-1))"></el-divider>
          </el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="6" v-if="!log">
        <el-link type="success" :underline="false" @click="goto('Login')">登录</el-link>
        <el-link type="success" :underline="false" @click="goto('Reg')">注册</el-link>
      </el-col>
      <el-col :span="6" v-else>
        <el-link type="success" :underline="false" @click="logout">退出</el-link>
      </el-col>
    </el-row>-->
    <transition enter-active-class="fadeIn animated" mode="out-in">
      <router-view></router-view>
    </transition>

    <!-- 底部菜单 -->
    <mt-tabbar v-model="selected">
      <mt-tab-item :id="item.title" v-for="item in pages" :key="item.name" :class="{fontRedColor:item.title == selected}">
        <img :src="item.img1" slot="icon" v-if="item.title == selected" />
        <img :src="item.img" slot="icon" v-else />
        {{item.title}}
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
import Vue from "vue";

import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI);

import MintUI from "mint-ui";
import "mint-ui/lib/style.css";
Vue.use(MintUI);

import "animate.css";

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
          path: "/discover",
          name: "Discover",
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
      selected: "首页"
    };
  },
  computed: {
    cartlen() {
      return this.$store.state.cart.goodslist.reduce((pre, item) => {
        return pre + item.qty;
      }, 0);
    },
    log() {
      return this.$store.state.common.logined;
    },
    active() {
      return "/" + this.$store.state.common.appActive.split("/")[1];
    }
  },
  methods: {
    goto(name) {
      this.$router.push({
        name
      });
    },
    logout() {
      this.$store.commit("changeLog", false);
      localStorage.removeItem("Authorization");
      this.$axios.get("/verify");
    }
  },
  created() {
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
* {
  margin: 0px;
  padding: 0px;
}
html{
  font-size: 100px;
}
.mint-tabbar{
  height:0.55rem;
}
.fontRedColor{
  color:red !important;
}

</style>
