export default {
    state:{
        //路由状态
        appActive:'',
        //登录状态
        logined:false,
    },
    getters:{
        
    },
    mutations:{
        //改变登录状态
        changeLog(state,log){       
            state.logined = log;
            console.log('vuex:',state.logined)    
            sessionStorage.setItem('log',log);
        },
        changeAppActive(state,active){
            state.appActive = active;
        }
    }
}