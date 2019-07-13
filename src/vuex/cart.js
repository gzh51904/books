export default {
    state:{
        //购物车商品列表
        goodslist:[{
            id:1,
            img:'http://image31.bookschina.com/2018/zuo/9/1362558.jpg',
            title:'摆渡人',
            price:36,
            zhekou:24.5,
            numbers:8,
            isChecked:false
        },{ 
            id:2,
            img:'http://image31.bookschina.com/2005/051219/894305.jpg',
            title:'传奇传',
            price:20,
            zhekou:10.5,
            numbers:3,
            isChecked:false
  
        },{
            id:3,
            img:'http://image31.bookschina.com/2009/20090511/469666.jpg',
            title:'插图本说岳全传',
            price:28.5,
            zhekou:23.4,
            numbers:5,
            isChecked:false
        },{
            id:4,
            img:'http://image31.bookschina.com/2018/zuo/9/1362558.jpg',
            title:'明代笔记小说大观(全四册)',
            price:298.5,
            zhekou:217.4,
            numbers:5,
            isChecked:false
        }],
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
                    item.numbers +=1; 
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