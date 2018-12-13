<style lang="scss">

</style>

<template>
    <div>
        <dgt-toast class="toast msg" ref="toast"></dgt-toast>
        <button class="btn btn-primary show-toast" @click="showToast">Show Toast</button>
    </div>
</template>

<script>
  import dgtToast from '../components/dgt-toast.vue';

  export default {
      name: 'dgtToastView',
      components: {
          dgtToast
      },
      methods: {
          showToast() {
              this.$refs.toast.showMessage('msg-error', 'Aconteceu algum erro', 3000);
          }
      }
  };
</script>
