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
  components:{
    goodstop,
    goodscontent,
    goodsbotton
  }
};
</script>
<style>

</style>
