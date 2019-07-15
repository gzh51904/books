import Vue from 'vue'
import Vuex from 'vuex'
import cart from './cart'
import common from './common'
import reg from './reg'
Vue.use(Vuex)


const store = new Vuex.Store({
    modules:{
        cart,
        common,
        reg
    }
})

export default store;