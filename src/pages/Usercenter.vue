<template>
<div>
    <usercenter-header></usercenter-header>

    <usercenterinfor></usercenterinfor>
    <usercenterother></usercenterother>
</div>
</template>
<script>
import usercenterinfor from "./UsercenterInfor";
import usercenterHeader from "./UsercenterHeader";
import usercenterother from "./UsercenterOther";

export default {
    components:{
        usercenterHeader,
        usercenterinfor,
        usercenterother,
       
    }
}
</script>

