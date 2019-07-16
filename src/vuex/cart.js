export default {
    state:{
        //购物车商品列表
        goodslist:[],
    },
    // getters:{
    //     saleGoodslist(state){
    //         return state.goodslist.map(item=>{
    //             item.price *= 0.8;
    //             return item;
    //         })
    //     },
    // },
    mutations:{

        add(state,goods){      
            // state.goodslist = state.goodslist.map(item=>{
            //      if(item.id == id){
            //     item.numbers = item.numbers*1+1
            // }else{
                state.goodslist.unshift(goods);
            // }
            // })
        },
        remove(state,id){
            console.log(id);
            state.goodslist = state.goodslist.filter(item=>item.id!=id);
        },
        cut(state,id){
            console.log("cutid",id);
            state.goodslist = state.goodslist.map(item=>{
                if(item.id == id){
                    item.numbers -=1;
                    if(item.numbers <= 1) item.numbers = 1
                }
                return item;
            })
        },
        addnum(state,id){
             state.goodslist = state.goodslist.map(item=>{
                 if(item.id == id){
                  item.numbers=  item.numbers*1 +1; 
                    // console.log(item.numbers)
                   console.log(item)
                 } 
                 return item;
                
             })
        },
        changnum(state,{id,numbers}){
            state.goodslist.forEach(item=>{
                if(item.id == id){
                    item.numbers = numbers
                }
                console.log(numbers)
            })
        },
        blurnum(state,{id,numbers}){
           state.goodslist.forEach(item=>{
            if(item.id == id){
                item.numbers = numbers
            }
            console.log(numbers)
        })
        },
        // Checked(state,id){
        //     state.goodslist.forEach(item=>{
        //         if(item.id == id){
        //             item.isChecked = !isChecked
        //         }
        //         console.log(isChecked)
        //     })
        // }
    }
}