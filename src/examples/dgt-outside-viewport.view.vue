<style lang="scss">
  .force-overflow {
    height: 400px;
    overflow-y: auto;
    width: fit-content;
    .custom {
      --dgt-outside-display: flex;
      --dgt-outside-margin: 10px;
    }
  }
</style>


<template>
    <div class="force-overflow">
        <dgt-outside-viewport class="custom">
            <dgt-card :dataProps="data"></dgt-card>
        </dgt-outside-viewport>
        <dgt-outside-viewport class="custom">
            <dgt-card :dataProps="data"></dgt-card>
        </dgt-outside-viewport>
        <dgt-outside-viewport class="custom">
            <dgt-card :dataProps="data"></dgt-card>
        </dgt-outside-viewport>
        <dgt-outside-viewport class="custom">
            <dgt-card :dataProps="data"></dgt-card>
        </dgt-outside-viewport>
        <dgt-outside-viewport class="custom">
            <dgt-card :dataProps="data"></dgt-card>
        </dgt-outside-viewport>
        <dgt-outside-viewport class="custom">
            <dgt-card :dataProps="data"></dgt-card>
        </dgt-outside-viewport>
        <dgt-outside-viewport class="custom">
            <dgt-card :dataProps="data"></dgt-card>
        </dgt-outside-viewport>
        <dgt-outside-viewport class="custom">
            <dgt-card :dataProps="data"></dgt-card>
        </dgt-outside-viewport>
        <dgt-outside-viewport class="custom">
            <dgt-card :dataProps="data"></dgt-card>
        </dgt-outside-viewport>
        <dgt-outside-viewport class="custom">
            <dgt-card :dataProps="data"></dgt-card>
        </dgt-outside-viewport>
        <dgt-outside-viewport class="custom">
            <dgt-card :dataProps="data"></dgt-card>
        </dgt-outside-viewport>
        <dgt-outside-viewport class="custom">
            <dgt-card :dataProps="data"></dgt-card>
        </dgt-outside-viewport>
        <dgt-outside-viewport class="custom">
            <dgt-card :dataProps="data"></dgt-card>
        </dgt-outside-viewport>
        <dgt-outside-viewport class="custom">
            <dgt-card :dataProps="data"></dgt-card>
        </dgt-outside-viewport>
        <dgt-outside-viewport class="custom">
            <dgt-card :dataProps="data"></dgt-card>
        </dgt-outside-viewport>
        <dgt-outside-viewport class="custom">
            <dgt-card :dataProps="data"></dgt-card>
        </dgt-outside-viewport>
    </div>
</template>

<script>
    import dgtCard from '../components/dgt-card.vue';
    import dgtOutsideViewport from '../components/dgt-outside-viewport.vue';

    const data = {
        img: 'https://a.wattpad.com/useravatar/Kawaii_Doge09.128.860381.jpg',
        name: 'Nova pesquisa...',
        emit: 'New search',
        class: 'material-icons'
    };

    export default {
        name: 'dgtOutsideViewportView',
        components: {
            dgtCard,
            dgtOutsideViewport
        },
        data() {
            return {
                data
            };
        }
    };
</script>
