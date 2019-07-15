<template>
    <div>
        <mine-head></mine-head>
        <mine-order-bar></mine-order-bar>
        <mine-assets-bar></mine-assets-bar>
        <mine-shortcut></mine-shortcut>
    </div>
</template>
<script>
import mineHead from "./mineHead";
import mineOrderBar from "./mineOrderBar";
import mineAssetsBar from "./mineAssetsBar";
import mineShortcut from "./mineShortcut";
export default {
    components:{
        mineHead,
        mineOrderBar,
        mineAssetsBar,
        mineShortcut
    }
}
</script>

