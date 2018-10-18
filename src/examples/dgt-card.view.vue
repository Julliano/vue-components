<template>
    <div>
        <dgt-card-grid :cards="gridExample" header="Exemplo de título" sub-header="Exemplo de sub título" style="left: 300px"></dgt-card-grid>
        <div>
            <dgt-card :data="{ icon: 'add', name: 'Nova pesquisa...' }" style="margin: 20px"></dgt-card>
            <dgt-card-list :cards="listExample" header="Exemplo de título" sub-header="Exemplo de sub título"></dgt-card-list>
        </div>    
    </div>
</template>


<script>
    import dgtCard from '../components/dgt-card.vue';
    import dgtCardGrid from '../components/dgt-card-grid.vue';
    import dgtCardList from '../components/dgt-card-list.vue';

    let gridExample = [
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
    ]
    let listExample = [
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
    ]
    export default {
        data() {
            return {
                listExample,
                gridExample
            }
        }
    }
    
</script>