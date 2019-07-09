export default {
    state:{
        //购物车商品列表
        goodslist:[],
    },
    getters:{
        saleGoodslist(state){
            return state.goodslist.map(item=>{
                item.price *= 0.8;
                return item;
            })
        },
    },
    mutations:{
        add(state,goods){
            state.goodslist.unshift(goods);
        },
        remove(state,id){
            state.goodslist = state.goodslist.filter(item=>item._id!=id);
        },
        changeQty(state,{id,qty}){
            state.goodslist.forEach(item=>{
                if(item._id == id){
                    item.qty = qty
                }
            })
        },
    }
}