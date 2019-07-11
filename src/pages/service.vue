<template>
  <div>
    <div class="fh" @click="goback">
      <span class="lt">&lt;</span>
      <span class="line"></span>
    </div>
    <div class="gb" @click="goHome">
      <span class="line line1"></span>
      <span class="line line2"></span>
    </div>
    <ul class="msg" ref="msg">
      <li class="loadingtime">
        <div>{{loadingTime}}</div>
      </li>
      <li class="lf">
        <img src="../assets/imgs/kf.jpg" />
        <div>
          <span>客服专员055</span>
          <div>
            <div>
              欢迎光临中国图书网，我是今天的值班客服，很高兴为您服务！ &nbsp;&nbsp;
              <br />
              <br />囤书避暑低至1元，3本折上7折
              <br />
              <br />（活动时间：2019.7.10 &nbsp;&nbsp;10.00--2019.7.17 10.00）活动链接：
              <div>
                <a
                  href="http://www.bookschina.com/Subject/190710sx.aspx"
                >http://www.bookschina.com/Subject/190710sx.aspx</a>
              </div>
            </div>
          </div>
        </div>
      </li>
      <!-- 信息列表 -->
      <serviceLi :class="item.position" v-for="(item,idx) in msgList" :key="idx">
        <template v-slot:rg v-if="item.position == 'rg'">
          <div>{{item.content}}</div>
        </template>
        <template v-slot:lf v-else>
          <img src="../assets/imgs/kf.jpg" />
          <div>
            <span>客服专员055</span>
            <div>
              <div>{{item.content}}</div>
            </div>
          </div>
        </template>
      </serviceLi>
    </ul>
    <div class="input">
      <textarea
        id="chat-input-text-box"
        placeholder="我想问..."
        rows="1"
        minheight="17"
        maxheight="240"
        timer1="null"
        v-model="currentMsg"
        @keyup.enter="sendMsg"
      ></textarea>
      <svg>
        <circle
          class="bkg"
          cx="16"
          cy="16"
          r="15"
          stroke-width="1"
          stroke="#808080"
          fill="#F9F9F9"
        />
        <ellipse cx="16" cy="19" rx="9" ry="7" stroke-width="1" stroke="#808080" fill="#808080" />
        <rect x="6" y="10" width="20" height="8" stroke-width="1" stroke="#F9F9F9" fill="#F9F9F9" />
        <circle cx="11" cy="10" r="2" stroke-width="1" stroke="#808080" fill="#808080" />
        <circle cx="21" cy="10" r="2" stroke-width="1" stroke="#808080" fill="#808080" />
      </svg>
      <svg >
        <circle cx="16" cy="16" r="15" stroke-width="1" stroke="#808080" fill="#F9F9F9" />
        <rect
          x="15"
          y="6"
          rx="15"
          ry="6"
          width="1"
          height="20"
          stroke-width="1"
          stroke="#808080"
          fill="#808080"
        />
        <rect
          x="6"
          y="15"
          rx="6"
          ry="15"
          width="20"
          height="1"
          stroke-width="1"
          stroke="#808080"
          fill="#808080"
        />
      </svg>
    </div>
  </div>
</template>
<script>
import serviceLi from "./serviceLi.vue";
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      msgList: [
        
      ],
      currentMsg: "",
      loadingTime: "",
      msgTop:0,
    };
  },
  computed: {},
  methods: {
    ...mapMutations(["changeMenuShow"]),
    goback() {
      window.history.back();
    },
    goHome() {
      this.$router.push({ name: "Home" });
      this.changeMenuShow(true);
    },
    //发送消息
    sendMsg(){
      if(this.currentMsg.trim().length > 0){
        this.msgList.push({content:this.currentMsg,position:"rg"})
        this.currentMsg = "";
        this.debugHeight();
        this.msgTop = this.msgTop + 30;
        setTimeout(()=>{
          this.msgList.push({content:"沙雕",position:"lf"})
          this.debugHeight();
          window.scrollTo(0,this.msgTop)
        },1000)
      }   
    },
    debugHeight(){
      //解决ul高度塌陷
      let oLis = this.$refs.msg.children;
      [].map.call(oLis, item => {
        let oDiv = [].filter.call(item.children, ele => ele.tagName == "DIV");
        item.style.height = (oDiv[0].offsetHeight + 12)/60 + "rem";
      });

    }
  },
  created() {
    this.loadingTime =
      ("00" + new Date().getHours()).slice(-2) +
      ":" +
      ("00" + new Date().getMinutes()).slice(-2);
  },
  mounted() {
    this.debugHeight();
  },
  components: {
    serviceLi
  }
};
</script>
<style>
.fh,
.gb {
  position: fixed;
  width: 0.6rem;
  height: 0.6rem;
  z-index: 50;
  border-radius: 50%;
  top: 0.22rem;
  background-color: #fff;
  opacity: 0.7;
}
.fh {
  left: 15px;
}
.gb {
  right: 15px;
}
.fh > .lt {
  display: inline-block;
  line-height: 0.4rem;
  height: 0.4rem;
  width: 0.4rem;
  text-align: center;
  font-size: 0.4rem;
  font-family: iconfont;
  opacity: 1;
  z-index: 10;
  margin: 3px 0 0 0;
  color: #e56060;
}
.fh > .line,
.gb > .line {
  display: inline-block;
  width: 0.3rem;
  height: 2px;
  background: #e56060;
  position: absolute;
  top: 0.25rem;
  z-index: 100;
  opacity: 1;
  left: 0.15rem;
}

