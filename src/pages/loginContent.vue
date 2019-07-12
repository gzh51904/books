<template>
    <div class="content">
        <loginForm/>
        <loginThirdLogin/>
        <div class="explainLink"><a href="/Help/Thirdexplain">如何绑定微信和中图网账户?</a></div>
    </div>
</template>
<script>
import loginForm from "./loginForm"
import loginThirdLogin from "./loginThirdLogin"
export default {
    components:{
        loginForm,
        loginThirdLogin
    }
}
</script>
<style>
.explainLink {
    color: #666;
    font-size: 0.26rem;
    text-align: center;
    margin-top: 1rem;
    padding: 0.2rem 0;
}
.explainLink a{
    color: inherit;
}
</style>

