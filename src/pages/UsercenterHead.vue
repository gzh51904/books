<template>
  <div class="text-center">
    <img v-if="userAvatar" :src="userAvatar">
    <!-- <button id="pick-avatar">Select an image</button> -->
    <img id="pick-avatar" src="../assets/imgs/usercenter/portrait.png">
    <avatar-cropper
      @uploaded="handleUploaded"
      trigger="#pick-avatar"
      upload-url="../assets/imgs/usercenter/portrait.png" />
  </div>
</template>

<script>
  import AvatarCropper from "vue-avatar-cropper"

  export default {
    components: { AvatarCropper },
    data() {
      return {
          userAvatar: undefined,
      }
    },
    methods: {
      handleUploaded(resp) {
        this.userAvatar = resp.relative_url;
      }
    }
  }
</script>