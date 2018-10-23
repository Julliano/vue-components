<style lang="scss" scoped>
    .dgt-card-list {
        padding: 10px;
        width: fit-content;
        h4, small {
            margin: 0;
            padding: 1px;
        }
        hr {
            margin-bottom: 1px;
            box-shadow: 0px 1px 0px 0px #C7C7C7;
            border-bottom: 0;
        }
        .cards {
            flex-wrap: wrap;
            display: grid;
            overflow-y: scroll;
            max-height: 400px;
            padding: 2px 0 2px 10px;
        }
    }
</style>

<template>
    <div class="dgt-card-list">
        <h4 v-if="header">{{ header }}</h4>
        <small v-if="subHeader">{{ subHeader }}</small>
        <hr>
        <div class="cards">
            <dgt-card v-for="card in list" :key="card.id" :data="card" :style="card.style"></dgt-card>
        </div>
    </div>
</template>
<script>
    import dgtCard from './dgt-card.vue';
    export default {
        name: 'dgtCardList',
        props: {
            list: Array,
            header: String,
            subHeader: String
        },
        components: {
            dgtCard
        }
    };
</Script>