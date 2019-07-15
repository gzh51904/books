export default {
    state:{
        //用户手机号码密码
        phone:"",
        password:"",
        //顶部菜单
        regDisplay:true,
    },
    getters:{
        
    },
    mutations:{
        // 设置账号密码
        changePhone(state,phonenum){
            state.phone = phonenum;
        },
        changePassword(state,pswnum){
            state.password = pswnum;
        },
        // 设置顶部菜单
        changeRegHeader(state,bool){
            state.regDisplay = bool;
        }
    }
}