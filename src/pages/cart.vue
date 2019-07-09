<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="5">#</el-col>
      <el-col :span="5">商品名</el-col>
      <el-col :span="5">价格</el-col>
      <el-col :span="5">数量</el-col>
      <el-col :span="4">操作</el-col>
    </el-row>
    <el-row :gutter="20" v-for="item in cartlist" :key="item._id">
      <el-col :span="5">{{item.idx}}</el-col>
      <el-col :span="5">{{item.goodname}}</el-col>
      <el-col :span="5">{{item.price}}</el-col>
      <el-col :span="5">
          <el-input-number
            size="mini"
            :min="1"
            v-model="item.qty"
            @change="changeQty(item._id,item.qty)"
            @blur="check(item._id)"
          ></el-input-number>
        </el-col>
      <el-col :span="4"><el-button @click="remove(item._id)" type="text" size="small">删除</el-button></el-col>
    </el-row>
    <div>总价：￥ {{totalPrice.toFixed(2)}}</div>
  </div>
</template>
<script>

export default {
  data() {
    return {};
  },
  computed: {
    cartlist() {
      return this.$store.state.cart.goodslist.map((item, idx) => {
        return {
          idx: idx + 1,
          ...item
        };
      });
    },
    totalPrice() {
      return this.$store.state.cart.goodslist.reduce((pre, item) => {
        return pre + item.price * item.qty;
      }, 0);
    },
    
  },
  methods: {
    remove(id) {
      this.$store.commit("remove",id);
    },
    changeQty(id, qty) {
      this.$store.commit("changeQty", { id, qty });
    },
    check(id){
        let current = this.$store.state.cart.goodslist.filter(item=>item._id==id)[0]
        if(!(current.qty > 0)){
            current.qty = 1;
        }
    }
  },
  created() {
    console.log("store:", this.cartlist);
  }
};
</script>
<style scoped>
.el-row{
    margin-bottom:10px;
}
.el-col{
    text-align:center;
}
.el-input-number--mini{
    width:90px;
}
</style>
