import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Home from '../pages/home.vue'
import Mine from '../pages/mine.vue'
import Discover from '../pages/discover.vue'
import Cart from '../pages/cart.vue'
import Login from '../pages/Login.vue'
import Reg from '../pages/Reg.vue'
import Goods from '../pages/goods.vue'
import axios from 'axios'
import store from '../vuex'

let Phone = {
    template:`<div>手机</div>`
}
let Computer = {
    template:`<div>电脑</div>`
}
let Tablet = {
    template:`<div>平板</div>`
}
let Acc = {
    template:`<div>配件</div>`
}

let router = new VueRouter({
    routes:[
        {
            name:'Home',
            path:'/home',
            // component:Home
            components:{
                default:Home,
            }
        },
        {
            name:'Discover',
            path:'/discover',
            component:Discover,
            children:[
                {
                    name:'Phone',
                    path:'phone',
                    component:Phone
                },
                {
                    name:'Computer',
                    path:'computer',
                    component:Computer
                },
                {
                    name:'Tablet',
                    path:'tablet',
                    component:Tablet
                },
                {
                    name:'Acc',
                    path:'acc',
                    component:Acc
                },
                {
                    path:'/',
                    redirect:{name:'Phone'}
                }
            ]
        },
        {
            name:'Cart',
            path:'/cart',
            component:Cart,
            meta: { requiresAuth: true }
        },
        {
            name:'Mine',
            path:'/mine',
            component:Mine,
            meta: { requiresAuth: true }
        },
        {
            path:'/',
            redirect:{name:'Home'}
        },
        {
            name:'Login',
            path:'/login',
            component:Login
        },
        {
            name:'Reg',
            path:'/reg',
            component:Reg
        },
        {
            name:'Goods',
            path:'/goods/:id',
            component:Goods
        }
        
    ],
    scrollBehavior (to, from, savedPosition) {       
        if(savedPosition) {
            setTimeout(() => {
                window.scrollTo(savedPosition.x, savedPosition.y)
            }, 200)
        }      
    }
})
router.beforeEach((to, from, next) => { 

    //判断是否需要权限
    if(to.matched.some(item=>item.meta.requiresAuth)){
        let token = localStorage.getItem('Authorization');     
        axios.get('/verify')
        if(token){
            next();
        }else{
            //没权限，跳到登录页
            next({path:'/login',query:{des:to.fullPath}})
        }
    }else{
        next();
    }
    
})

export default router;