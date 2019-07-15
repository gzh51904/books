<template>
  <div class="goods">
    <goodstop></goodstop>
    <!-- goods顶部 -->
    <goodscontent></goodscontent>
    <!-- goods主体 -->
    <goodsbotton></goodsbotton>
    <!-- goods底部 -->
  </div>
</template>
<script>
import goodstop from "./goodstop.vue"
import goodscontent from "./goodscontent.vue"
import goodsbotton from "./goodsbotton.vue"
export default {
  data(){
    return{

    }
  },
  mounted() {
    //监听滚动条滚动
    // window.addEventListener("scroll", this.handleScroll);

  },
  methods:{
    //  handleScroll(idx){
    //   let top = window.pageYOffset ||
    //     document.documentElement.scrollTop ||
    //     document.body.scrollTop;
    //     // console.log(top)
    //    let lishow = document.getElementsByClassName("listshow");
		// 				if(top >= lishow[0].offsetTop) {
		// 					// console.log(lishow[i].offsetTop);、
    //           lishow[idx].className = '';
    //           lishow[0].className = 'current'
		// 					}else if(top >= lishow[1].offsetTop){
    //             lishow[idx].className = '';
    //             lishow[1].className = 'current'
    //           }else{
    //             lishow[idx].className = '';
    //             lishow[2].className = 'current'
    //           }
							
		// 				}
  },
  components:{
    goodstop,
    goodscontent,
    goodsbotton
  }
};
</script>
<style scoped>

</style>
