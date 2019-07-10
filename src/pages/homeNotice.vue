<template>
    <!-- 公告 -->
    <div class="notice">
      <dl class="txtMarquee-top">
        <dt>
          <img src="../assets/imgs/home/noticetitle.png" alt="中图公告" />
        </dt>
        <dd class="bd">
          <ul :style="{top:noticeTop+'rem'}" ref="oUl">
            <li v-for="item in noticeList" :key="item">
              <a href>{{item}}</a>
            </li>
          </ul>
        </dd>
      </dl>
    </div>
</template>
<script>
export default {
  data() {
    return {
        noticeList: [
        "小学生阅读会场，领券满100减50！",
        "每日签到抽红包！",
        "新用户注册即送5元!",
        "大学生阅读会场，领券满100减50！",
        "中学生阅读会场，领券满100减50！"
      ],
      noticeTop: 0,
      timer: "",
    }
  },
  mounted() {
    //notice的轮播
    let oUl = this.$refs.oUl;
    this.timer = setInterval(() => {
      oUl.style.transition = "top 1s";
      this.noticeTop -= 0.4;
      setTimeout(() => {
        if ((this.noticeTop = 0.4)) {
          oUl.style.transition = "";
          this.noticeTop = 0;
          let temp = this.noticeList.shift();
          this.noticeList.push(temp);
        }
      }, 1000);
    }, 2000);
  },
  methods: {},
  destroyed() {
    clearInterval(this.timer);
  },
};
</script>
<style>
a {
  text-decoration: none;
  color: #333;
}
/* notice */
.notice {
  background: #fff;
  height: 0.4rem;
  margin-top: 0.16rem;
}
.notice dl {
  overflow: hidden;
  position: relative;
  padding-left: 1.03rem;
}
.notice dt {
  width: 1.03rem;
  margin-top: 0.1rem;
  text-align: right;
  position: absolute;
  left: 0;
  top: 0;
}
.notice dt img {
  width: 0.84rem;
  margin-right: 0.08rem;
}

.notice dd {
  overflow: hidden;
  position: relative;
  height: 0.4rem;
}
.notice ul {
  position: absolute;
  height: 100%;
  top: 0;
  left: 0;
  width: 100%;
}
.notice ul li {
  line-height: 0.4rem;
  height: 0.4rem;
  padding-right: 0.12rem;
  font-size: 0.14rem;
}
</style>

