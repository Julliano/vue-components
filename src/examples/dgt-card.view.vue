<style lang="scss" scoped>
    .dgt-card-component {
        width: 200px;
        min-height: 55px;
        box-shadow: 0px 1px 4px 2px #c7c7c7;
        background: white;
        border-radius: 4px;
        padding: 10px;
        margin: 10px 12px 10px 0;
        cursor: pointer;
        display: inline-flex;
        i {
            font-size: 50px;
            width: 33%;
            margin: auto 0;
            opacity: 0.5;
        }
        div {
            margin: auto;
            width: 67%;
            .opacity-5 {
                opacity: 0.5;
            }
        }
    }
</style>

<template>
    <dgt-card :data="data" :style="'margin: 10px'"></dgt-card>
</template>

<script>
    import dgtCard from '../components/dgt-card.vue';

    export default {
        name: 'dgtCardView',
        data() {
            return {
                data: {
                    icon: 'add',
                    name: 'Nova pesquisa...',
                    url: 'New search'
                }
            };
        },
        methods: {
        },
        components: {
            dgtCard
        }
    };
</script>