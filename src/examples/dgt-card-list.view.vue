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
    import dgtCard from '../components/dgt-card.vue';

    let list = [
        {
            icon: 'calendar_today',
            url: '/midias',
            name: 'Agenda',
            subHeader: 'Atualizado 16/10/2018'
        },
        {
            icon: 'time_to_leave',
            url: '/uber',
            name: 'Dados Uber',
            subHeader: 'Atualizado 16/10/2018'
        },
        {
            icon: 'image',
            url: '/midias',
            name: 'Mídias',
            subHeader: 'Atualizado 16/10/2018'
        },
        {
            icon: 'time_to_leave',
            url: '/uber',
            name: 'Dados Uber',
            subHeader: 'Atualizado 16/10/2018'
        },
        {
            icon: 'image',
            url: '/midias',
            name: 'Histórico de localização',
            subHeader: 'Atualizado 16/10/2018'
        },
        {
            icon: 'time_to_leave',
            url: '/uber',
            name: 'Dados Uber',
            subHeader: 'Atualizado 16/10/2018'
        },
        {
            icon: 'image',
            url: '/midias',
            name: 'Mídias',
            subHeader: 'Atualizado 16/10/2018'
        },
        {
            icon: 'time_to_leave',
            url: '/uber',
            name: 'Dados Uber',
            subHeader: 'Atualizado 16/10/2018'
        }
    ];
    export default {
        data() {
            return {
                list,
                header: 'Exemplo de título',
                subHeader: 'Exemplo de sub título'
            };
        },
        components: {
            dgtCard
        }
    };
</script>