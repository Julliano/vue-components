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
    <dgt-list :list="list" :header="header" :sub-header="subHeader">
        <template slot="main-slot" slot-scope="mainProps">
            <div class="cards">
                <dgt-card v-for="card in mainProps.list" :key="card.id" :data="card" :style="card.style"></dgt-card>
            </div>
        </template>
    </dgt-list>
</template>

<script>
    import dgtList from '../components/dgt-list.vue';
    import dgtCard from '../components/dgt-card.vue';

    export default {
        name: 'dgtListView',
        data() {
            return {
                list: [
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
                ],
                header: 'Exemplo de título',
                subHeader: 'Exemplo de sub título'
            };
        },
        components: {
            dgtCard,
            dgtList
        }
    };
</script>