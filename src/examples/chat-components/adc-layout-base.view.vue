<style lang="scss" scoped>
  .adc-base-chat-layout {
    height: 200px;
    display: flex;
    .column-1 {
      flex-basis: 40%;
      min-width: 300px;
      background: white;
    }
    .column-2 {
      flex-grow: 1;
      min-width: 400px;
      border-left: 3px solid grey;
      border-right: 3px solid grey;
      padding: 10px;
      background: #d1d1d1;
    }
  }
</style>

<template>
    <section class="adc-base-chat-layout">
        <dgt-layout class="column-1">
            Coluna 1
        </dgt-layout>
        <dgt-layout class="column-2">
            Coluna 2
        </dgt-layout>
    </section>
</template>

<script>
    import dgtLayout from '../../components/dgt-layout.vue';

    export default {
        name: 'AdcChatBaseLayoutView',
        components: {
            dgtLayout
        }
    };
</script>
