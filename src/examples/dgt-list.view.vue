<style lang="scss">
.custom {
  --dgt-list-width: fit-content;
  --dgt-list-max-height: 400px;
  --dgt-list-padding: 2px 0 2px 10px;
}
</style>


<template>
    <dgt-list :list="listProps.list" :header="listProps.header" :sub-header="listProps.subHeader" class="custom">
        <template slot="main-slot" slot-scope="slotProps">
            <div class="list">
                <dgt-card v-for="card in slotProps.list" :key="card.id" :dataProps="card" :style="card.style"></dgt-card>
            </div>
        </template>
    </dgt-list>
</template>

<script>
    import dgtList from '../components/dgt-list.vue';
    import dgtCard from '../components/dgt-card.vue';

    const listProps = {
        list: [
            {
                icon: 'time_to_leave',
                emit: '/uber',
                name: 'Dados Uber',
                class: 'material-icons',
                subHeader: 'Atualizado 16/10/2018'
            },
            {
                icon: 'image',
                emit: '/midias',
                name: 'Histórico de localização',
                class: 'material-icons',
                subHeader: 'Atualizado 16/10/2018'
            },
            {
                icon: 'time_to_leave',
                emit: '/uber',
                name: 'Dados Uber',
                class: 'material-icons',
                subHeader: 'Atualizado 16/10/2018'
            },
            {
                icon: 'image',
                emit: '/midias',
                name: 'Mídias',
                class: 'material-icons',
                subHeader: 'Atualizado 16/10/2018'
            },
            {
                icon: 'time_to_leave',
                emit: '/uber',
                name: 'Dados Uber',
                class: 'material-icons',
                subHeader: 'Atualizado 16/10/2018'
            }
        ],
        header: 'Exemplo de título',
        subHeader: 'Exemplo de sub título'
    };

    export default {
        name: 'dgtListView',
        components: {
            dgtCard,
            dgtList
        },
        data() {
            return {
                listProps
            };
        }
    };
</script>
