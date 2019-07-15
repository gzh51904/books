<template>
    <div class="content">
        <div class="resistForm">
            <div class="registSucess">
                <div class="sucessHead">
                    <img src="../assets/imgs/reg/registRight.png">
                </div>
                <div class="sucessMeg"><b>注册成功</b><span>新用户送一张<i>19减5</i>优惠劵</span></div>
            </div>
            <div class="nextStep btnOk" @click="go">
                <a href="#" >确定</a>
            </div>
        </div>
    </div>
</template>
<script>
import { mapMutations } from "vuex";
export default {
// computed: {
//   ...mapState({
//     regHeader(state) {
//       return state.reg.regHeader;
//     }
//   })
// },
created(){
    this.changeRegHeader(false)
},

destroyed(){
    this.changeRegHeader(true)
},
methods:{
    ...mapMutations(["changeRegHeader"]),
    go(){
        this.$router.push("/login");
    }
} 
}
</script>
<style scoped>
.resistForm {
    padding: 0 0.2rem 0.2rem;
}
.resistForm .registSucess {
    text-align: center;
    overflow: hidden;
}
.resistForm .registSucess .sucessHead {
    width: 1rem;
    margin: 0.5rem auto 0;
}
img {
    border: none;
    vertical-align: top;
    font-size: 12px;
}
.resistForm .registSucess .sucessHead img {
    width: 100%;
}
.resistForm .registSucess .sucessMeg {
    font-size: 0.26rem;
    color: #e60000;
    margin-top: 0.28rem;
}
.resistForm .registSucess .sucessMeg b {
    display: block;
    font-size: 0.46rem;
}
b, em, i, strong {
    font-style: normal;
    font-weight: 400;
}
.resistForm .registSucess .sucessMeg span {
    display: block;
    color: #333;
    margin-top: 0.28rem;
}
.resistForm .registSucess .sucessMeg span i {
    color: #e60000;
}
.resistForm .nextStep {
    width: 100%;
    margin-top: 0.5rem;
    height: 1rem;
    border-radius: 4px;
    text-align: center;
    line-height: 1rem;
    background: #e60000;
    color: #fff;
    font-size: 0.3rem;
    cursor: pointer;
}
.resistForm .nextStep a {
    display: block;
    height: 1rem;
    color: inherit;
}
</style>


