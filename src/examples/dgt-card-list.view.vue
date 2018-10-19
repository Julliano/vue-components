<template>
    <div>
        <dgt-card-list :cards="listExample" header="Exemplo de título" sub-header="Exemplo de sub título"></dgt-card-list>
    </div>
</template>

<script>
    import dgtCardList from '../components/dgt-card-list.vue';

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
    ];
    export default {
        data() {
            return {
                listExample
            };
        },
        components: {
            dgtCardList
        }
    };
</script>