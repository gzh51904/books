<template>
  <el-container>
    <el-aside>
      <el-menu :default-active="active1" @select="handleSelect">
        <el-menu-item
          v-for="item in cat"
          :key="item.name"
          @click="goto(item.name)"
          :index="item.path"
        >
          <i :class="item.icon"></i>
          <span slot="title">{{item.title}}</span>
        </el-menu-item>
      </el-menu>
    </el-aside>
    <el-container>
      <el-header>
        <el-breadcrumb separator=">" class="mianbao">
          <el-breadcrumb-item @click.native="fx" :to="{path:'/discover'}">发现</el-breadcrumb-item>
          <el-breadcrumb-item>xxx</el-breadcrumb-item>
        </el-breadcrumb>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
export default {
  data() {
    return {
      cat: [
        {
          title: "手机",
          name: "Phone",
          icon: "el-icon-mobile-phone"
        },
        {
          title: "电脑",
          name: "Computer",
          icon: "el-icon-s-platform"
        },
        {
          title: "平板",
          name: "Tablet",
          icon: "el-icon-reading"
        },
        {
          title: "配件",
          name: "Acc",
          icon: "el-icon-bangzhu"
        }
      ],
    };
  },
  computed: {
    active1(){
      let temp = this.$store.state.common.appActive.split("/")[2];
      if(!temp){
        temp = 'phone';
      }
      let current = "/"+this.$store.state.common.appActive.split("/")[1]+"/"+temp;
      return current;  
    }
  },
  methods: {
    handleSelect(index, indexPath) {
      this.$store.commit("changeAppActive",index);    
    },
    goto(name) {
      this.$router.push({ name });
    },
  },
  created() {
    let baseUrl = "/discover";
    this.cat = this.cat.map(item => {
      return {
        ...item,
        path: baseUrl + "/" + item.name.toLowerCase()
      };
    });
  },
};
</script>
<style>
.mianbao {
  margin-top: 30px !important;
}
.el-breadcrumb-item .el-breadcrumb__inner{
  cursor:pointer !important;
}
</style>
