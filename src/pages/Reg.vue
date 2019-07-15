<template>
  <div>
    <div v-show="headerShow">
      <regheader ></regheader>
    </div>
    
    <router-view/>
  </div>
</template>
<script>
import regheader from "./RegHeader"
import { mapState} from "vuex";
export default {
  computed:{
    ...mapState({
      headerShow(state) {

        return state.reg.regDisplay;
      }
    })
  },
  components:{
    regheader,
  },
}
</script>
<style>

</style>