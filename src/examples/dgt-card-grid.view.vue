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
    <div id="dgt-card-grid">
        <h4 v-if="header">{{ header }}</h4>
        <small v-if="subHeader">{{ subHeader }}</small>
        <div class="cards">
            <dgt-card v-for="card in cards" :key="card.id" :data="card" :style="card.style"></dgt-card>
        </div>
    </div>
</template>

<script>
    import dgtCard from '../components/dgt-card.vue';

    let cards = [
        {
            icon: 'calendar_today',
            url: '/midias',
            name: 'Agenda',
            count: 0
        },
        {
            icon: 'time_to_leave',
            url: '/uber',
            name: 'Dados Uber',
            count: 12
        },
        {
            icon: 'image',
            url: '/midias',
            name: 'Mídias',
            count: 0
        },
        {
            icon: 'time_to_leave',
            url: '/uber',
            name: 'Dados Uber',
            count: 12
        },
        {
            icon: 'image',
            url: '/midias',
            name: 'Histórico de localização',
            count: 0
        },
        {
            icon: 'time_to_leave',
            url: '/uber',
            name: 'Dados Uber',
            count: 12
        },
        {
            icon: 'image',
            url: '/midias',
            name: 'Mídias',
            count: 0
        },
        {
            icon: 'time_to_leave',
            url: '/uber',
            name: 'Dados Uber',
            count: 12
        }
    ];
    export default {
        data() {
            return {
                cards,
                header: 'Exemplo de título',
                subHeader: 'Exemplo de sub título'
            };
        },
        components: {
            dgtCard
        }
    };
</script>