.gb > .line1 {
  width: 0.4rem;
  transform: translate(-0.06rem, 0.03rem) rotate(45deg);
}
.gb > .line2 {
  width: 0.4rem;
  transform: translate(-0.06rem, 0.03rem) rotate(-45deg);
}

.msg {
  margin: 0;
  padding: 0;
  border: none;
  float: none;
  width: auto;
  height: auto;
  min-width: none;
  min-height: none;
  max-width: none;
  max-height: none;
  clear: none;
  position: static;
  left: auto;
  top: auto;
  right: auto;
  bottom: auto;
  text-align: left;
  box-sizing: content-box;
  color: #000;
  background-color: transparent;
  font: normal normal normal 12px/160% Arial, Microsoft YaHei;
  font-size: 0.23rem;
  list-style: none;
  margin: 0px 0.1rem;
  background: transparent;
  margin-bottom: 2rem;
}
.msg li {
  position: relative;
}
.msg li.lf img {
  width: 0.6rem;
  height: 0.6rem;
  position: absolute;
  top: 0.1rem;
  left: 0.2rem;
}
.msg li.rg::before {
  content: "";
  width: 0.6rem;
  height: 0.6rem;
  position: absolute;
  top: 0.1rem;
  right: 0.2rem;
  border-radius: 0.08rem;
  background: url("../assets/imgs/mobileicon.png") no-repeat -309px -12px;
}

.msg .loadingtime {
  margin-top: 0.45rem;
  text-align: center;
  color: #ababab;
}

.msg li.lf > div {
  position: absolute;
  top: 0.1rem;
  left: 1rem;
  max-width: 4rem;
  word-break: break-all;
}
.msg li.rg > div {
  position: absolute;
  top: 0.1rem;
  right: 1rem;
  max-width: 4rem;
  word-break: break-all;
}
.msg li.lf > div > span {
  color: #ababab;
  font-size: 0.2rem;
  padding-left: 0.05rem;
  height: 0.2rem;
  line-height: 0.2rem;
  margin-top: -0.05rem;
}

.msg li.lf > div > div {
  background: #fff;
  color: #6c6c6c;
  padding: 0.1rem;
}
.msg li.rg div {
  background: #cef2ff;
  color: #6c6c6c;
  padding: 0.1rem;
}

.msg li.lf > div > div::before {
  content: "";
  position: absolute;
  border: 0.18rem solid transparent;
  border-right-color: #fff;
  left: -0.35rem;
  display: block;
}

.msg li.rg > div::before {
  content: "";
  position: absolute;
  border: 0.15rem solid transparent;
  border-left-color: #cef2ff;
  right: -0.25rem;
  display: block;
}
.msg li.lf > div a {
  color: #0a8cd2;
  text-decoration: underline;
}

.input {
  height: 0.83rem;
  position: fixed;
  bottom:0;
  display:flex;
  width:100%;
  max-width:640px;
  background:rgb(249, 249, 249);
}
.input textarea{
    flex:2;
    margin-top:0.1rem;
    margin-left:0.1rem;
    max-height: none;
    clear: none;
    position: static;
    left: auto;
    top: auto;
    right: auto;
    bottom: auto;
    text-align: left;
    box-sizing: content-box;
    color: rgb(0, 0, 0);
    font: 0.25rem/0.32rem Arial, "Microsoft YaHei";
    background: rgb(255, 255, 255);
    height: 0.24rem;
    width: 100%;
    resize: none;
    outline: none;
    padding: 0.2rem 0px 0.2rem 0.1rem;
    border: 1px solid rgb(212, 212, 212);
    border-radius: 0.1rem;
    user-select: auto;
    overflow-y: hidden;
}
.input svg{
  margin:0.2rem 0.03rem;
  width:0.6rem;
  height:0.6rem;
}
</style>
