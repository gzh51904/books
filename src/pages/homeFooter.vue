<template>
  <nav class="pagefoot">
    <div class="actions-wrap">
      <a href="#" @click.prevent="goto('Login')">登录</a>
      <a href="#" @click.prevent="goto('Reg')">注册</a>
    </div>

    <nav class="b-nav">
      <a class="red" href="#">触屏版</a>
      <a href="#">电脑版</a>
      <a href="#">帮助</a>
    </nav>
    <div class="copyRight">Copyright 中国图书网©2018 m.BooksChina.com</div>
  </nav>
</template>
<script>
export default {
  data(){
    return {}
  },
  methods: {
    goto(name){
      this.$router.push({name})
    }
  },
}
</script>
<style>
.pagefoot{
    background: #fff;
    margin-bottom:0.57rem;
}
.pagefoot .actions-wrap {
    text-align: center;
    line-height: 0;
    padding: 0.12rem 0;
    border-bottom: 1px solid #f3f3f3;
}
.pagefoot .actions-wrap a {
    display: inline-block;
    border: 1px solid #999999;
    height: 0.22rem;
    line-height: 0.22rem;
    color: #666666;
    font-size: 0.14rem;
    padding: 0 0.09rem;
    border-radius: 0.02rem;
    margin:0.09rem;
}
.pagefoot .b-nav {
    text-align: center;
    font-size: 0.07rem;
    color: #666666;
    line-height: 0.22rem;
}
.pagefoot .copyRight {
    font-size: 0.14rem;
    color: #8e8e8e;
    text-align: center;
    line-height: 0.3rem;
}
.pagefoot .b-nav a.red {
    color: #e60000;
}
.pagefoot .b-nav a {
    margin: 0 0.22rem;
    color: #666;
}
</style>

