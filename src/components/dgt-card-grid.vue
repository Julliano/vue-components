<style lang="scss" scoped>
    #dgt-card-grid {
        padding: 10px;
        h4, small {
            margin: 0;
            padding: 1px;
        }
        .cards {
            flex-wrap: wrap;
            display: flex;
        }
    }
</style>
<template>
    <div id="dgt-card-grid" class="component">
        <h4 v-if="header">{{ header }}</h4>
        <small v-if="subHeader">{{ subHeader }}</small>
        <div class="cards">
            <dgt-card v-for="card in cards" :key="card.id" :data="card" :style="card.style"></dgt-card>
        </div>
    </div>
</template>
<script>
    import dgtCard from './dgt-card.vue';
    export default {
        name: 'dgtCardGrid',
        props: {
            cards: Array,
            header: String,
            subHeader: String
        },
        components: {
            dgtCard
        }
    };
</Script>