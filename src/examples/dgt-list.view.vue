<style lang="scss" scoped>
.custom {
  --dgt-list-width: fit-content;
  --dgt-list-max-height: 400px;
  --dgt-list-padding: 2px 0 2px 10px;
}
</style>


<template>
    <dgt-list :list="list" :header="header" :sub-header="subHeader" class="custom">
        <template slot="main-slot" slot-scope="mainProps">
            <div class="list">
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
        components: {
            dgtCard,
            dgtList
        },
        data() {
            return {
                list: [
                    {
                        icon: 'time_to_leave',
                        url: '/uber',
                        name: 'Dados Uber',
                        class: 'material-icons',
                        subHeader: 'Atualizado 16/10/2018'
                    },
                    {
                        icon: 'image',
                        url: '/midias',
                        name: 'Histórico de localização',
                        class: 'material-icons',
                        subHeader: 'Atualizado 16/10/2018'
                    },
                    {
                        icon: 'time_to_leave',
                        url: '/uber',
                        name: 'Dados Uber',
                        class: 'material-icons',
                        subHeader: 'Atualizado 16/10/2018'
                    },
                    {
                        icon: 'image',
                        url: '/midias',
                        name: 'Mídias',
                        class: 'material-icons',
                        subHeader: 'Atualizado 16/10/2018'
                    },
                    {
                        icon: 'time_to_leave',
                        url: '/uber',
                        name: 'Dados Uber',
                        class: 'material-icons',
                        subHeader: 'Atualizado 16/10/2018'
                    }
                ],
                header: 'Exemplo de título',
                subHeader: 'Exemplo de sub título'
            };
        }
    };
</script>
