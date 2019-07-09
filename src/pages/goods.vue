<template>
  <div v-if="info">
    <p>{{info.goodname}}</p>
    <p>
      原价：￥
      <del>{{info.price*1.2}}</del>
      <span>现价：￥{{info.price}}</span>
    </p>
    <el-button type="danger" @click="add2cart()">加入购物车</el-button>
    
  </div>
</template>
<script>
export default {
  data() {
    return {
      info: false,
    };
  },
  async created() {
    let { id } = this.$route.params;
    let res = await this.$axios.get(`/goods/${id}`);
    this.info = res.data.data[0];
  },
  methods: {
    add2cart() {
      let { commit, state } = this.$store;
      let { goodslist } = state;
      let { _id: id } = this.info;

      let current = goodslist.filter(item => item._id == id)[0];

      if (current) {
        commit("changeQty", { id, qty: current.qty + 1 });
      } else {
        commit("add", { qty: 1, ...this.info });
      }
    }
  }
};
</script>
<style>

</style>
